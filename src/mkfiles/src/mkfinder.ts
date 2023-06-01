import { getApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { Mkeditor, Mkthree, Mkimage, Mkchart } from './mkmedia';
import FileSaver from 'file-saver';
import {
  FirebaseStorage,
  StorageReference,
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from 'firebase/storage';

declare global {
  interface HTMLElementEventMap {
    onRenderRequest: CustomEvent;
  }
}

const db = getFirestore();

export class Mkfinder {
  finder: Tabulator;
  mke: Mkeditor;
  previousPath: string;
  storage: FirebaseStorage;
  storageRef: StorageReference;
  backBtn: HTMLButtonElement;
  downloadBtn: HTMLButtonElement;
  mkt: Mkthree;
  mki: Mkimage;
  mkc: Mkchart;
  numImgSlider: HTMLInputElement;
  showImagesBtn: HTMLButtonElement;
  renderBtn: HTMLButtonElement;
  selectedImages: any[];
  pathName: HTMLParagraphElement;

  constructor() {
    this.finder = new Tabulator('#finder');
    this.previousPath = '';
    this.storage = getStorage(getApp());
    this.storageRef = ref(this.storage);
    this.selectedImages = [];

    this.backBtn = document.querySelector('#back-btn') as HTMLButtonElement;
    this.showImagesBtn = document.querySelector(
      '#show-images-btn'
    ) as HTMLButtonElement;
    this.numImgSlider = document.querySelector(
      '#num-image-slider'
    ) as HTMLInputElement;
    this.downloadBtn = document.querySelector(
      '#download-file'
    ) as HTMLButtonElement;
    this.pathName = document.querySelector(
      '#path-name-span'
    ) as HTMLParagraphElement;
    this.renderBtn = document.querySelector('#render-btn') as HTMLButtonElement;

    this.backBtnAction();
    this.showImagesBtnAction();
    this.numImgSliderAction();
    this.downloadBtnAction();
    this.refreshStorageTable();

    this.mkt = new Mkthree();
    this.mki = new Mkimage();
    this.mke = new Mkeditor();
    this.mkc = new Mkchart();

    this.renderBtnAction();
  }

  public listFirestoreDocs(dataArr: any[], database: string) {
    this.displayFirestoreTable(dataArr, database);
  }

  private renderBtnAction() {
    this.renderBtn.addEventListener('onRenderRequest', (evt: CustomEvent) => {
      this.mkt.destroy();
      this.mki.removeImages();

      this.mkt.canvas.style.zIndex = '3';
      this.mke.editorDivElement.style.zIndex = '2';
      this.mki.imgCanvasDiv.style.zIndex = '1';
      this.mkt.renderCubeMap(evt.detail);
    });
  }

  private displayFirestoreTable(dataArr: any[], database: string) {
    dataArr = this.timestampToDate(dataArr);
    this.mke.makeActiveBtn.style.display = 'none';
    this.mke.storeParamBtn.style.display = 'none';

    if (database == 'marmosets') {
      this.finder.destroy();
      this.pathName.innerText = 'marmosets';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'name',
        layout: 'fitColumns',
        initialSort: [{ column: 'name', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Name', field: 'name' },
          { title: 'Sex', field: 'sex' },
          { title: 'DOB', field: 'birthdate' },
          { title: 'RFID', field: 'rfid' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
          this.mkc.removeElementsByClassName('axis-options');
          this.mkc.populateAxisFields(row.getData());
        },
        rowTap: (event, row) => {
          event.stopPropagation();

          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
          this.mkc.removeElementsByClassName('axis-options');
          this.mkc.populateAxisFields(row.getData());
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database == 'mkturkdata') {
      this.finder.destroy();
      this.pathName.innerText = 'mkturkdata';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'index',
        layout: 'fitColumns',
        initialSort: [{ column: 'Agent', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Agent', field: 'Agent' },
          { title: 'Doctype', field: 'Doctype' },
          { title: 'CurrentDate', field: 'CurrentDate' },
          {
            title: 'FirestoreDocRoot',
            field: 'FirestoreDocRoot',
            visible: false,
          },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database == 'mkdailydata') {
      this.finder.destroy();
      this.pathName.innerText = 'mkdailydata';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'index',
        layout: 'fitColumns',
        initialSort: [{ column: 'agent', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Agent', field: 'agent' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database == 'objects') {
      this.finder.destroy();
      this.pathName.innerText = 'objects';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'docname',
        layout: 'fitColumns',
        initialSort: [{ column: 'identity', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Identity', field: 'identity' },
          { title: 'Mesh', field: 'mesh' },
          { title: 'Noun', field: 'noun' },
          { title: 'Meshfile', field: 'meshfile' },
          { title: 'MeshfilePath', field: 'meshfilepath' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database == 'devices') {
      this.finder.destroy();
      this.pathName.innerText = 'devices';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'docname',
        layout: 'fitColumns',
        initialSort: [{ column: 'model', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Model', field: 'model' },
          { title: 'Brand', field: 'brand' },
          { title: 'Type', field: 'type' },
          { title: 'PPI', field: 'ppi' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database == 'eyecalibrations') {
      this.finder.destroy();
      this.pathName.innerText = 'eyecalibrations';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'Taskdoc',
        layout: 'fitColumns',
        initialSort: [{ column: 'Agent', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Agent', field: 'Agent' },
          { title: 'CurrentDate', field: 'CurrentDate' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database == 'mkscale') {
      this.finder.destroy();
      this.pathName.innerText = 'mkscale';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'Docname',
        layout: 'fitColumns',
        initialSort: [{ column: 'CurrentDate', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Name', field: 'Name' },
          { title: 'CurrentDate', field: 'CurrentDate' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
          this.mkc.populateAxisFields(row.getData());
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
          this.mkc.populateAxisFields(row.getData());
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database === 'mturkhits') {
      this.finder.destroy();
      this.pathName.innerText = 'mturkhits';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'hitId',
        layout: 'fitColumns',
        initialSort: [{ column: 'hitId', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'HIT ID', field: 'hitId' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database === 'mturkusers') {
      this.finder.destroy();
      this.pathName.innerText = 'mturkusers';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'workerId',
        layout: 'fitColumns',
        initialSort: [{ column: 'workerId', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Worker ID', field: 'workerId' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else if (database === 'mturkdata') {
      this.finder.destroy();
      this.pathName.innerText = 'mturkdata';
      this.finder = new Tabulator('#finder', {
        data: dataArr,
        index: 'Docname',
        layout: 'fitColumns',
        initialSort: [{ column: 'Docname', dir: 'asc' }],
        columns: [
          {
            title: "<input id='select-all' type='checkbox'/>",
            width: 15,
            headerSort: false,
          },
          { title: 'Docname', field: 'Docname' },
        ],
        selectable: true,
        selectableRangeMode: 'click',
        rowClick: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';
          this.mke.displayFirebaseTextFile(row.getData(), database);
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox = document.querySelector(
            '#select-all'
          ) as HTMLInputElement;
          selectAllBox.addEventListener('change', (ev) => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        },
      });
    } else {
      console.error('Wrong or Invalid database trying to be tabularized');
    }
  }

  private timestampToDate(dataArr: any[]) {
    function _timestampToDate(element: Timestamp, idx: number, arr: any[]) {
      try {
        arr[idx] = element.toDate().toJSON();
      } catch {}
    }

    console.time('Timestamp Conversion');
    dataArr.forEach((data) => {
      for (let key of Object.keys(data)) {
        console.log(
          'timestampconv: data[key] = data[' + key + ']=' + data[key]
        );
        if (Array.isArray(data[key])) {
          data[key].forEach(_timestampToDate);
        } else if (this.isDict(data[key])) {
          try {
            data[key] = data[key].toDate().toJSON();
            continue;
          } catch (e) {
            // console.log(e);
          }

          for (let key2 of Object.keys(data[key])) {
            try {
              data[key][key2] = data[key][key2].toDate().toJSON();
            } catch {
              // console.log("Not Timestamp Object");
            }
          }
        } else if (
          data[key] != null &&
          !this.isString(data[key]) &&
          !this.isNumber(data[key])
        ) {
          try {
            data[key] = data[key].toDate().toJSON();
          } catch {
            // console.log("Not Timestamp Object");
          }
        }
      }
    });
    console.timeEnd('Timestamp Conversion');

    return dataArr;
  }

  private isDict(val: any) {
    return val && typeof val === 'object' && val.constructor === Object;
  }

  private isString(val: any) {
    return typeof val === 'string' || val.constructor === String;
  }

  private isNumber(val: any) {
    return typeof val === 'number' && isFinite(val);
  }

  public async listStorageFiles(fileRef: StorageReference) {
    function formatFileSize(size: number) {
      let threshold = 1000;
      if (Math.abs(size) < threshold) {
        return size + ' B';
      }

      let units = ['kB', 'MB', 'GB', 'TB'];
      let u = -1;

      do {
        size /= threshold;
        ++u;
      } while (Math.abs(size) >= threshold && u < units.length - 1);
      return size.toFixed(1) + ' ' + units[u];
    }

    async function loadMetadata(fileArr: any) {
      await getMetadata(fileArr).then((md: any) => {
        mdArr.push({
          name: md.name,
          contentType: md.contentType,
          fullPath: md.fullPath,
          size: formatFileSize(md.size),
          timeCreated: md.timeCreated,
        });
      });
    }

    this.backBtn.disabled = fileRef.fullPath == 'mkturkfiles' ? true : false;

    if (fileRef.fullPath == 'mkturkfiles/parameterfiles/params_storage') {
      this.mke.storeParamBtn.style.display = 'none';
      this.mke.paramGenBtnBox.style.display = 'none';
      this.mke.svSceneBtn.style.display = 'none';
      this.mke.renderBtn.style.display = 'none';
      this.mke.makeActiveBtn.style.display = 'inline-block';
      this.mke.updateBtn.style.display = 'inline-block';
      this.mke.btnBoxDiv.style.gridTemplateAreas = '"update-btn active-btn"';
    } else if (fileRef.fullPath == 'mkturkfiles/parameterfiles/subjects') {
      this.mke.makeActiveBtn.style.display = 'none';
      this.mke.paramGenBtnBox.style.display = 'none';
      this.mke.svSceneBtn.style.display = 'none';
      this.mke.renderBtn.style.display = 'none';
      this.mke.updateBtn.style.display = 'inline-block';
      this.mke.storeParamBtn.style.display = 'inline-block';
      this.mke.btnBoxDiv.style.gridTemplateAreas ='"update-btn store-param-btn"';
    } else if (fileRef.fullPath == 'mkturkfiles/scenebags/objectome3d/templates') {
      this.mke.makeActiveBtn.style.display = 'none';
      this.mke.storeParamBtn.style.display = 'none';
      this.mke.svSceneBtn.style.display = 'none';
      this.mke.renderBtn.style.display = 'none';
      // this.mke.genBtn.style.display = 'inline-block';
      this.mke.paramGenBtnBox.style.display = 'inline-block';
      this.mke.updateBtn.style.display = 'inline-block';
      this.mke.btnBoxDiv.style.gridTemplateAreas =
        '"param-gen-btn-box update-btn"';
    } else if (fileRef.fullPath == 'mkturkfiles/scenebags/objectome3d/background') {
      this.mke.makeActiveBtn.style.display = 'none';
      this.mke.storeParamBtn.style.display = 'none';
      this.mke.paramGenBtnBox.style.display = 'none';
      this.mke.svSceneBtn.style.display = 'none';
      this.mke.updateBtn.style.display = 'inline-block';
      this.mke.renderBtn.style.display = 'inline-block';
      this.mke.btnBoxDiv.style.gridTemplateAreas = '"update-btn render-btn"';
    } else {
      this.mke.makeActiveBtn.style.display = 'none';
      this.mke.storeParamBtn.style.display = 'none';
      this.mke.renderBtn.style.display = 'none';
      this.mke.paramGenBtnBox.style.display = 'none';
      this.mke.svSceneBtn.style.display = 'none';
      this.mke.updateBtn.style.display = 'inline-block';
      this.mke.btnBoxDiv.style.gridTemplateAreas = '"update-btn update-btn"';
    }

    this.pathName.innerText = fileRef.fullPath;
    let pathArr: string[] = fileRef.fullPath.split('/');
    let mdArr = new Array();
    let fileList = await listAll(fileRef);
    let filePromise: any;

    /* Resolve previous path */
    this.previousPath = '';
    for (let i = 0; i < pathArr.length - 1; i++) {
      this.previousPath += pathArr[i] + '/';
    }

    /* Resolve metadata of all folders */
    fileList.prefixes.forEach((folder) => {
      mdArr.push({
        name: folder.name,
        contentType: 'folder',
        fullPath: folder.fullPath,
        size: 'N/A',
      });
    });

    /* Resolve metadata of all files */
    filePromise = fileList.items.map(loadMetadata);
    await Promise.all(filePromise);

    this.displayStorageTable(mdArr);
  }

  private refreshStorageTable() {
    document.addEventListener('storageFileChanged', (ev: Event) => {
      let folderRef = this.mke.getActiveFile().id as StorageReference;
      this.listStorageFiles(folderRef.parent!);
    });
  }

  private displayStorageTable(metadataArr: any[]) {
    this.finder.destroy();
    this.finder = new Tabulator('#finder', {
      data: metadataArr,
      index: 'name',
      responsiveLayout: true,
      layout: 'fitColumns',
      resizableColumns: true,
      initialSort: [{ column: 'name', dir: 'asc' }],
      columns: [
        {
          title: "<input id='select-all' type='checkbox'/>",
          width: 15,
          headerSort: false,
        },
        { title: 'Name', field: 'name', widthGrow: 3 },
        { title: 'Type', field: 'contentType' },
        { title: 'Path', field: 'fullPath' },
        { title: 'Size', field: 'size' },
      ],
      selectable: true,
      selectableRangeMode: 'click',
      rowDblClick: (ev, row) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (row.getData().contentType === 'folder') {
          console.log('rowDblClick', row.getData().fullPath);
          // this.listStorageFiles(this.storageRef.child(row.getData().fullPath));
          this.listStorageFiles(ref(this.storageRef, row.getData().fullPath));
        }
      },
      rowDblTap: (ev, row) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (row.getData().contentType === 'folder') {
          console.log(row.getData().fullPath);
          // this.listStorageFiles(this.storageRef.child(row.getData().fullPath));
          this.listStorageFiles(ref(this.storageRef, row.getData().fullPath));
        }
      },
      rowClick: async (ev, row) => {
        ev.stopPropagation();
        if (row.getData().contentType === 'folder') {
          console.log('rowClick', row.getData().fullPath);
        } else if (
          row.getData().contentType.includes('text') ||
          row.getData().contentType.includes('json')
        ) {
          this.mkt.destroy();
          this.mki.removeImages();

          this.mke.editorDivElement.style.zIndex = '3';
          this.mki.imgCanvasDiv.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';

          // let fileRef = this.storageRef.child(row.getData().fullPath);
          let fileRef = ref(this.storageRef, row.getData().fullPath);
          this.mke.displayStorageTextFile(fileRef);
        } else if (row.getData().contentType.includes('image')) {
          this.mkt.destroy();
          this.mki.removeImages();

          this.mki.imgCanvasDiv.style.zIndex = '3';
          this.mke.editorDivElement.style.zIndex = '2';
          this.mkt.canvas.style.zIndex = '1';

          // let imgRef = this.storageRef.child(row.getData().fullPath);
          let imgRef = ref(this.storageRef, row.getData().fullPath);
          let imgName = row.getData().name;
          this.mki.displayImage(imgRef, imgName);
        } else if (
          row.getData().contentType === 'application/octet-stream' &&
          row.getData().name.includes('.glb')
        ) {
          this.mkt.destroy();
          this.mki.removeImages();

          this.mkt.canvas.style.zIndex = '3';
          this.mke.editorDivElement.style.zIndex = '2';
          this.mki.imgCanvasDiv.style.zIndex = '1';

          // let meshRef = this.storageRef.child(row.getData().fullPath);
          let meshRef = ref(this.storageRef, row.getData().fullPath);
          this.mkt.displayMesh(meshRef);
        }
      },
      rowSelectionChanged: (data, rows) => {
        this.showImagesBtn.disabled = !this.imageTypeTest(data);
        if (this.imageTypeTest(data)) {
          this.selectedImages = data;
        }
      },

      tableBuilt: () => {
        let selectAllBox = document.querySelector(
          '#select-all'
        ) as HTMLInputElement;
        selectAllBox.addEventListener('change', (ev) => {
          if (selectAllBox.checked == true) {
            this.finder.selectRow();
          } else {
            this.finder.deselectRow();
          }
        });
      },
    });
  }

  public listBigQueryTable(dataArr: any[], dataset: string, agent: string) {
    this.displayBigqueryTable(dataArr);
    this.pathName.innerText = `${dataset}.${agent}`;
  }

  private displayBigqueryTable(dataArr: any[]) {
    this.finder.destroy();
    this.finder = new Tabulator('#finder', {
      data: dataArr,
      index: 'timestamp.value',
      responsiveLayout: true,
      layout: 'fitColumns',
      resizableColumns: true,
      initialSort: [{ column: 'timestamp.value', dir: 'asc' }],
      columns: [
        {
          title: "<input id='select-all' type='checkbox'/>",
          width: 15,
          headerSort: false,
        },
        { title: 'Timestamp', field: 'timestamp.value' },
      ],
      selectable: true,
      selectableRangeMode: 'click',
      rowClick: async (ev, row) => {
        ev.stopPropagation();
        this.mke.displayBigQueryTableRow(row.getData());
      },
      rowTap: (ev, row) => {
        ev.stopPropagation();
        this.mke.displayBigQueryTableRow(row.getData());
      },
      dataLoaded: (data) => {
        console.log('table data', data);
        this.mkc.removeElementsByClassName('axis-options');
        this.mkc.bqPopulateAxisFields(data, 'eyedata');
      },
    });
  }

  /* Mkfinder controls */
  private backBtnAction() {
    this.backBtn.addEventListener('click' || 'pointerup', (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      console.log('[backBtn Pressed]: previousPath:', this.previousPath);
      // this.listStorageFiles(this.storageRef.child(this.previousPath));
      this.listStorageFiles(ref(this.storageRef, this.previousPath));
    });
  }

  private numImgSliderAction() {
    this.numImgSlider.addEventListener('change', (ev: Event) => {
      console.log(this.numImgSlider.value);
      this.mki.imgCanvas.style.gridTemplateColumns =
        'repeat(' + String(this.numImgSlider.value) + ', minmax(0,1fr))';
    });
  }

  private showImagesBtnAction() {
    this.showImagesBtn.addEventListener(
      'click' || 'pointerup',
      async (ev: Event) => {
        this.mkt.destroy();
        this.mki.removeImages();

        this.mki.imgCanvasDiv.style.zIndex = '3';
        this.mke.editorDivElement.style.zIndex = '2';
        this.mkt.canvas.style.zIndex = '1';

        for (let i = 0; i < this.selectedImages.length; i++) {
          // let imgRef = this.storageRef.child(this.selectedImages[i].fullPath);
          let imgRef = ref(this.storageRef, this.selectedImages[i].fullPath);
          let imgName = this.selectedImages[i].name;
          await this.mki.displayImage(imgRef, imgName);
        }
      }
    );
  }

  private imageTypeTest(data: any[]) {
    if (data.length == 0 || data.length == 1) {
      return false;
    } else {
      for (var i = 0; i < data.length; i++) {
        if (!data[i].contentType.includes('image')) {
          return false;
        }
      }
      return true;
    }
  }

  private downloadBtnAction() {
    this.downloadBtn.addEventListener(
      'click' || 'pointerup',
      async (ev: Event) => {
        let row = this.finder.getSelectedRows();
        let qryLoc = document.querySelector(
          '#qry-loc-selector'
        ) as HTMLSelectElement;

        if (
          qryLoc.value == 'mkturkfiles' &&
          !row[0].getData().contentType.includes('folder')
        ) {
          for (let i = 0; i < row.length; i++) {
            getDownloadURL(
              ref(this.storageRef, row[i].getData().fullPath)
            ).then(async (url: string) => {
              let file = await (await fetch(url)).blob();
              FileSaver.saveAs(file, row[i].getData().name);
            });
          }
        } else if (qryLoc.value == 'marmosets') {
          for (let i = 0; i < row.length; i++) {
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, file.name + '.json');
          }
        } else if (qryLoc.value == 'mkdailydata') {
          for (let i = 0; i < row.length; i++) {
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, file.agent + '.json');
          }
        } else if (qryLoc.value == 'mkturkdata') {
          for (let i = 0; i < row.length; i++) {
            let docName =
              row[i].getData().FirestoreDocRoot +
              '_' +
              row[i].getData().Doctype;
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, docName + '.json');
          }
        } else if (qryLoc.value == 'devices') {
          for (let i = 0; i < row.length; i++) {
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, file.docname + '.json');
          }
        } else if (qryLoc.value == 'eyecalibration') {
          for (let i = 0; i < row.length; i++) {
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, file.Docname + '.json');
          }
        } else if (qryLoc.value == 'mkscale') {
          for (let i = 0; i < row.length; i++) {
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, file.Docname + '.json');
          }
        } else if (qryLoc.value == 'objects') {
          for (let i = 0; i < row.length; i++) {
            let file = row[i].getData();
            let blob = new Blob([JSON.stringify(file, null, 1)], {
              type: 'application/json; charset=utf-8',
            });
            FileSaver.saveAs(blob, file.docname + '.json');
          }
        }
      }
    );
  }
}
