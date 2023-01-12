import { getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import {
  getStorage,
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import JSONEditor from 'jsoneditor';
import Viewer from 'viewerjs';
import * as EditorParams from './editor-params';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GUI } from 'dat.gui';
import { ParseEngine } from './parser';

type FileRef = StorageReference;
const db = getFirestore(getApp());
const storage = getStorage(getApp());

export class Mkeditor {
  public editorDivElement: HTMLDivElement;
  private editorElement: HTMLDivElement;
  private editor: JSONEditor;
  public updateBtn: HTMLButtonElement;
  public btnBoxDiv: HTMLDivElement;
  public makeActiveBtn: HTMLButtonElement;
  public storeParamBtn: HTMLButtonElement;
  public renderBtn: HTMLButtonElement;
  private activeFile: { loc: string; id: string | FileRef };

  public fileNameInput: HTMLInputElement;
  private fileRenameBtn: HTMLButtonElement;
  private fileDupBtn: HTMLButtonElement;
  private fileDupModal: HTMLDialogElement;
  public genBtn: HTMLButtonElement;
  public paramGenBtnBox: HTMLDivElement;

  public expandBtn: HTMLButtonElement;
  public svSceneBtn: HTMLButtonElement;
  private pe: ParseEngine;
  private userEditedSceneParam: Object;
  private generatedSceneParam: Object;

  constructor() {
    this.editorDivElement = document.querySelector(
      '#editor-div'
    ) as HTMLDivElement;
    this.editorElement = document.querySelector('#editor') as HTMLDivElement;
    this.editor = new JSONEditor(this.editorElement);
    this.updateBtn = document.querySelector('#update-btn') as HTMLButtonElement;
    this.renderBtn = document.querySelector('#render-btn') as HTMLButtonElement;
    this.btnBoxDiv = document.querySelector('#button-box') as HTMLDivElement;
    this.paramGenBtnBox = document.querySelector(
      '#param-gen-btn-box'
    ) as HTMLDivElement;
    this.makeActiveBtn = document.querySelector(
      '#active-btn'
    ) as HTMLButtonElement;
    this.storeParamBtn = document.querySelector(
      '#store-param-btn'
    ) as HTMLButtonElement;
    this.activeFile = { loc: '', id: '' };
    this.updateBtnAction();
    this.renderBtnAction();
    this.makeActiveBtnAction();
    this.storeParamBtnAction();
    this.fileNameInput = document.querySelector(
      '#file-name-input'
    ) as HTMLInputElement;
    this.fileRenameBtn = document.querySelector(
      '#file-rename-btn'
    ) as HTMLButtonElement;
    this.fileDupBtn = document.querySelector(
      '#file-dup-btn'
    ) as HTMLButtonElement;
    this.fileDupModal = document.querySelector(
      '#file-dup-modal'
    ) as HTMLDialogElement;
    this.renameBtnAction();
    this.renameTextFieldAction();
    this.getActiveFile();
    this.fileDupBtnAction();

    // this.genSceneParamBtn
    //   = document.querySelector('#gen-scene-param-btn') as HTMLButtonElement;
    // this.genSceneParamModal
    //   = document.querySelector('#gen-scene-param-modal') as HTMLDivElement;
    // this.generateSceneParamModalAction()

    this.genBtn = document.querySelector('#generate-btn') as HTMLButtonElement;
    this.expandBtn = document.querySelector('#expand-btn') as HTMLButtonElement;
    this.svSceneBtn = document.querySelector(
      '#save-scene-param-btn'
    ) as HTMLButtonElement;
    this.genBtnAction();
    this.svSceneBtnAction();

    this.pe = new ParseEngine();
    this.userEditedSceneParam = {};
    this.generatedSceneParam = {};
  }

  public getActiveFile() {
    return this.activeFile;
  }

  public destoryEditor() {
    this.editor.destroy();
  }

  public displayFirebaseTextFile(file: Object, loc: string) {
    this.fileRenameBtn.style.display = 'none';
    this.fileDupBtn.style.display = 'none';
    // this.genSceneParamBtn.style.display = 'none';
    this.storeParamBtn.style.display = 'none';
    this.updateBtn.style.display = 'inline-block';
    this.btnBoxDiv.style.gridTemplateAreas = '"update-btn update-btn"';
    this.fileNameInput.value = '';
    this.fileNameInput.disabled = true;

    try {
      let options = {
        modes: ['tree' as 'tree', 'code' as 'code'],
        sortObjectKeys: true,
      };
      this.editor.destroy();
      this.editor = new JSONEditor(this.editorElement, options, file);
      this.trackFirebaseActiveFile(loc, file);
    } catch (error) {
      console.error('JSONEditor Error:', error);
    }
  }

  public displayBigQueryTableRow(data: any) {
    this.btnBoxDiv.style.display = 'none';
    try {
      this.editor.destroy();
      let options = {
        modes: ['tree' as 'tree', 'code' as 'code'],
      };
      this.editor = new JSONEditor(this.editorElement, options, data);
      this.fileNameInput.placeholder = data.timestamp.value;
      // console.log("displayBigQueryTableRow", data);
    } catch (error) {
      console.error('JSONEditor Error:', error);
    }
  }

  private trackFirebaseActiveFile(loc: string, file: any) {
    if (loc === 'marmosets') {
      this.activeFile = { loc: loc, id: file.name };
      this.fileNameInput.placeholder = String(this.activeFile.id);
    } else if (loc === 'mkturkdata') {
      if (file.Doctype === 'task') {
        this.activeFile = { loc: loc, id: file.Taskdoc };
        this.fileNameInput.placeholder = String(this.activeFile.id);
      } else if (file.Doctype === 'images') {
        this.activeFile = { loc: loc, id: file.Imagesdoc };
        this.fileNameInput.placeholder = String(this.activeFile.id);
      }
    } else if (loc === 'mkdailydata') {
      this.activeFile = { loc: loc, id: file.agent };
      this.fileNameInput.placeholder = String(this.activeFile.id);
    }

    // else if (loc === 'mkdailydatatest') {
    //   this.activeFile = { loc: loc, id: file.agent };
    //   this.fileNameInput.placeholder = String(this.activeFile.id);
    // }
    else if (loc === 'objects') {
      this.activeFile = { loc: loc, id: file.docname };
      this.fileNameInput.placeholder = String(this.activeFile.id);
    } else if (loc === 'eyecalibrations') {
      this.activeFile = { loc: loc, id: file.Docname };
      this.fileNameInput.placeholder = String(this.activeFile.id);
    } else if (loc === 'devices') {
      this.activeFile = { loc: loc, id: file.docname };
      this.fileNameInput.placeholder = String(this.activeFile.id);
    } else if (loc === 'mkscale') {
      this.activeFile = { loc: loc, id: file.Docname };
      this.fileNameInput.placeholder = String(this.activeFile.id);
    }

    console.log('activeFile', this.activeFile);
  }

  public async displayStorageTextFile(fileRef: FileRef) {
    console.log('diplayStorageTextFile FILEREF', fileRef);
    this.fileNameInput.disabled = false;
    this.fileRenameBtn.style.display = 'inline-block';
    this.fileNameInput.value = '';

    const sceneParamPath = 'mkturkfiles/scenebags/objectome3d';
    const taskParamPath = 'mkturkfiles/parameterfiles';

    function onClassName(classNameParams: {
      path: ReadonlyArray<string>;
      field: string;
      value: string;
    }) {
      console.log(
        `onClassName path=${classNameParams.path}, field=${classNameParams.field}, value=${classNameParams.value}`
      );

      const bioKeys = ['Agent', 'CheckRFID'];
      const automatorKeys = [
        'Automator',
        'AutomatorFilePath',
        'CurrentAutomatorStage',
        'MinPercentCriterion',
        'MinTrialsCriterion',
      ];
      const generalKeys = [
        'DragtoRespond',
        'CalibrateEye',
        'NRSVP',
        'NRSVPMax',
        'SameDifferent',
        'SamplingStrategy',
        'NStickyResponse',
        'NTrialsPerBagBlock',
      ];
      const gridKeys = [
        'NGridPoints',
        'GridSpacingInches',
        'GridXOffsetInches',
        'GridYOffsetInches',
        'FixationGridIndex',
        'SampleGridIndex',
        'ObjectGridIndex',
        'ChoiceGridIndex',
        'TestGridIndex',
      ];
      const fixationKeys = [
        'NFixations',
        'FixationUsesSample',
        'FixationSizeInches',
        'FixationDuration',
        'FixationTimeOut',
      ];
      const fixationConfigKeys = [
        'FixationWindowSizeInches',
        'FixationDotSizeInches',
      ];
      const sampleKeys = [
        'ImageBagsSample',
        'KeepSampleON',
        'SamplePRE',
        'SampleOFF',
      ];
      const testKeys = [
        'ImageBagsTest',
        'KeepTestON',
        'TestOFF',
        'HideTestDistractors',
      ];
      const choiceKeys = [
        'ChoiceSizeInches',
        'HideChoiceDistractors',
        'ChoiceTimeOut',
      ];
      const rewardKeys = [
        'RewardStage',
        'RewardPer1000Trials',
        'NRewardMax',
        'NConsecutiveHitsforBonus',
        'PunishTimeOut',
        'ConsecutiveHitsITI',
      ];

      if (bioKeys.includes(classNameParams.field)) {
        return 'color-node-bio';
      } else if (automatorKeys.includes(classNameParams.field)) {
        return 'color-node-automator';
      } else if (generalKeys.includes(classNameParams.field)) {
        return 'color-node-general';
      } else if (gridKeys.includes(classNameParams.field)) {
        return 'color-node-grid';
      } else if (fixationKeys.includes(classNameParams.field)) {
        return 'color-node-fixation';
      } else if (fixationConfigKeys.includes(classNameParams.field)) {
        return 'color-node-fixation-config';
      } else if (sampleKeys.includes(classNameParams.field)) {
        return 'color-node-sample';
      } else if (testKeys.includes(classNameParams.field)) {
        return 'color-node-test';
      } else if (choiceKeys.includes(classNameParams.field)) {
        return 'color-node-choice';
      } else if (rewardKeys.includes(classNameParams.field)) {
        return 'color-node-reward';
      } else {
        return 'color-node-nuisance';
      }
    }

    let sceneTemplateOptions = {
      modes: ['tree' as 'tree', 'code' as 'code'],
      templates: [
        {
          text: 'Camera',
          title: 'Insert a Camera node',
          field: 'CameraTemplate',
          value: {
            type: 'PerspectiveCamera',
            fieldOfView: 45,
            near: 0.1,
            far: 2000,
            position: {
              x: [0],
              y: [0],
              z: [0],
            },
            targetInches: {
              x: [0],
              y: [0],
              z: [0],
            },
            visible: [1],
          },
        },
        {
          text: 'Light',
          title: 'Insert a Light node',
          field: 'LightTemplate',
          value: {
            type: 'DirectionalLight',
            color: '0xffffff',
            intensity: [5],
            position: {
              x: [0],
              y: [0],
              z: [0],
            },
            visible: [1],
          },
        },
        {
          text: 'Object',
          title: 'Insert an Object node',
          field: 'ObjectTemplate',
          value: {
            meshpath: '',
            objectdoc: '',
            sizeInches: [0.5],
            positionInches: {
              x: [0],
              y: [0],
              z: [0],
            },
            rotationDegrees: {
              x: [0],
              y: [0],
              z: [0],
            },
            material: {
              type: 'MeshPhysicalMaterial',
              color: '#7F7F7F',
              metalness: 0.25,
              roughness: 0.65,
              reflectivity: 0.5,
              opacity: [1],
              transparent: false,
            },
            visible: [1],
            morphTarget: [],
          },
        },
        {
          text: 'Background',
          title: 'Insert a Background node',
          field: 'ImagesTemplate',
          value: {
            imagebag: '',
            imageidx: [],
          },
        },
      ],
    };

    let options = {
      modes: ['tree' as 'tree', 'code' as 'code'],
    };

    let taskParamOptions = {
      modes: ['tree' as 'tree', 'code' as 'code'],
      onClassName: onClassName,
      schema: EditorParams.taskParamSchema,
    };

    // let fileUrl = await getDownloadURL(fileRef).catch(e => {
    //   console.error('Error getting download URL:', e);
    // });

    // let response;
    // let file;

    let file = await getDownloadURL(fileRef)
      .then(async (url: string) => {
        let response = await fetch(url);
        return await response.json();
      })
      .catch((e: Error) => {
        console.error('Error getting download URL:', e);
      });

    // let fileUrl = await fileRef.getDownloadURL().catch(e => {
    //   console.error("Error getting download URL", e);
    // });
    // let response = await fetch(fileUrl);
    // let file = await response.json();

    if (fileRef.fullPath.includes(sceneParamPath)) {
      if (fileRef.fullPath.includes('template')) {
        this.fileDupBtn.style.display = 'inline-block';
        // this.genSceneParamBtn.style.display = 'inline-block';
        options = sceneTemplateOptions;
      } else {
        this.fileDupBtn.style.display = 'inline-block';
        // this.genSceneParamBtn.style.display = 'none';
      }
    } else if (fileRef.fullPath.includes(taskParamPath)) {
      console.log('FILEEEE:', file);
      this.fileDupBtn.style.display = 'inline-block';
      let taskParamKeys = Object.keys(
        JSON.parse(JSON.stringify(EditorParams.taskParamSchema, null, 1))
          .properties
      );
      if (Array.isArray(file)) {
        // CASE: Automator

        for (let idx in file) {
          let json = JSON.parse(JSON.stringify(file[idx], taskParamKeys, 1));
          let json2: any = {};
          Object.keys(file[idx]).forEach((key) => {
            if (!(key in json)) {
              json2[key] = file[idx][key];
            }
          });
          file[idx] = Object.assign(json, json2);
          console.log('json:', json, 'json2:', json2);
        }

        console.log('FILE AFTER PROCESSING:', file);
      } else {
        let json = JSON.parse(JSON.stringify(file, taskParamKeys, 1));
        let json2: any = {};
        Object.keys(file).forEach((key) => {
          if (!(key in json)) {
            json2[key] = file[key];
          }
        });
        console.log('json:', json, 'json2:', json2);
        file = Object.assign(json, json2);
      }
      options = taskParamOptions;

      // this.genSceneParamBtn.style.display = 'none';
    } else {
      this.fileDupBtn.style.display = 'none';
      // this.genSceneParamBtn.style.display = 'none';
    }

    this.editor.destroy();
    this.editor = new JSONEditor(this.editorElement, options, file);
    this.activeFile = { loc: 'mkturkfiles', id: fileRef };
    console.log('activeFile', this.activeFile);
    this.fileNameInput.placeholder = fileRef.name;
  }

  private fileDupBtnAction() {
    let fileName = this.fileDupModal.querySelector(
      '#dup-file-name'
    ) as HTMLInputElement;

    this.fileDupBtn.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      this.fileDupModal;
      (this.fileDupModal as any).showModal();
      let activeFileName = this.activeFile.id as FileRef;
      fileName.value = 'Copy of ' + activeFileName.name;
      fileName.focus();
      fileName.select();
    });

    this.fileDupModal.querySelector('.close')?.addEventListener('click', () => {
      (this.fileDupModal as any).close();
    });

    this.fileDupModal.querySelector('.save')?.addEventListener('click', () => {
      let srcFileRef = this.activeFile.id as FileRef;
      // let dupFileRef = srcFileRef.parent?.child(fileName.value);
      let dupFileRef = ref(srcFileRef.parent!, fileName.value);
      let dupFile = new Blob([JSON.stringify(this.editor.get(), null, 1)]);
      let md = {
        contentType: 'application/json',
      };

      uploadBytes(dupFileRef, dupFile, md)
        .then(async (snapshot) => {
          console.log('[DOCUMENT DUPLICATED]:', snapshot);
          alert('Document Duplicated');
          let fileDupEvent = new Event('storageFileChanged');
          this.fileNameInput.value = '';
          this.displayStorageTextFile(dupFileRef);
          document.dispatchEvent(fileDupEvent);
        })
        .catch((e: Error) => {
          console.error('[DOCUMENT DUPLICATE FAILED]:', e);
          console.error('srcFile:', srcFileRef, 'destFile:', dupFileRef);
          alert('Document Duplication Failed');
        });

      // dupFileRef?.put(dupFile, md).then(async (snapshot) => {
      //   console.log('[DOCUMENT DUPLICATED]', snapshot);
      //   alert('Document Duplicated');
      //   let fileDupEvent = new Event('storageFileChanged');
      //   this.fileNameInput.value = '';
      //   this.displayStorageTextFile(dupFileRef!);
      //   document.dispatchEvent(fileDupEvent);
      // }).catch(e => {
      //   console.error('[DOCUMENT DUPLICATE FAILED]:', e);
      //   console.error('srcFile', srcFileRef, 'dupFile', dupFileRef);
      //   alert('Document Dup Failed');
      // });

      (this.fileDupModal as any).close();
    });
  }

  private generateSceneParamModalAction() {
    let collapsibles = document.getElementsByClassName(
      'collapsible'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0; i < collapsibles.length; i++) {
      let coll = collapsibles[i];
      coll.addEventListener('click', (ev: Event) => {
        ev.preventDefault();
        coll.classList.toggle('active');
        let content = coll.nextElementSibling as HTMLButtonElement;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }

    let initDataSize = [{ sampling: 'gaussian', params: '0, 1', n: 5 }];

    let rtSize = new Tabulator('#size-inches-table', {
      data: initDataSize,
      layout: 'fitColumns',
      history: true,
      columns: [
        {
          title: 'Sampling',
          field: 'sampling',
          editor: 'select',
          editorParams: { values: ['gaussian', 'uniform', 'range'] },
        },
        { title: 'Params', field: 'params', editor: 'input', editable: true },
        {
          title: 'n || step size',
          field: 'n',
          editor: 'input',
          editable: true,
        },
      ],
    });

    let szDiv = document.querySelector('.size-inches') as HTMLDivElement;
    let addRowSize = szDiv.querySelector('.add-rule-btn') as HTMLButtonElement;
    let undoSz = szDiv.querySelector('.undo-edit-btn') as HTMLButtonElement;

    addRowSize.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      rtSize.addRow({ sampling: '', params: '', n: NaN }, false);
    });

    undoSz.addEventListener('click', (ev: Event) => {
      rtSize.undo();
    });

    let initDataPos = [
      { target: 'x', sampling: 'gaussian', params: '0, 1', n: 5 },
    ];

    let rtPos = new Tabulator('#position-inches-table', {
      data: initDataPos,
      layout: 'fitColumns',
      history: true,
      columns: [
        {
          title: 'Target',
          field: 'target',
          editor: 'select',
          editorParams: { values: ['x', 'y', 'z'] },
        },
        {
          title: 'Sampling',
          field: 'sampling',
          editor: 'select',
          editorParams: { values: ['gaussian', 'uniform', 'range'] },
        },
        { title: 'Params', field: 'params', editor: 'input', editable: true },
        {
          title: 'n || step size',
          field: 'n',
          editor: 'input',
          editable: true,
        },
      ],
    });

    let posDiv = document.querySelector('.position-inches') as HTMLDivElement;
    let addRowPos = posDiv.querySelector('.add-rule-btn') as HTMLButtonElement;
    let undoPos = posDiv.querySelector('.undo-edit-btn') as HTMLButtonElement;

    addRowPos.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      rtPos.addRow({ target: '', sampling: '', params: '', n: NaN });
    });

    undoPos.addEventListener('click', (ev: Event) => {
      rtPos.undo();
    });

    let initDataDeg = [
      { target: 'x', sampling: 'gaussian', params: '0, 1', n: 5 },
    ];

    let rtDeg = new Tabulator('#rotation-degrees-table', {
      data: initDataDeg,
      layout: 'fitColumns',
      history: true,
      columns: [
        {
          title: 'Target',
          field: 'target',
          editor: 'select',
          editorParams: { values: ['x', 'y', 'z'] },
        },
        {
          title: 'Sampling',
          field: 'sampling',
          editor: 'select',
          editorParams: { values: ['gaussian', 'uniform', 'range'] },
        },
        { title: 'Params', field: 'params', editor: 'input', editable: true },
        {
          title: 'n || step size',
          field: 'n',
          editor: 'input',
          editable: true,
        },
      ],
    });

    let degDiv = document.querySelector('.rotation-degrees') as HTMLDivElement;
    let addRowDeg = degDiv.querySelector('.add-rule-btn') as HTMLButtonElement;
    let undoDeg = degDiv.querySelector('.undo-edit-btn') as HTMLButtonElement;

    addRowDeg.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      rtDeg.addRow({ target: '', sampling: '', params: '', n: NaN });
    });

    undoDeg.addEventListener('click', (ev: Event) => {
      rtDeg.undo();
    });
  }

  private renameTextFieldAction() {
    this.fileNameInput.addEventListener('click', (ev: Event) => {
      let tmpName = this.activeFile.id as FileRef;
      let curFileName = tmpName.name;
      this.fileNameInput.value = curFileName;
      this.fileNameInput.focus();
      this.fileNameInput.select();
    });
  }

  private renameBtnAction() {
    this.fileRenameBtn.addEventListener('click', (ev: Event) => {
      if (this.fileNameInput.value) {
        let oldFileRef = this.activeFile.id as FileRef;
        let newFileRef = ref(oldFileRef.parent!, this.fileNameInput.value);
        // let newFileRef = oldFileRef.parent?.child(this.fileNameInput.value);
        let newFile = new Blob([JSON.stringify(this.editor.get(), null, 1)]);
        let md = {
          contentType: 'application/json',
        };

        uploadBytes(newFileRef, newFile, md)
          .then(async (snapshot) => {
            await deleteObject(oldFileRef);
            console.log('[DOCUMENT RENAMED]:', snapshot);
            alert('Document Renamed');
            let renameEvent = new Event('storageFileChanged');
            this.fileNameInput.value = '';
            this.displayStorageTextFile(newFileRef!);
            document.dispatchEvent(renameEvent);
          })
          .catch((e: Error) => {
            console.error('[DOCUMENT RENAME FAILED]:', e);
            console.error('oldFile', oldFileRef, 'newFile', newFileRef);
            alert('Document Rename Failed');
          });
        // });
      } else {
        console.log('file name input field is null');
      }
    });
  }

  private renderBtnAction() {
    this.renderBtn.addEventListener('click', (evt: Event) => {
      evt.preventDefault();
      evt.stopPropagation();
      console.log(this.editor.get());
      const renderRequest = new CustomEvent('onRenderRequest', {
        detail: this.editor.get(),
      });
      this.renderBtn.dispatchEvent(renderRequest);
    });
    // const renderRequest = new CustomEvent('onRenderRequest', {
    //   detail: this.editor.get(),
    // });
  }

  private updateBtnAction() {
    this.updateBtn.addEventListener('click' || 'pointerup', (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      let loc = this.activeFile.loc;

      if (
        loc === 'marmosets' ||
        loc === 'mkturkdata' ||
        loc === 'devices' ||
        loc === 'mkscale' ||
        loc === 'eyecalibrations' ||
        loc === 'mkdailydata'
      ) {
        // handle marmosets && mkturkdata
        let id = this.activeFile.id as string;

        setDoc(doc(db, loc, id), this.dateToTimestamp(this.editor.get()))
          .then(() => {
            console.log('[DOCUMENT UPDATED]:', id);
            alert('Document Updated');
          })
          .catch((e: Error) => {
            console.error('[DOCUMENT UPDATE FAILED]', 'FILE:', id, 'ERROR:', e);
            alert('Document Update Failed');
          });

        // db.collection(loc).doc(id).set(
        //   this.dateToTimestamp(this.editor.get())
        // ).then(() => {
        //   console.log("[DOCUMENT UPDATED]:", id);
        //   alert("Document Updated");
        // }).catch(e => {
        //   console.error("[DOCUMENT UPDATE FAILED]", "FILE:", id, "ERROR:", e);
        //   alert("Document Update Failed");
        // });
      } else if (this.activeFile.loc === 'mkturkfiles') {
        // handle mkturkfiles
        let id = this.activeFile.id as FileRef;
        let updatedFile = new Blob([
          JSON.stringify(this.editor.get(), null, 1),
        ]);
        let metadata = {
          contentType: 'application/json',
        };

        uploadBytes(id, updatedFile, metadata)
          .then((snapshot) => {
            console.log(this.editor.get());
            console.log('[DOCUMENT UPDATED]:', snapshot.metadata.name);
            alert('Document Updated');
            document.dispatchEvent(new Event('storageFileChanged'));
          })
          .catch((e: Error) => {
            console.error('[DOCUMENT UPDATE FAILED]', 'FILE:', id, 'ERROR:', e);
            alert('Document Update Failed');
          });

        // id.put(updatedFile, metadata).then(snapshot => {
        //   console.log(this.editor.get());
        //   console.log("[DOCUMENT UPDATED]:", snapshot.metadata.name);
        //   alert("Document Updated");
        //   document.dispatchEvent(new Event('storageFileChanged'));
        // }).catch(e => {
        //   console.error("[DOCUMENT UPDATE FAILED]", "FILE:", id, "ERROR:", e);
        //   alert("Document Update Failed");
        // });
      } else {
        console.error('[DOCUMENT UPDATE FAILED] ERROR: Location Error');
      }
    });
  }

  private makeActiveBtnAction() {
    this.makeActiveBtn.addEventListener('click' || 'pointerup', (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      console.log(this.activeFile);
      let storageRef = ref(storage);
      let file = this.editor.get();
      let fileName =
        'mkturkfiles/parameterfiles/subjects/' + file.Agent + '_params.json';
      // let fileRef = storageRef.child(fileName);
      let fileRef = ref(storageRef, fileName);
      file = new Blob([JSON.stringify(file, null, 1)]);
      let metadata = {
        contentType: 'application/json',
      };

      uploadBytes(fileRef, file, metadata)
        .then((snapshot) => {
          console.log('[PARAM MADE ACTIVE]:', snapshot.metadata.name);
          alert('Param Active');
        })
        .catch((e: Error) => {
          console.error(
            '[PARAM ACTIVATION FAILED]',
            'FILE:',
            fileRef,
            'ERROR',
            e
          );
          alert('Param Activation Failed');
        });

      // fileRef.put(file, metadata).then(snapshot => {
      //   console.log("[PARAM MADE ACTIVE]:", snapshot.metadata.name);
      //   alert("Param Active");
      // }).catch(e => {
      //   console.error("[PARAM ACTIVATION FAILED]", "FILE:", fileRef, "ERROR", e);
      //   alert("Param Activation Failed");
      // });
    });
  }

  private storeParamBtnAction() {
    this.storeParamBtn.addEventListener('click' || 'pointerup', (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      console.log(this.activeFile);
      // let storageRef = storage.ref();
      let storageRef = ref(storage);
      let file = this.editor.get();
      let date = new Date();
      let fileName =
        'mkturkfiles/parameterfiles/params_storage/' +
        file.Agent +
        '_params_' +
        date.toJSON().split('T')[0] +
        '.json';

      // let fileRef = storageRef.child(fileName);
      let fileRef = ref(storageRef, fileName);

      file = new Blob([JSON.stringify(file, null, 1)]);
      let metadata = {
        contentType: 'application/json',
      };

      uploadBytes(fileRef, file, metadata)
        .then((snapshot) => {
          console.log('[PARAM STORED]:', snapshot.metadata.name);
          alert('Param stored');
        })
        .catch((e: Error) => {
          console.error('[PARAM STORAGE FAILED]', 'FILE:', fileRef, 'ERROR', e);
          alert('Param Storage Failed');
        });

      // fileRef.put(file, metadata).then(snapshot => {
      //   console.log('[PARAM STORED]:', snapshot.metadata.name);
      //   alert('Param stored');
      // }).catch(e => {
      //   console.error('[PARAM STORAGE FAILED]', 'FILE:', fileRef, 'ERROR', e);
      //   alert('Param Storage Failed');
      // });
    });
  }

  private genBtnAction() {
    this.genBtn.addEventListener('click', (ev: Event) => {
      if (this.genBtn.value == 'generate') {
        this.userEditedSceneParam = this.editor.get();
        this.generatedSceneParam = this.pe.generateParamObject(
          this.userEditedSceneParam,
          'vectorize'
        );
        this.editor.destroy();
        let options = {
          modes: ['tree' as 'tree', 'code' as 'code'],
        };
        this.editor = new JSONEditor(
          this.editorElement,
          options,
          this.generatedSceneParam
        );
        this.genBtn.value = 'revert';
        this.genBtn.textContent = 'Revert';
        this.updateBtn.style.display = 'none';
        this.svSceneBtn.style.display = 'inline-block';
        this.btnBoxDiv.style.gridTemplateAreas =
          '"param-gen-btn-box sv-scene-param-btn"';
      } else if (this.genBtn.value == 'revert') {
        this.editor.destroy();
        this.generatedSceneParam = {};
        let options = {
          modes: ['tree' as 'tree', 'code' as 'code'],
        };
        this.editor = new JSONEditor(
          this.editorElement,
          options,
          this.userEditedSceneParam
        );
        this.genBtn.value = 'generate';
        this.genBtn.textContent = 'Vectorize Param';
        this.svSceneBtn.style.display = 'none';
        this.updateBtn.style.display = 'inline-block';
        this.btnBoxDiv.style.gridTemplateAreas =
          '"param-gen-btn-box update-btn"';
      }
    });

    this.expandBtn.addEventListener('click', (ev: Event) => {
      if (this.expandBtn.value == 'expand') {
        this.userEditedSceneParam = this.editor.get();
        this.generatedSceneParam = this.pe.generateParamObject(
          this.userEditedSceneParam,
          'expand'
        );
        this.editor.destroy();
        let options = {
          modes: ['tree' as 'tree', 'code' as 'code'],
        };
        this.editor = new JSONEditor(
          this.editorElement,
          options,
          this.generatedSceneParam
        );
        this.expandBtn.value = 'revert';
        this.expandBtn.textContent = 'Revert';
        this.updateBtn.style.display = 'none';
        this.svSceneBtn.style.display = 'inline-block';
        this.btnBoxDiv.style.gridTemplateAreas =
          '"param-gen-btn-box sv-scene-param-btn"';
      } else if (this.expandBtn.value == 'revert') {
        this.editor.destroy();
        this.generatedSceneParam = {};
        let options = {
          modes: ['tree' as 'tree', 'code' as 'code'],
        };
        this.editor = new JSONEditor(
          this.editorElement,
          options,
          this.userEditedSceneParam
        );
        this.expandBtn.value = 'expand';
        this.expandBtn.textContent = 'Expand Param';
        this.svSceneBtn.style.display = 'none';
        this.updateBtn.style.display = 'inline-block';
        this.btnBoxDiv.style.gridTemplateAreas =
          '"param-gen-btn-box update-btn"';
      }
    });
  }

  private svSceneBtnAction() {
    let modal = document.querySelector('#filename-modal') as HTMLDialogElement;
    let modalFilename = modal.querySelector(
      '.filename-input'
    ) as HTMLInputElement;

    this.svSceneBtn.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      (modal as any).showModal();
      let activeFileName = this.activeFile.id as FileRef;
      let now = new Date();
      modalFilename.value =
        now.toLocaleDateString('en-CA') + '_' + activeFileName.name;
      modalFilename.focus();
      modalFilename.select();
    });

    modal.querySelector('.cl')?.addEventListener('click', () => {
      (modal as any).close();
    });

    modal.querySelector('.sv')?.addEventListener('click', () => {
      let srcRef = this.activeFile.id as FileRef;
      // let destRef = srcRef.parent?.parent?.child('generatedParams').child(modalFilename.value);
      let destRef = ref(
        srcRef.parent?.parent!,
        `generatedParams/${modalFilename.value}`
      );
      let sceneSrcFileName =
        modalFilename.value.split('.')[0] +
        '_source.' +
        modalFilename.value.split('.')[1];
      // let sceneSrcDestRef = srcRef.parent?.parent?.child('generatedParams').child(sceneSrcFileName);
      let sceneSrcDestRef = ref(
        srcRef.parent?.parent!,
        `generatedParams/${sceneSrcFileName}`
      );
      let file = new Blob([JSON.stringify(this.generatedSceneParam, null, 1)]);
      let sceneSrcFile = new Blob([
        JSON.stringify(this.userEditedSceneParam, null, 1),
      ]);
      let md = {
        contentType: 'application/json',
      };

      uploadBytes(destRef, file, md)
        .then((snapshot) => {
          alert('Generated param file was saved');
          this.generatedSceneParam = {};
          this.userEditedSceneParam = {};
          this.displayStorageTextFile(srcRef);
        })
        .catch((e: Error) => {
          console.error('Param Generation Failed:', e);
          alert('Generated param file was NOT saved');
        });

      uploadBytes(sceneSrcDestRef, sceneSrcFile, md);
      (modal as any).close();

      // destRef?.put(file, md).then(async (sns) => {
      //   alert('Generated param file was saved');
      //   this.generatedSceneParam = {};
      //   this.userEditedSceneParam = {};
      //   this.displayStorageTextFile(srcRef);
      // }).catch(e => {
      //   console.error('Param Generation Failed');
      //   alert('Generated param file was NOT saved');
      // });
      // sceneSrcDestRef?.put(sceneSrcFile, md);
      // modal.close();
    });
  }

  private dateToTimestamp(data: any) {
    function _dateToTimestamp(element: string, idx: number, arr: any[]) {
      let dt = new Date(element);
      if (
        !isNaN(Number(dt)) &&
        dt instanceof Date &&
        typeof element === 'string'
      ) {
        arr[idx] = Timestamp.fromDate(dt);
      }
    }

    for (let key of Object.keys(data)) {
      if (
        Array.isArray(data[key]) &&
        (key.toLowerCase().includes('time') ||
          key.toLowerCase().includes('dates'))
      ) {
        console.log('ARRAY ' + 'data[' + key + ']' + '=' + data[key]);
        data[key].forEach(_dateToTimestamp);
      } else if (this.isDict(data[key])) {
        for (let key2 of Object.keys(data[key])) {
          let dt = new Date(data[key][key2]);
          if (
            !isNaN(Number(dt)) &&
            dt instanceof Date &&
            this.isString(data[key][key2])
          ) {
            console.log('Dictionary ' + 'data[' + key + ']' + '=' + data[key]);
            data[key][key2] = Timestamp.fromDate(dt);
          }
        }
      } else if (
        this.isString(data[key]) &&
        (key.toLowerCase().includes('date') ||
          key.toLowerCase().includes('time'))
      ) {
        let dt = new Date(data[key]);
        if (!isNaN(Number(dt)) && dt instanceof Date) {
          data[key] = Timestamp.fromDate(dt);
        }
      }
    }
    return data;
  }

  private isDict(val: any) {
    return val && typeof val === 'object' && val.constructor === Object;
  }

  private isString(val: any) {
    return typeof val === 'string' || val.constructor === String;
  }
}

