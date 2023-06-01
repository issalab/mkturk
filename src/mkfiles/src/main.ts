import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  Query,
  query,
  where,
} from 'firebase/firestore';
import { getStorage, StorageReference, ref } from 'firebase/storage';
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';
import './mkfiles.css';
// import 'dat.gui/build/dat.gui.css';

const firebaseConfig = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};
let firebaseApp = initializeApp(firebaseConfig);

import { Mkquery } from './mkquery';
import { Mkfinder } from './mkfinder';

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
getRedirectResult(auth).then((result) => {
  if (result) {
    console.log('Sign-In Redirect Result, USER:',result.user.email,'is signed in'
    );
  } else if (auth.currentUser) {
    console.log(
      'Sign-In Redirect Result, USER:',
      auth.currentUser,
      'is signed in'
    );
  } else {
    signInWithRedirect(auth, provider);
  }
});

const functions = getFunctions(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const storageRef = ref(storage);
const mkturkRootRef = ref(storageRef, 'mkturkfiles') 
let rootRef = mkturkRootRef;
const mturkRootRef = ref(storageRef, 'mkturkfiles_mturk');
let isRoot = true;

let mkq = new Mkquery();
let mkf = new Mkfinder();

let bqListDatasets = httpsCallable(functions, 'bqListDatasets');

let bqDatasetList = bqListDatasets();
bqDatasetList.then((datasetList: any) => {
  let bqOptgroup = document.querySelector(
    '#bigquery-optgroup'
  ) as HTMLOptGroupElement;
  datasetList.data.forEach((dataset: any) => {
    let option = document.createElement('option');
    option.value = dataset;
    option.textContent = 'bq/' + dataset;
    bqOptgroup.appendChild(option);
  });
});

let rfidToggle = document.querySelector('#rfid-switch') as HTMLInputElement;
let qryLocSelc = document.querySelector(
  '#qry-loc-selector'
) as HTMLSelectElement;
let fieldSelector = document.querySelector(
  '#field-selector'
) as HTMLSelectElement;

/* Quick Links */
let homeLink = document.querySelector('#quick-link-home') as HTMLElement;
let taskparamsLink = document.querySelector('#quick-link-taskparams') as HTMLElement;
let taskautomatorsLink = document.querySelector('#quick-link-taskautomators') as HTMLElement;
let sceneparamsLink = document.querySelector('#quick-link-sceneparams') as HTMLElement;
let dailyDataLink = document.querySelector('#quick-link-dailydata') as HTMLElement;
let marmosetsLink = document.querySelector('#quick-link-marmosets') as HTMLElement;

window.addEventListener('load', (evt: Event) => {
  evt.preventDefault();
  isRoot = false;
  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));
  mkf.listStorageFiles(rootRef);
});

marmosetsLink.addEventListener('click', (ev: Event) => {
  ev.preventDefault();

  qryLocSelc.value = 'marmosets';
  fieldSelector!.value = 'name';
  qryLocSelc!.dispatchEvent(new Event('change'));
  fieldSelector!.dispatchEvent(new Event('change'));

  let ret = mkq.decodeQuery(collection(db, 'marmosets'));
  ret.then((docs) => {
    mkf.listFirestoreDocs(docs, 'marmosets');
  });
});

taskparamsLink.addEventListener('click' || 'pointerup', (ev: Event) => {
  ev.preventDefault();

  rootRef = ref(storageRef, 'mkturkfiles/parameterfiles/subjects')
  isRoot = false;

  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));
  mkf.listStorageFiles(ref(storageRef, 'mkturkfiles/parameterfiles/subjects'));
  rootRef = mkturkRootRef
});

taskautomatorsLink.addEventListener('click' || 'pointerup', (ev: Event) => {
  ev.preventDefault();

  rootRef = ref(storageRef, 'mkturkfiles/parameterfiles/automators')
  isRoot = false;

  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));
  mkf.listStorageFiles(ref(storageRef, 'mkturkfiles/parameterfiles/automators'));
  rootRef = mkturkRootRef
});

homeLink.addEventListener('click' || 'pointerup', (ev: Event) => {
  ev.preventDefault();

  isRoot = false;
  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));
  // mkf.listStorageFiles(storageRef.child("mkturkfiles"));
  mkf.listStorageFiles(rootRef);
});

