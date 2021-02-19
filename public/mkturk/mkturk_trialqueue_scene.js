class TrialQueueScene { 

constructor(samplingStrategy){
	// Properties
	this.samplingStrategy = samplingStrategy; 

	// Queues
	this.sampleq = {}
	this.sampleq.index = []; 
	this.sampleq.filename = [];
	this.samplebucket = [];
	
	this.sound_sampleq = {'index': [], 'filename': []}
	this.sound_samplebucket = [];

	this.testq = {}
	this.testq.indices = []; 
	this.testq.correctIndex = [];
	this.testq.filenames = []; 


	this.currentbag = -1;

	// ImageBuffer
	this.IB = new ImageBuffer(); // AK: "ImageBuffer" is a bit of a misnomer, as I've extended it to handle sounds, as well

	// Settings 
	this.max_queue_size = 5200; // Max number of trials (and their images) to have prepared from now; to improve browser performance
	this.num_in_queue = 0; // Tracking variable
}

async build(trial_cushion_size){
	// Call after construction
	this.samplebag_labels = [];
	this.samplebag_indices = [];
	this.samplebag_paths = [];
	for (var i=0; i <= IMAGES["Sample"].length-1; i++){
		for (var j=0; j<= IMAGES["Sample"][i].nimages-1; j++){
			this.samplebag_labels.push(i)
			this.samplebag_indices.push(j)
		} //for j scene renders, assign label

		//get background images, if any
		if (IMAGES["Sample"][i].nbackgroundimages > 0){
			var funcreturn = await loadImageBagPathsParallelFirebase([IMAGES["Sample"][i].IMAGES.imagebag]); 
			this.samplebag_paths[i] = funcreturn[0]; 
		}
		else {
			this.samplebag_paths[i] = []
		}
	} //for i scene bags (labels)

	this.samplebag_block_indices = new Array(this.samplebag_labels.length)
	for (var i = 0; i<=this.samplebag_labels.length-1; i++){
		this.samplebag_block_indices[i] = i;
	}


	// Generate audio sample sound bags
	this.sound_samplebag_labels = [];
	this.sound_samplebag_indices = [];
	this.sound_samplebag_paths = [];
	for (var i=0; i<=IMAGES["Sample"].length-1; i++){
		for (var j=0; j<=IMAGES["Sample"][i].nsounds-1; j++){
			this.sound_samplebag_labels.push(i);
			this.sound_samplebag_indices.push(j);
		} // for j scene renders, assign the label for the image

		// get the sounds, if any
		if (IMAGES["Sample"][i].nsounds > 0){
			var funcreturn = await loadImageBagPathsParallelFirebase([IMAGES["Sample"][i].SOUNDS.soundbag], 'wav'); // 2nd arg is the file ext
			this.sound_samplebag_paths[i] = funcreturn[0];
		}
		else {
			this.sound_samplebag_paths[i] = [];
		}
	} // for i scene bags (labels)

	this.sound_samplebag_block_indices = new Array(this.sound_samplebag_labels.length);
	for (var i = 0; i<=this.sound_samplebag_labels.length-1; i++){
		this.sound_samplebag_block_indices[i] = i;
	}

	// // AK TODO: implement for test sounds, as well


	this.testbag_labels = [];
	this.testbag_paths = [];
	this.testbag_indices = [];
	for (var i=0; i <= IMAGES["Test"].length-1; i++){
		for (var j=0; j<= IMAGES["Test"][i].nimages-1; j++){
			this.testbag_labels.push(i)
			this.testbag_indices.push(j)
		} //for j scene renders, assign label

		//get background images, if any
		if (IMAGES["Test"][i].nbackgroundimages > 0){
			var funcreturn = await loadImageBagPathsParallelFirebase([IMAGES["Test"][i].IMAGES.imagebag]); 
			this.testbag_paths[i] = funcreturn[0]; 
		}
		else {
			this.testbag_paths[i] = []
		}
	} //for i scene bags (labels)


	for (var i=0; i<=this.samplebag_indices.length-1; i++){
		this.samplebucket.push(i)
	}
	for (var i=0; i<=this.sound_samplebag_indices.length-1; i++){
		this.sound_samplebucket.push(i)
	}

	// array of zeros
	this.ntrials_per_bag = new Array(Math.max(...this.samplebag_labels)+1)
	this.ntrials_per_bag.fill(0,0,this.ntrials_per_bag.length)

	this.sound_n_trials_per_bag = new Array(Math.max(... this.sound_samplebag_labels)+1)
	this.sound_n_trials_per_bag.fill(0,0,this.sound_n_trials_per_bag.length);

	console.log('this.build() will generate ' + trial_cushion_size + ' trials')
	await this.generate_trials(trial_cushion_size); 
}

async generate_trials(n_trials){
	// Performance critical: sometimes called by this.get_next_trial() (when TQ is empty), which is called during each mkturk trial

	// Adds trials to queue and downloads their images 

	n_trials = Math.min(this.max_queue_size - this.num_in_queue, n_trials);
	if (this.max_queue_size <= this.num_in_queue){
		n_trials=0
	}
	if(n_trials == 0){
		console.log('TQ.generate_trials(): Queue is full or no trials were requested')
		return 
	}

	var image_requests = [];
	var sound_requests = []; 

	// console.log('TQ.generate_trials() will generate '+n_trials+' trials')
	for (var i = 0; i < n_trials; i++){
		if (TASK.NTrialsPerBagBlock <= 0){
			// do nothing
		} //use all bags in block
		else if (TASK.NTrialsPerBagBlock > 0){
			if (this.currentbag < 0 || this.ntrials_per_bag[this.currentbag] == TASK.NTrialsPerBagBlock){
				
				// Increment bag
				if (this.currentbag < 0){
					this.currentbag = 0; //initialize with first bag
				}
				else{
					this.ntrials_per_bag[this.currentbag] = 0; //reset trials
					this.currentbag = this.currentbag + 1; //go to next bag

					if (this.currentbag >= this.ntrials_per_bag.length){
						this.currentbag = 0; //go back to first bag
					}
				}

				// make new bag
				this.samplebag_block_indices = []
				for (var j = 0; j <= this.samplebag_labels.length-1; j++){
					if (this.samplebag_labels[j] == this.currentbag){
						this.samplebag_block_indices.push(j)
					}
				} //for j images in bag
			} // if ntrials_per_bag exceeded
		} // if sample all bags vs blocks

		// Draw one (1) sample image from samplebag
		var sample_index = this.selectSampleStimulus(this.samplebag_block_indices, this.samplingStrategy)
		var sample_scenebag_label = this.samplebag_labels[sample_index]; 
		var sample_scenebag_index = this.samplebag_indices[sample_index];

		var sample_filename = []
		if (Array.isArray(IMAGES["Sample"][sample_scenebag_label].IMAGES.imageidx[sample_scenebag_index])){
			for (var j = 0; j<IMAGES["Sample"][sample_scenebag_label].IMAGES.imageidx[sample_scenebag_index].length; j++){
				sample_filename.push(this.samplebag_paths[sample_scenebag_label][IMAGES["Sample"][sample_scenebag_label].IMAGES.imageidx[sample_scenebag_index][j]] || "")
			} 
			image_requests.push(... sample_filename)   
		}//IF isArray Sample (movie)
		else {
		 sample_filename = this.samplebag_paths[sample_scenebag_label][IMAGES["Sample"][sample_scenebag_label].IMAGES.imageidx[sample_scenebag_index]] || "";	
		 image_requests.push(sample_filename)
		}//ELSE single image

		this.ntrials_per_bag[sample_scenebag_label] += 1;
		
		// Draw a sample sound, as well
		var sound_sample_index = this.selectSampleStimulus(this.sound_samplebag_indices, this.samplingStrategy, false) // final argument is for <is_image>
		var sound_sample_scenebag_label = this.sound_samplebag_labels[sound_sample_index];
		var sound_sample_scenebag_index = this.sound_samplebag_indices[sound_sample_index];

		var sound_sample_filename = [];
		if (Array.isArray(IMAGES["Sample"][sound_sample_scenebag_label].SOUNDS.soundidx[sound_sample_scenebag_index])) {
			for (var j=0; j<IMAGES["Sample"][sound_sample_scenebag_label].SOUNDS.soundidx[sound_sample_scenebag_index].length; j++){
				sound_sample_filename.push(this.sound_samplebag_paths[sound_sample_scenebag_label][IMAGES["Sample"][sound_sample_scenebag_label].SOUNDS.soundidx[sound_sample_scenebag_index][j]] || "")
			}
			sound_requests.push(... sound_sample_filename);
		}
		else {
			sound_sample_filename = this.sound_samplebag_paths[sample_scenebag_label][IMAGES["Sample"][sound_sample_scenebag_label].SOUNDS.soundidx[sound_sample_scenebag_index]] || "";
			sound_requests.push(sound_sample_filename)
		}

		this.sound_n_trials_per_bag[sound_sample_scenebag_label] += 1;

		// AK TODO: implement for test sounds?


		// Select appropriate test images (correct one and distractors) 
		var funcreturn = this.selectTestImages(sample_scenebag_label, this.testbag_labels) 
		var test_filenames = []
		if (TASK.SameDifferent <= 0){
			var test_indices = funcreturn[0]
		}
		else if (TASK.SameDifferent > 0){
			var test_indices = [ funcreturn[0][0] ] //Same-Different Task = one side of the Match-to-Sample
		}//ELSEIF same-different
		for (var j = 0; j < test_indices.length; j++){
			var test_scenebag_label = this.testbag_labels[test_indices[j]]; 
			var test_scenebag_index = this.testbag_indices[test_indices[j]];

			test_filenames[j]=[]
			if (Array.isArray(IMAGES["Test"][test_scenebag_label].IMAGES.imageidx[test_scenebag_index])){
				for (var k = 0; k<IMAGES["Test"][test_scenebag_label].IMAGES.imageidx[test_scenebag_index].length; k++){
					test_filenames[j].push(this.testbag_paths[test_scenebag_label][IMAGES["Test"][test_scenebag_label].IMAGES.imageidx[test_scenebag_index][k]] || "")
				}//FOR k movie frames
			}//IF isArray Test (movie)
			else{
				test_filenames[j].push(this.testbag_paths[test_scenebag_label][IMAGES["Test"][test_scenebag_label].IMAGES.imageidx[test_scenebag_index]] || "")
			}//ELSE single image
			image_requests.push(... test_filenames[j])
		}//FOR j test items		
		var correctIndex = funcreturn[1]

		// Add to queue 
		this.sampleq.index.push(sample_index)
		this.sampleq.filename.push(sample_filename)

		this.sound_sampleq.index.push(sound_sample_index)
		this.sound_sampleq.filename.push(sound_sample_filename)

		this.testq.indices.push(test_indices)
		this.testq.correctIndex.push(correctIndex)

		this.testq.filenames.push(test_filenames)			

		this.num_in_queue++;
	}
	// Download images and sounds to support these trials to download queue
	// console.log("TQ.generate_trials() will request", image_requests.length)
	await this.IB.cache_these_images(image_requests); // AK TODO: combine these two into a single joint promise --  Promise.all()?
	await this.IB.cache_these_images(sound_requests); // AK: uncomment

} //FUNCTION generate_trials


async get_next_trial(){
	// Shift out first element of Trial queue and return it
	// along with its sample/test images 

	if (this.sampleq.filename.length == 0){
		// console.log("Reached end of trial queue... generating one more in this.get_next_trial")
		await this.generate_trials(1); 
	}

	// DRAW FROM INDEX LIST
	var sample_filename = this.sampleq.filename.shift(); 
	var sample_index = this.sampleq.index.shift(); 
	var sound_sample_filename = this.sound_sampleq.filename.shift();
	var sound_sample_index = this.sound_sampleq.index.shift();
	var test_filenames = this.testq.filenames.shift(); 
	var test_indices = this.testq.indices.shift(); 
	var test_correctIndex = this.testq.correctIndex.shift();

	//IF the past NStickyResponse trials have been on one side ==> 
	//THEN draw until this upcoming trial's correct answer is at another location
	while(true){
		if (FLAGS.stickyresponse >= TASK.NStickyResponse
			&& TASK.NStickyResponse > 0
			&& test_correctIndex == EVENTS['trialseries']['Response'][CURRTRIAL.num-1])
		{
			if (this.sampleq.filename.length == 0){
				// console.log("Reached end of trial queue... generating one more in this.get_next_trial")
				await this.generate_trials(1); 
			}

			// DRAW FROM INDEX LIST
			sample_filename = this.sampleq.filename.shift(); 
			sample_index = this.sampleq.index.shift(); 
			test_filenames = this.testq.filenames.shift(); 
			test_indices = this.testq.indices.shift(); 
			test_correctIndex = this.testq.correctIndex.shift();
		}//IF sticky && correct response equals sticky side, then continue drawing trials
		else {
			break
		}//ELSE not stick
	}//WHILE not drawing correct response on opposite side of response bias (sticky side)

	// Get image from imagebag
	if (typeof(sample_filename) != "undefined"){
		var sample_image = []
		sample_image = []
		if (Array.isArray(sample_filename)){
			for (var i = 0; i <sample_filename.length;i++){
				if (sample_filename[i] !=""){
					sample_image.push(await this.IB.get_by_name(sample_filename[i])); 
				}
			}
		}//IF isArray sample filenames
		else {
			if (sample_filename != ""){
				sample_image[0] = await this.IB.get_by_name(sample_filename);
		    }		
		}//ELSE single filename
	}//IF sample image
	var sample_reward = -1
	if (typeof(ImageRewardList[sample_filename]) != "undefined"){
		sample_reward = ImageRewardList[sample_filename]		
	}
	
	if (typeof(sound_sample_filename) != "undefined"){
		// at this point only having a single sound per trial,
		// so this is simpler than the sample image code above
		var sample_sound = await this.IB.get_by_name(sound_sample_filename)
	}

	if (typeof(test_filenames) != "undefined"){
		var test_images = []
		for (var i = 0; i <= test_filenames.length-1; i++){
			if (Array.isArray(test_filenames[i])){
				for (var j = 0; j <= test_filenames[i].length-1;j++){
					if (i==0){
						test_images[j] = []
					}//IF first item in frame
					if (test_filenames[i][j] !=""){
						test_images[j].push(await this.IB.get_by_name(test_filenames[i][j])); 
					}//IF image
				}//FOR j frames
			}//IF isArray test filenames
			else {
				if (test_filenames[i] != ""){
					test_images[i].push(await this.IB.get_by_name(test_filenames[i]))			
				}
			}//ELSE single image
		}//FOR i test items
	}//IF test image

	this.num_in_queue--;

	var sample_scenebag_label = this.samplebag_labels[sample_index]; 
	var sample_scenebag_index = this.samplebag_indices[sample_index];

	
	var test_scenebag_labels = []
	var test_scenebag_indices = []

	if (TASK.SameDifferent <= 0){
	for (var j = 0; j < test_indices.length; j++){
		test_scenebag_labels[j] = this.testbag_labels[test_indices[j]]; 
		test_scenebag_indices[j] = this.testbag_indices[test_indices[j]];
	} //for j test
	}
	else if (TASK.SameDifferent > 0){
		test_scenebag_labels.push(this.testbag_labels[test_indices])
		test_scenebag_indices.push(this.testbag_indices[test_indices])
	}

	// Sample audio files, as well
	// var sound_sample
	// AK TODO


	//make sample indexing into an array to be consistent with test for display code //XX
	sample_index = [ sample_index ]
	sample_scenebag_label = [ sample_scenebag_label ]
	sample_scenebag_index = [ sample_scenebag_index ]

	return	[sample_image, sample_index, test_images, test_indices, test_correctIndex, sample_scenebag_label, sample_scenebag_index, test_scenebag_labels, test_scenebag_indices, sample_reward, sample_sound]
// return [sample_image, sample_index]
} //FUNCTION get_next_trial


selectSampleStimulus(samplebag_indices, SamplingStrategy, is_image=true){
	// AK renamed to be general to stimuli, and lightly modified to extend

	// Don't worry, JS does pointers like Python, so <samplebucket> points to this.sample_bucket; it doesn't copy it
	if (is_image) {
		var samplebucket = this.samplebucket;
	}
	else {
		var samplebucket = this.sound_samplebucket;
	}
	

	//global bucket
	if (samplebucket.length == 0){
		for (var i=0; i<=samplebag_indices.length-1; i++){
			samplebucket.push(i)
		}
	}//Need to make a new bucket


	// Vanilla random uniform sampling with replacement: 
	var sample_stimulus_index = NaN
	if(SamplingStrategy == 'uniform_with_replacement'){
		sample_stimulus_index = samplebucket[Math.floor((samplebucket.length)*Math.random())];
	}
	else if (SamplingStrategy == 'uniform_without_replacement'){
		var randind = Math.floor((samplebucket.length)*Math.random())
		sample_stimulus_index = samplebucket[randind]
		samplebucket.splice(randind,1)
	}
	else if (SamplingStrategy == 'sequential'){
		sample_stimulus_index = samplebucket[0] //take next image
		samplebucket.splice(0,1)
	}
	else {
		throw SamplingStrategy + " not implemented in selectSampleStimulus."
	}

	return sample_stimulus_index
}//FUNCTION selectSampleStimulus

selectTestImages(correct_label, testbag_labels){
	
	// Input arguments: 
	// 	correct_label: int. It is one element of testbag_labels corresponding to the rewarded group. 
	//	testbag_labels: array of ints, of length equal to the number of images ( == testbag.length). 

	// Globals: TASK.ObjectGridIndex; TASK.TestGridIndex; TASK.NStickyResponse; 

	// Outputs: 
	//	[0]: testIndices: array of ints, of length TASK.TestGridIndex.length. The elements are indexes of testbag_labels. The order corresponds to TestGridIndex. 
	//	[1]: correctSelection: int. It indexes testIndices / TestGridIndex to convey the correct element. 


	var testIndices = []; 
	var correctSelection = NaN;

	// If SR is on, 
	if ((typeof(TASK.SameDifferent) == "undefined" || TASK.SameDifferent <= 0) &&
		TASK.ObjectGridIndex.length == TASK.ImageBagsTest.length){
		// For each object, 
		for (var i = 0; i<TASK.ObjectGridIndex.length; i++){
			
			// Get pool of the object's test images: 
			var object_test_indices = getAllInstancesIndexes(testbag_labels, i)

			// Get one (1) random sample of the object's test images: 
			var test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 

			// Get grid index where the object should be placed: 
			var object_grid_index = TASK.ObjectGridIndex[i] 

			// Determine which location that grid index corresponds to in testIndices: 
			var order_idx = TASK.TestGridIndex.indexOf(object_grid_index)
			if (order_idx < 0){
				console.log("ERROR: Could not find object's grid index in testgridinices, make sure ObjectGridIndex has same indices as TestGridIndex in parameter file.")
			}

			// Place the selected test image in the appropriate location in testIndices. 
			testIndices[order_idx] = test_image_index

			// If this is the correct object, set the current testIndices location as being the correctSelection. 
			if(i == correct_label){
				correctSelection = order_idx; 
			}
		}
	} //IF SR2
	else {
		// Otherwise, for match-to-sample (where effectors are shuffled)

		// Get all unique labels 
		var labelspace = []
		for (var i = 0; i < testbag_labels.length; i++){
			if(labelspace.indexOf(testbag_labels[i]) == -1 && 
				testbag_labels[i] != correct_label){
				labelspace.push(testbag_labels[i])
			}
		}

		// Randomly select n-1 labels to serve as distractors 
		var distractors = []
		labelspace = shuffle(labelspace)
		for (var i=0; i <= TASK.TestGridIndex.length-2; i++){
			distractors[i] = labelspace[i]
		}

		// Add distractors and correct label to testpool, and then shuffle. 
		var testpool = []
		testpool.push(... distractors)
		testpool.push(correct_label)
		testpool = shuffle(testpool)	

		// For each label in the testpool, add a random testimage index of it to testIndices. 
		for (var i = 0; i<testpool.length; i++){
			var label = testpool[i]
			object_test_indices = getAllInstancesIndexes(testbag_labels, label); 
			test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 
			testIndices[i] = test_image_index
			if(label == correct_label){
				correctSelection = i
			}
		}
	} //ELSE MtS or SD task

	return [testIndices, correctSelection]
}//FUNCTION selectTestImages

} //CLASS TrialQueueScene