export class Mkthree {
  /* THREE.js member variables */
  private scene: THREE.Scene | null;
  private camera: THREE.PerspectiveCamera | null;
  private cameraPos: THREE.Vector3 | null;
  private controls: OrbitControls | null;
  private dirLight: THREE.DirectionalLight | null;
  private dirLightPos: THREE.Vector3 | null;
  private light: THREE.AmbientLight | null;
  private loader: GLTFLoader | null;
  private renderer: THREE.WebGLRenderer | null;
  public animationID: number;
  public active: boolean;
  private datGui: GUI | null;

  public canvas: HTMLDivElement;
  public ccanvas: HTMLCanvasElement;

  /* constructor */
  constructor() {
    this.datGui = null;
    this.scene = null;
    this.camera = null;
    this.cameraPos = null;
    this.controls = null;
    this.dirLight = null;
    this.dirLightPos = null;
    this.light = null;
    this.loader = null;
    this.renderer = null;
    this.animationID = -1;
    this.active = false;
    this.canvas = document.querySelector('#dat-gui-div') as HTMLDivElement;
    this.ccanvas = document.querySelector('#three-canvas') as HTMLCanvasElement;
    let editorDiv = document.querySelector('#editor-div') as HTMLDivElement;
    this.ccanvas.width = editorDiv.offsetWidth;
    this.ccanvas.height = editorDiv.offsetHeight;
    this.ccanvas.style.width = String(editorDiv.offsetWidth);
    this.ccanvas.style.height = String(editorDiv.offsetHeight);
    this.resizeCanvasAction();
  }