sceneparamsLink.addEventListener('click' || 'pointerup', (ev: Event) => {
  ev.preventDefault();

  rootRef = ref(storageRef, 'mkturkfiles/scenebags/')
  isRoot = false;

  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));

  mkf.listStorageFiles(ref(storageRef, 'mkturkfiles/scenebags/'));
  rootRef = mkturkRootRef
  // qryLocSelc.value = 'mkturkfiles';
  // qryLocSelc.dispatchEvent(new Event('change'));
  // mkf.listStorageFiles(ref(storageRef, 'scenebags'));
});

dailyDataLink.addEventListener('click' || 'pointerup', (ev: Event) => {
  ev.preventDefault();

  rootRef = ref(rootRef, 'mkdailydata');
  isRoot = false;

  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));
  // mkf.listStorageFiles(storageRef.child('mkturkfiles/mkdailydata'));
  mkf.listStorageFiles(ref(rootRef, 'mkdailydata'));
  rootRef = mkturkRootRef
});

qryLocSelc!.addEventListener('change', (ev) => {
  let fs = document.querySelector('#field-selector') as HTMLSelectElement;
  let ki0 = document.querySelector('#keyword-input-0') as HTMLInputElement;
  let ki1 = document.querySelector('#keyword-input-1') as HTMLInputElement;
  let ki2 = document.querySelector('#keyword-input-2') as HTMLInputElement;
  let goBtn = document.querySelector('#go-btn') as HTMLButtonElement;
  let plotX = document.querySelector('#quick-plot-x') as HTMLSelectElement;
  let plotY = document.querySelector('#quick-plot-y') as HTMLSelectElement;
  let plotBtn = document.querySelector('#plot-btn') as HTMLButtonElement;
  let queryResult: Promise<any[]>;
  switch (qryLocSelc.value) {
    case 'marmosets':
      fs.style.visibility = 'visible';
      ki0.style.visibility = 'visible';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'visible';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      let nameMarmosets = document.createElement('option');
      nameMarmosets.setAttribute('class', 'field-options');
      nameMarmosets.setAttribute('value', 'name');
      nameMarmosets.setAttribute('selected', 'true');
      nameMarmosets.textContent = 'name';

      let sexMarmosets = document.createElement('option');
      sexMarmosets.setAttribute('class', 'field-options');
      sexMarmosets.setAttribute('value', 'sex');
      sexMarmosets.textContent = 'sex';

      let rfidMarmosets = document.createElement('option');
      rfidMarmosets.setAttribute('class', 'field-options');
      rfidMarmosets.setAttribute('value', 'rfid');
      rfidMarmosets.textContent = 'RFID';

      let breedingMarmosets = document.createElement('option');
      breedingMarmosets.setAttribute('class', 'field-options');
      breedingMarmosets.setAttribute('value', 'breeding');
      breedingMarmosets.textContent = 'breeding';

      let birthdateMarmosets = document.createElement('option');
      birthdateMarmosets.setAttribute('class', 'field-options');
      birthdateMarmosets.setAttribute('value', 'birthdate');
      birthdateMarmosets.textContent = 'birthdate';

      let fieldSelectorMarmosets = document.querySelector(
        '#field-selector'
      ) as HTMLSelectElement;
      fieldSelectorMarmosets.appendChild(nameMarmosets);
      fieldSelectorMarmosets.appendChild(sexMarmosets);
      fieldSelectorMarmosets.appendChild(rfidMarmosets);
      fieldSelectorMarmosets.appendChild(breedingMarmosets);
      fieldSelectorMarmosets.appendChild(birthdateMarmosets);
      fieldSelectorMarmosets.dispatchEvent(new Event('change'));

      break;

    case 'mkturkdata':
      fs.style.visibility = 'visible';
      ki0.style.visibility = 'visible';
      ki1.style.visibility = 'visible';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'visible';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      let agentTypeCurDate = document.createElement('option');
      agentTypeCurDate.setAttribute('class', 'field-options');
      agentTypeCurDate.setAttribute('value', 'agentTypeCurDate');
      agentTypeCurDate.setAttribute('selected', 'true');
      agentTypeCurDate.textContent = 'Agent & CurrentDate';

      let fieldSelectorMkturk = document.querySelector(
        '#field-selector'
      ) as HTMLSelectElement;
      fieldSelectorMkturk.appendChild(agentTypeCurDate);
      fieldSelectorMkturk.dispatchEvent(new Event('change'));

      break;

    case 'objects':
      fs.style.visibility = 'visible';
      ki0.style.visibility = 'visible';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'visible';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      let identityObjects = document.createElement('option');
      identityObjects.setAttribute('class', 'field-options');
      identityObjects.setAttribute('value', 'identity');
      identityObjects.setAttribute('selected', 'true');
      identityObjects.textContent = 'identity';

      let meshObjects = document.createElement('option');
      meshObjects.setAttribute('class', 'field-options');
      meshObjects.setAttribute('value', 'mesh');
      meshObjects.textContent = 'mesh';

      let nounObjects = document.createElement('option');
      nounObjects.setAttribute('class', 'field-options');
      nounObjects.setAttribute('value', 'noun');
      nounObjects.textContent = 'noun';

      let fieldSelectorObjects = document.querySelector(
        '#field-selector'
      ) as HTMLSelectElement;
      fieldSelectorObjects.appendChild(identityObjects);
      fieldSelectorObjects.appendChild(meshObjects);
      fieldSelectorObjects.appendChild(nounObjects);
      fieldSelectorObjects.dispatchEvent(new Event('change'));

      break;

    case 'mkdailydata':
      // let ret = mkq.decodeQuery(db.collection('mkdailydata'));
      let ret = mkq.decodeQuery(collection(db, 'mkdailydata'));
      ret.then((docs) => {
        mkf.listFirestoreDocs(docs, 'mkdailydata');
      });

      break;

    case 'mkturkfiles':
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      removeElementsByClassName('field-options');
      mkf.listStorageFiles(rootRef);
      if (isRoot) {
        mkf.listStorageFiles(rootRef);
      }
      break;

      case 'scenebags':
        fs.style.visibility = 'hidden';
        ki0.style.visibility = 'hidden';
        ki1.style.visibility = 'hidden';
        ki2.style.visibility = 'hidden';
        goBtn.style.visibility = 'hidden';
        plotX.style.visibility = 'hidden';
        plotY.style.visibility = 'hidden';
        plotBtn.style.visibility = 'hidden';
  
        removeElementsByClassName('field-options');
        mkf.listStorageFiles(rootRef);
        if (isRoot) {
          mkf.listStorageFiles(rootRef);
        }
        break;
  
    case 'mkturkfiles_mturk':
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      removeElementsByClassName('field-options');
      mkf.listStorageFiles(mturkRootRef);
      if (isRoot) {
        mkf.listStorageFiles(mturkRootRef);
      }
      break;

    case 'devices':
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      // queryResult = mkq.decodeQuery(db.collection("devices"));
      queryResult = mkq.decodeQuery(collection(db, 'devices'));
      queryResult.then((docs) => {
        mkf.listFirestoreDocs(docs, 'devices');
      });

      break;

    case 'mturkhits':
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      queryResult = mkq.decodeQuery(collection(db, 'mturkhits'));
      queryResult.then((docs) => {
        mkf.listFirestoreDocs(docs, 'mturkhits');
      });

      break;

    case 'mturkusers':
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      queryResult = mkq.decodeQuery(collection(db, 'mturkusers'));
      queryResult.then((docs) => {
        mkf.listFirestoreDocs(docs, 'mturkusers');
      });

      break;

    case 'mturkdata':
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      queryResult = mkq.decodeQuery(collection(db, 'mturkdata'));
      queryResult.then((docs) => {
        mkf.listFirestoreDocs(docs, 'mturkdata');
      });

      break;

    case 'eyecalibrations':
      console.log('eye');
      fs.style.visibility = 'hidden';
      ki0.style.visibility = 'hidden';
      ki1.style.visibility = 'hidden';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'hidden';
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      // queryResult = mkq.decodeQuery(db.collection("eyecalibrations"));
      queryResult = mkq.decodeQuery(collection(db, 'eyecalibrations'));
      queryResult.then((docs) => {
        mkf.listFirestoreDocs(docs, 'eyecalibrations');
      });

      break;

    case 'mkscale':
      fs.style.visibility = 'visible';
      ki0.style.visibility = 'visible';
      ki1.style.visibility = 'visible';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'visible';
      plotX.style.visibility = 'visible';
      plotY.style.visibility = 'visible';
      plotBtn.style.visibility = 'visible';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      let nameCurDate = document.createElement('option');
      nameCurDate.setAttribute('class', 'field-options');
      nameCurDate.setAttribute('value', 'nameCurDate');
      nameCurDate.setAttribute('selected', 'true');
      nameCurDate.textContent = 'Name & CurrentDate';

      fs.appendChild(nameCurDate);
      fs.dispatchEvent(new Event('change'));

      break;

    case 'eyedata':
      fs.style.visibility = 'visible';
      ki0.style.visibility = 'visible';
      ki1.style.visibility = 'visible';
      ki2.style.visibility = 'hidden';
      goBtn.style.visibility = 'visible';
      plotX.style.visibility = 'visible';
      plotY.style.visibility = 'visible';
      plotBtn.style.visibility = 'visible';

      resetPlaceholder();
      removeElementsByClassName('field-options');

      let bqAgentDate = document.createElement('option');
      bqAgentDate.setAttribute('class', 'field-options');
      bqAgentDate.setAttribute('value', 'nameCurDate');
      bqAgentDate.setAttribute('selected', 'true');
      bqAgentDate.textContent = 'Name & CurrentDate';

      fs.appendChild(bqAgentDate);
      fs.dispatchEvent(new Event('change'));
      break;
  }
});

