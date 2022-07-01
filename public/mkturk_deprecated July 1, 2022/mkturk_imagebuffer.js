class ImageBuffer { 
	// This object downloads, caches, and gives out images based on their filenames. 
	// Nothing else. No labels, no grouping, nothing. Just images and their filenames. 

	// Single buffer for now for finite list of images that can completely fit in device RAM. 
	// Construct with image_source (directory string or list of directory strings) and all_filenames ([first to download, last to download])

	// Todo: double buffer to serve imagelists > device RAM (basically, set upper limit on size of cache)
	//														and then flush cache as needed)

constructor(){
	// future: some "generator" object that can take queries 
	
	// Buffer: 
	this.cache_dict = {}; // filename:

	// Todo: double buffer
	this.num_elements_in_cache = 0; // tracking variable
	this.max_buffer_size = 100; // (for now, arbitrary) number of unique images to keep in buffer
}


// ------- Image blob getting functions ----------------------------
async get_by_name(filename){

	try{
		// Requested image not in buffer. Add it, then return. 
		if (filename in this.cache_dict){
			return this.cache_dict[filename]
		}
		else if (!(filename in this.cache_dict)){
			await this.cache_these_images(filename)
			return this.cache_dict[filename]
		}

	}
	catch(error){
		console.error("get_by_name failed with error:", error)
	}
}

// ------- Buffer-related functions --------------------------------
// Add specific image, or list of images, to cache before moving on.
async remove_image_from_cache(filename){
	window.URL.revokeObjectURL(this.cache_dict[filename].src)
	delete this.cache_dict[filename];
	return
}

async clear_cache(){
	return
}

async cache_these_images(imagenames){
	try{

		if (typeof(imagenames) == "string" && imagenames != ""){
			var filename = imagenames; 
			if (!(filename in this.cache_dict)){

				var image = await loadImagefromFirebase(filename);

				this.cache_dict[filename] = image; 
				this.num_elements_in_cache++
				return 
			}
			else{
				return 
			}
		}

		else if (typeof(imagenames) == "object"){
			var requested_imagenames = []
			for (var i = 0; i < imagenames.length; i ++){
				var filename = imagenames[i]
				if(!(filename in this.cache_dict) && (requested_imagenames.indexOf(filename) == -1) && filename != ""){
					requested_imagenames.push(filename)
				}
				else if(requested_imagenames.indexOf(filename) != -1){
					//console.log('image already requested')
					continue 
				}
				else if(filename in this.cache_dict){
					//console.log('image already cached')
					continue
				}
			}
			var image_array = await loadImageArrayfromFirebase(requested_imagenames)

			for (var i = 0; i < image_array.length; i++){
				this.cache_dict[requested_imagenames[i]] = image_array[i]; 
				this.num_elements_in_cache++; 
			}
			return
		}

		if (this.num_elements_in_cache > this.max_buffer_size){
			console.log('Exceeded max buffer size: '+this.num_elements_in_cache+'/'+this.max_buffer_size)
			console.log('But I did not do anything.')
		}
	}
	catch(error){
		console.error("cache_these_images failed with error:", error)
	}
}
}