  public async renderCubeMap(cubeMapList: any) {
    if (this.active) {
      this.destroy();
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.ccanvas,
      antialias: true,
    });

    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    // camera setup for cubemap defaults inside the cube
    this.cameraPos = new THREE.Vector3(0, 0, 10);
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.ccanvas.width / this.ccanvas.height,
      0.1,
      2000
    );
    this.camera.position.set(
      this.cameraPos.x,
      this.cameraPos.y,
      this.cameraPos.z
    );

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.update();

    this.dirLightPos = new THREE.Vector3(0, 2, 0);
    this.dirLight = new THREE.DirectionalLight(0xffffff, 0);
    this.dirLight.position.set(
      this.dirLightPos.x,
      this.dirLightPos.y,
      this.dirLightPos.z
    );
    this.light = new THREE.AmbientLight(0x404040, 0.05); // (0x404040, 0.1)
    const ambientLightParams = {
      color: '#404040',
      intensity: 0.05,
    };

    this.scene = new THREE.Scene();
    this.scene.add(this.camera);
    this.scene.add(this.dirLight);
    this.scene.add(this.light);

    // order: xright, xleft, ytop, ybottom, zfront, zback
    const cubeMapURLs = [
      await getDownloadURL(ref(storage, cubeMapList.xright)),
      await getDownloadURL(ref(storage, cubeMapList.xleft)),
      await getDownloadURL(ref(storage, cubeMapList.ytop)),
      await getDownloadURL(ref(storage, cubeMapList.ybottom)),
      await getDownloadURL(ref(storage, cubeMapList.zfront)),
      await getDownloadURL(ref(storage, cubeMapList.zback)),
    ];

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load(cubeMapURLs);

    this.datGui = new GUI({ autoPlace: false });
    const dirLightParams = {
      x: 0,
      y: 2,
      z: 0,
      color: '#ffffff',
      intensity: 0,
    };

    const cameraPositionParams = {
      x: 0,
      y: 0,
      z: 10,
    };

    const cameraPositionFolder = this.datGui.addFolder('Camera Position');
    cameraPositionFolder
      .add(cameraPositionParams, 'x', -10, 10, 1)
      .onFinishChange((val) => {
        this.camera?.position.setX(val);
        this.controls?.update();
      });
    cameraPositionFolder
      .add(cameraPositionParams, 'y', -10, 10, 1)
      .onFinishChange((val) => {
        this.camera?.position.setY(val);
        this.controls?.update();
      });
    cameraPositionFolder
      .add(cameraPositionParams, 'z', -10, 10, 1)
      .onFinishChange((val) => {
        this.camera?.position.setZ(val);
        this.controls?.update();
      });

    const ambientLightFolder = this.datGui.addFolder('Ambient Light');
    ambientLightFolder.addColor(ambientLightParams, 'color').onChange((val) => {
      this.light?.color.set(val);
    });
    ambientLightFolder
      .add(ambientLightParams, 'intensity', 0, 1, 0.05)
      .onChange((val: number) => {
        if (this.light) {
          this.light.intensity = val;
        }
      });
    ambientLightFolder.open();

    const dirLightFolder = this.datGui.addFolder('Directional Light');
    dirLightFolder.addColor(dirLightParams, 'color').onFinishChange((val) => {
      this.dirLight?.color.set(val);
    });
    dirLightFolder
      .add(dirLightParams, 'intensity', 0, 1, 0.05)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.intensity = val;
        }
      });
    dirLightFolder
      .add(dirLightParams, 'x', -10, 10, 1)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.position.setX(val);
        }
      })
      .name('xPos');

    dirLightFolder
      .add(dirLightParams, 'y', -10, 10, 1)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.position.setY(val);
        }
      })
      .name('yPos');

    dirLightFolder
      .add(dirLightParams, 'x', -10, 10, 1)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.position.setZ(val);
        }
      })
      .name('zPos');

    dirLightFolder.open();

    const controlFolder = this.datGui.addFolder('Controls');
    let orbitControls: any = {};
    orbitControls.resetControl = () => {
      this.controls?.reset();
    };

    controlFolder.add(orbitControls, 'resetControl');

    // this.datGui
    //   .add(this.dirLight, 'intensity', 0, 1, 0.05)
    //   .name('DirectionalLight Intensity');
    const containerrr = document.querySelector(
      '#dat-container'
    ) as HTMLDivElement;
    containerrr.style.position = 'absolute';
    containerrr.style.top = '0px';
    containerrr.style.right = '0px';
    containerrr.appendChild(this.datGui.domElement);
    this.scene.background = texture;

    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
    this.active = true;
  }

  /**
   * Public function to display mesh specified by filepath to a canvas
   * specified by canvas
   *
   * @param {string} filePath
   * @param {HTMLCanvasElement} canvas
   * @public
   */
  public async displayMesh(meshRef: StorageReference) {
    console.time('displayMesh()');

    if (this.active) {
      this.destroy();
    }

    /* renderer setup */
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.ccanvas,
      antialias: true,
    });
    this.renderer.setClearColor(0xffffff);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMapping = THREE.LinearToneMapping;
    this.renderer.toneMappingExposure = 10;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    /* camera setup */
    this.cameraPos = new THREE.Vector3(0, 0, 10);
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.ccanvas.width / this.ccanvas.height,
      0.1,
      2000
    );
    this.camera.position.set(
      this.cameraPos.x,
      this.cameraPos.y,
      this.cameraPos.z
    );

    /* light setup */
    this.dirLightPos = new THREE.Vector3(0, 2, 0);
    this.dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.dirLight.position.set(
      this.dirLightPos.x,
      this.dirLightPos.y,
      this.dirLightPos.z
    );
    const dirLightParams = {
      x: 0,
      y: 2,
      z: 0,
      color: '#ffffff',
      intensity: 0.5,
    };

    this.light = new THREE.AmbientLight(0x404040, 0.05); // (0x404040, 0.1)
    const ambientLightParams = {
      color: '#404040',
      intensity: 0.05,
    };

    /* control setup */
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(0, 0, 0);

    /* scene setup */
    this.scene = new THREE.Scene();
    this.scene.add(this.camera);
    this.scene.add(this.dirLight);
    this.scene.add(this.light);

    this.datGui = new GUI({ autoPlace: false });

    /* load mesh */
    let objectMesh: any = await this.loadMesh(meshRef);
    console.log('objectMesh:', objectMesh);
    const objectParams = {
      x: 0,
      y: 0,
      z: 0,
    };
    const objectFolder = this.datGui.addFolder('Object Rotation');
    objectFolder.add(objectParams, 'x', -180, 180, 5).onChange((val) => {
      objectMesh.scene.rotation.x = THREE.MathUtils.degToRad(val);
    });

    objectFolder.add(objectParams, 'y', -180, 180, 5).onChange((val) => {
      objectMesh.scene.rotation.y = THREE.MathUtils.degToRad(val);
    });
    objectFolder.add(objectParams, 'z', -180, 180, 5).onChange((val) => {
      objectMesh.scene.rotation.z = THREE.MathUtils.degToRad(val);
    });
    objectFolder.open();

    const ambientLightFolder = this.datGui.addFolder('Ambient Light');
    ambientLightFolder.addColor(ambientLightParams, 'color').onChange((val) => {
      this.light?.color.set(val);
    });
    ambientLightFolder
      .add(ambientLightParams, 'intensity', 0, 1, 0.05)
      .onChange((val: number) => {
        if (this.light) {
          this.light.intensity = val;
        }
      });
    ambientLightFolder.open();

    const dirLightFolder = this.datGui.addFolder('Directional Light');
    dirLightFolder.addColor(dirLightParams, 'color').onFinishChange((val) => {
      this.dirLight?.color.set(val);
    });
    dirLightFolder
      .add(dirLightParams, 'intensity', 0, 1, 0.05)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.intensity = val;
        }
      });
    dirLightFolder
      .add(dirLightParams, 'x', -10, 10, 1)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.position.setX(val);
        }
      })
      .name('xPos');

    dirLightFolder
      .add(dirLightParams, 'y', -10, 10, 1)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.position.setY(val);
        }
      })
      .name('yPos');

    dirLightFolder
      .add(dirLightParams, 'x', -10, 10, 1)
      .onChange((val: number) => {
        if (this.dirLight) {
          this.dirLight.position.setZ(val);
        }
      })
      .name('zPos');

    dirLightFolder.open();

    const controlFolder = this.datGui.addFolder('Controls');
    let orbitControls: any = {};
    orbitControls.resetControl = () => {
      this.controls?.reset();
    };

    controlFolder.add(orbitControls, 'resetControl');

    // this.datGui
    //   .add(this.dirLight, 'intensity', 0, 1, 0.05)
    //   .name('DirectionalLight Intensity');
    const containerrr = document.querySelector(
      '#dat-container'
    ) as HTMLDivElement;
    containerrr.style.position = 'absolute';
    containerrr.style.top = '0px';
    containerrr.style.right = '0px';
    containerrr.appendChild(this.datGui.domElement);

    /* add loaded mesh to scene */
    this.scene.add(objectMesh.scene);
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
    this.active = true;

    console.timeEnd('displayMesh()');
  }

  /**
   * Private function to load and return mesh specified by filepath
   *
   * @param {string} filePath
   * @returns {Promise}
   * @private
   */
  private async loadMesh(meshRef: StorageReference) {
    try {
      let meshUrl = (await getDownloadURL(meshRef).catch((e: Error) => {
        console.error('Error:', e);
      })) as string;

      // let meshUrl = await meshRef.getDownloadURL().catch(e => {
      //   console.error("Error:", e);
      // });

      this.loader = new GLTFLoader();

      return new Promise((resolve, reject) => {
        try {
          this.loader?.load(meshUrl, function (gltf) {
            gltf.scene.traverse((child: any) => {
              if (child.material) {
                child.material.metalness = 0;
                child.material.transparent = true;
              }
            });
            resolve(gltf);
          });
        } catch (error) {
          console.error('Error:', error);
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  private animate() {
    this.animationID = requestAnimationFrame(this.animate.bind(this));
    if (this.scene && this.camera) {
      this.renderer?.render(this.scene, this.camera);
    }
  }

  public destroy() {
    try {
      this.datGui?.domElement.remove();
      this.datGui?.destroy();
      this.scene = null;
      this.camera = null;
      this.cameraPos = null;
      this.controls = null;
      this.dirLight = null;
      this.dirLightPos = null;
      this.light = null;
      this.loader = null;
      this.renderer?.clear();
      this.renderer = null;
      this.animationID = -1;
      this.active = false;
      cancelAnimationFrame(this.animationID);
    } catch (error) {
      console.error('Error destroying THREE Objects:', error);
    }
  }

  private resizeCanvasAction() {
    window.addEventListener('resize', (ev: Event) => {
      let editorDiv = document.querySelector('#editor-div') as HTMLDivElement;
      this.ccanvas.width = editorDiv.offsetWidth;
      this.ccanvas.height = editorDiv.offsetHeight;
      this.ccanvas.style.width = String(editorDiv.offsetWidth);
      this.ccanvas.style.height = String(editorDiv.offsetHeight);
    });
  }
}

export class Mkimage {
  imgCanvasDiv: HTMLDivElement;
  imgCanvas: HTMLElement;
  imgGallery: Viewer;

  constructor() {
    this.imgCanvasDiv = document.querySelector(
      '#image-canvas-div'
    ) as HTMLDivElement;

    this.imgCanvas = document.querySelector('#image-canvas') as HTMLElement;

    this.imgGallery = new Viewer(document.getElementById('image-canvas')!);
  }

  public async displayImage(fileRef: FileRef, fileName: string) {
    let li = document.createElement('li');
    li.setAttribute('class', 'imageList');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    let imgLabel = document.createElement('p');
    imgLabel.innerHTML = fileName;
    // await fileRef.getDownloadURL().then(url => {
    //   img.src = url;
    // });
    await getDownloadURL(fileRef).then((url) => {
      img.src = url;
    });

    imgDiv.appendChild(img);
    imgDiv.appendChild(imgLabel);
    li.appendChild(imgDiv);
    this.imgCanvas.appendChild(li);
    this.imgGallery.destroy();
    this.imgGallery = new Viewer(document.getElementById('image-canvas')!);
  }

  public removeImages() {
    let elements = document.getElementsByClassName('imageList');
    while (elements.length > 0) {
      elements[0].parentNode?.removeChild(elements[0]);
    }
  }
}

export class Mkchart {
  chartDiv: HTMLDivElement;
  plotX: HTMLSelectElement;
  plotY: HTMLSelectElement;
  plotBtn: HTMLButtonElement;
  finderDiv: HTMLDivElement;
  chart: any;
  data: any;
  isActive: boolean;
  isBigQuery: boolean;

  constructor() {
    google.charts.load('current', { packages: ['corechart'] });
    this.chartDiv = document.querySelector('#chart-div') as HTMLDivElement;
    this.finderDiv = document.querySelector('#finder-div') as HTMLDivElement;
    this.plotX = document.querySelector('#quick-plot-x') as HTMLSelectElement;
    this.plotY = document.querySelector('#quick-plot-y') as HTMLSelectElement;
    this.plotBtn = document.querySelector('#plot-btn') as HTMLButtonElement;
    this.isActive = false;
    this.isBigQuery = false;

    this.data = null;

    this.plotBtnAction();
  }

  public plotBtnAction() {
    this.plotBtn.addEventListener('click', (ev: Event) => {
      ev.preventDefault();
      this.isActive = !this.isActive;
      if (this.isBigQuery == false) {
        if (this.isActive) {
          this.plotBtn.textContent = 'Close Quick Plot';
          this.chartDiv.style.zIndex = '2';
          this.finderDiv.style.zIndex = '1';
          let vizData = new google.visualization.DataTable();
          vizData.addColumn('datetime', this.plotX.value);
          vizData.addColumn('number', this.plotY.value);

          for (let i = 0; i < this.data[this.plotX.value].length; i++) {
            vizData.addRow([
              new Date(this.data[this.plotX.value][i]),
              parseFloat(this.data[this.plotY.value][i]),
            ]);
          }

          console.log(this.chartDiv.clientWidth);
          let chart = new google.visualization.LineChart(this.chartDiv);
          let options = {
            title: this.plotY.value,
            width: this.chartDiv.offsetWidth,
            height: this.chartDiv.offsetHeight,
            legend: 'none' as 'none',
            pointSize: 10,
          };
          chart.draw(vizData, options);
        } else {
          this.plotBtn.textContent = 'Quick Plot';
          this.finderDiv.style.zIndex = '2';
          this.chartDiv.style.zIndex = '1';
        }
      } else if (this.isBigQuery == true) {
        if (this.isActive) {
          this.plotBtn.textContent = 'Close Quick Plot';
          this.chartDiv.style.zIndex = '2';
          this.finderDiv.style.zIndex = '1';

          let vizData = new google.visualization.DataTable();
          if (this.plotX.value === 'timestamp') {
            vizData.addColumn('datetime', this.plotX.value);
          } else {
            vizData.addColumn('number', this.plotX.value);
          }

          if (this.plotY.value === 'timestamp') {
            vizData.addColumn('datetime', this.plotY.value);
          } else {
            vizData.addColumn('number', this.plotY.value);
          }

          for (let i = 0; i < this.data[this.plotX.value].length; i++) {
            vizData.addRow([
              this.data[this.plotX.value][i],
              this.data[this.plotY.value][i],
            ]);
          }
          let chart = new google.visualization.LineChart(this.chartDiv);
          let options = {
            title: this.plotY.value,
            width: this.chartDiv.offsetWidth,
            height: this.chartDiv.offsetHeight,
            legend: 'none' as 'none',
            pointSize: 10,
          };
          chart.draw(vizData, options);
        } else {
          this.plotBtn.textContent = 'Quick Plot';
          this.finderDiv.style.zIndex = '2';
          this.chartDiv.style.zIndex = '1';
        }
      }
    });
  }

  public populateAxisFields(data: any) {
    this.data = data;
    this.isBigQuery = false;
    for (let key of Object.keys(data)) {
      if (
        Array.isArray(data[key]) &&
        (key.includes('_dates') || key.toLowerCase().includes('times'))
      ) {
        let option = document.createElement('option');
        option.setAttribute('class', 'axis-options');
        option.setAttribute('value', key);
        option.textContent = key;
        this.plotX.appendChild(option);
      } else if (
        (Array.isArray(data[key]) && key.includes('_values')) ||
        key.toLowerCase().includes('values')
      ) {
        let option = document.createElement('option');
        option.setAttribute('class', 'axis-options');
        option.setAttribute('value', key);
        option.textContent = key;
        this.plotY.appendChild(option);
      }
    }
  }

  public bqPopulateAxisFields(dataArr: any, dataset: string) {
    this.isBigQuery = true;
    if (dataset === 'eyedata') {
      let eyedataObj: any = {};
      //console.log('bqpopulate axis dataArr', dataArr);
      dataArr.forEach((data: any) => {
        // console.log('data in dataArr', data);
        for (let key of Object.keys(data)) {
          //console.log('key', key);
          if (key === 'timestamp') {
            try {
              eyedataObj[key].push(new Date(data[key].value));
            } catch {
              eyedataObj[key] = [];
              eyedataObj[key].push(new Date(data[key].value));
              this.addAxisOption(key);
            }
          } else {
            try {
              eyedataObj[key].push(parseFloat(data[key]));
            } catch {
              eyedataObj[key] = [];
              eyedataObj[key].push(parseFloat(data[key]));
              this.addAxisOption(key);
            }
          }
        }
      });
      this.data = eyedataObj;
    }
  }

  private addAxisOption(key: string) {
    let optionX = document.createElement('option');
    optionX.setAttribute('class', 'axis-options');
    optionX.setAttribute('value', key);
    optionX.textContent = key;
    let optionY = document.createElement('option');
    optionY.setAttribute('class', 'axis-options');
    optionY.setAttribute('value', key);
    optionY.textContent = key;
    this.plotX.appendChild(optionX);
    this.plotY.appendChild(optionY);
  }

  public removeElementsByClassName(cName: string) {
    let elements = document.getElementsByClassName(cName);
    while (elements.length > 0) {
      elements[0].parentNode?.removeChild(elements[0]);
    }
  }
}