fieldSelector?.addEventListener('change', (ev) => {
  let field = fieldSelector?.value;
  let ki0 = document.querySelector('#keyword-input-0') as HTMLInputElement;
  let ki1 = document.querySelector('#keyword-input-1') as HTMLInputElement;
  let ki2 = document.querySelector('#keyword-input-2') as HTMLInputElement;
  let plotX = document.querySelector('#quick-plot-x') as HTMLSelectElement;
  let plotY = document.querySelector('#quick-plot-y') as HTMLSelectElement;
  let plotBtn = document.querySelector('#plot-btn') as HTMLButtonElement;

  switch (field) {
    case 'name':
      resetPlaceholder();
      ki0.setAttribute('placeholder', 'name');
      plotX.style.visibility = 'visible';
      plotY.style.visibility = 'visible';
      plotBtn.style.visibility = 'visible';
      break;

    case 'sex':
      resetPlaceholder();
      ki0.setAttribute('placeholder', 'sex');
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';
      break;

    case 'rfid':
      resetPlaceholder();
      ki0.setAttribute('placeholder', 'RFID');
      plotX.style.visibility = 'visible';
      plotY.style.visibility = 'visible';
      plotBtn.style.visibility = 'visible';
      break;

    case 'breeding':
      resetPlaceholder();
      ki0.setAttribute('placeholder', 'breeding');
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';
      break;

    case 'birthdate':
      resetPlaceholder();
      ki0.setAttribute('placeholder', 'birthdate (e.g. 04/17/2019; +-7)');
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';
      break;

    case 'agentTypeCurDate':
      ki0.setAttribute('placeholder', 'Agent');
      ki1.setAttribute('placeholder', 'CurrentDate (e.g. 04/17/2019; +-7)');
      plotX.style.visibility = 'hidden';
      plotY.style.visibility = 'hidden';
      plotBtn.style.visibility = 'hidden';
      break;

    case 'nameCurDate':
      ki0.setAttribute('placeholder', 'Name');
      ki1.setAttribute('placeholder', 'CurrentDate (e.g. 04/17/2019; +-7)');
      break;

    case 'eyedata':
      ki0.setAttribute('placeholder', 'Agent');
      ki1.setAttribute('Placeholder', 'Date (e.g. 04/17/2019)');
      break;
  }
});

let queryForm = document.querySelector<HTMLFormElement>('#mkquery-form');
queryForm?.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  console.log('test weird');
  let qryLoc = qryLocSelc?.value;
  let field = fieldSelector?.value;
  let k0 = document.querySelector<HTMLInputElement>('#keyword-input-0')?.value;
  let k1 = document.querySelector<HTMLInputElement>('#keyword-input-1')?.value;
  let k2 = document.querySelector<HTMLInputElement>('#keyword-input-2')?.value;

  let queryParam: { field: string; keyword: string }[] = [];
  let queryStr: string = '';
  let queryResult: Query;

  switch (qryLoc) {
    case 'marmosets':
      if (k0) {
        queryParam.push({ field: field, keyword: k0 });
      } else {
        console.error('No query arguments!');
        alert('No query arguments!');
      }
      queryResult = query(
        collection(db, 'marmosets'),
        where(queryParam[0].field, '==', queryParam[0].keyword)
      );
      // queryStr = "db.collection('marmosets')" + mkq.mkquery(queryParam);
      // queryStr = "query(collection(db, 'marmosets')"
      queryStr = `query(collection(db, 'marmosets'), ${mkq.mkquery(
        queryParam
      )})`;
      break;

    case 'mkturkdata':
      if (k0) {
        queryParam.push({ field: 'Agent', keyword: k0 });
      }
      // if (k1) {
      //   queryParam.push({ field: "Doctype", keyword: k1 });
      // }
      if (k1) {
        queryParam.push({ field: 'CurrentDate', keyword: k1 });
      }

      if (queryParam.length == 0) {
        console.error('No query arguments!');
        alert('No query arguments!');
      } else if (queryParam.length == 1) {
        queryResult = query(
          collection(db, 'mkturkdata'),
          where(queryParam[0].field, '==', queryParam[0].keyword)
        );
      } else if (queryParam.length == 2) {
        queryResult = query(
          collection(db, 'mkturkdata'),
          where(queryParam[0].field, '==', queryParam[0].keyword),
          where(queryParam[1].field, '==', queryParam[1].keyword)
        );
      } else if (queryParam.length == 3) {
        queryResult = query(
          collection(db, 'mkturkdata'),
          where(queryParam[0].field, '==', queryParam[0].keyword),
          where(queryParam[1].field, '==', queryParam[1].keyword),
          where(queryParam[2].field, '==', queryParam[2].keyword)
        );
      }

      if (queryParam.length > 0) {
        queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
      } else {
        console.error('No query arguments!');
        alert('No query arguments!');
      }
      break;

    case 'objects':
      if (k0) {
        queryParam.push({ field: field, keyword: k0 });
      } else {
        console.error('No query arguments!');
        alert('No query arguments!');
      }
      queryStr = "db.collection('objects')" + mkq.mkquery(queryParam);
      break;

    case 'mkscale':
      if (k0) {
        queryParam.push({ field: 'Name', keyword: k0 });
      }
      if (k1) {
        queryParam.push({ field: 'CurrentDate', keyword: k1 });
      }

      if (queryParam.length > 0) {
        queryStr = "db.collection('mkscale')" + mkq.mkquery(queryParam);
      } else {
        console.error('No query arguments!');
        alert('No query arguments!');
      }
      break;

    case 'eyedata':
      if (k0 && k1) {
        queryStr = mkq.mkbquery('eyedata', k0, k1);
      } else {
        console.error('Incorrect query: Need two query arguments!');
        alert('Incorrect query: Need two query arguments!');
      }
      break;
  }

  if (queryStr.startsWith('query')) {
    console.log(queryStr);
    // query = eval(queryStr);

    let ret = mkq.decodeQuery(queryResult!);
    ret.then((docs) => {
      mkf.listFirestoreDocs(docs, qryLoc!);
      if (rfidToggle.checked) {
        mkf.finder.selectRow();
        mkf.mke.displayFirebaseTextFile(mkf.finder.getData()[0], 'marmosets');
      }
    });
  } else if (queryStr.startsWith('SELECT *')) {
    let test = mkq.decodeBigQuery(queryStr);
    console.log(test);
    test.then((data: any) => {
      if (Array.isArray(data.data)) {
        mkf.listBigQueryTable(data.data, qryLoc, k0!);
      }
      // mkf.listBigQueryTable(data.data, qryLoc, k0!);
    });
  }
});

function resetPlaceholder() {
  let keywordInputs = [
    ...document.querySelectorAll<HTMLInputElement>('.keyword-input'),
  ];

  for (let i = 0; i < keywordInputs.length; i++) {
    keywordInputs[i].placeholder = '';
    keywordInputs[i].value = '';
  }
}

function removeElementsByClassName(cName: string) {
  let elements = document.getElementsByClassName(cName);
  while (elements.length > 0) {
    elements[0].parentNode?.removeChild(elements[0]);
  }
}