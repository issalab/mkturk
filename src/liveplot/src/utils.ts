import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const storage = firebase.storage();
const storageRef = storage.ref();

export class Utils {
  constructor() {}

  public async getFileList(path: string, ext?: string) {
    let fileList = await storageRef.child(path).listAll();
    /* only keep files within the last 2 years*/
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let files: any = [];

    for (let item of fileList.prefixes) {
      let subFileList = (
        await this.getFileList(path + item.name + '/', ext)
      );
      files = [...files, ...subFileList];
    }

    for (let i = 0; i < fileList.items.length; i++) {
      if (typeof(ext) == 'string') {
        if (fileList.items[i].name.endsWith(ext)) { // if file extension is correct
          files.push({
            fullpath: fileList.items[i].fullPath,
            name: fileList.items[i].name
          });
        }
      } else{
          let year_file = parseInt(fileList.items[i].name.slice(0, 4));
          let month_file = parseInt(fileList.items[i].name.slice(6,7));
          if ( (year_file*12 + month_file) >= (year*12 + month - 6) ) {
            files.push({
              fullpath: fileList.items[i].fullPath,
              name: fileList.items[i].name
            });
          }//ELSE IF within last 6 months
      }//ELSE
    }//FOR i fileList.items

    return files;
  }

  public async getStorageFile(path: string) {
    let fileRef = storageRef.child(path);
    // console.log('fileRef:', fileRef);
    let file = await storageRef.child(path).getDownloadURL().then(async (url: string) => {
      let response = await fetch(url);
      return response.json();
    }).catch(e => {
      console.error('Error Getting URL:', e);
    });
    // console.log('file:', file);
    return file;
  }

  public async getStorageFileMetadata(path: string) {
    let fileRef = storageRef.child(path);
    let metadata = await fileRef.getMetadata();
    return metadata;
  }

  public smooth(data: any[], n: number) {
    let smoothedData = [];
    for (let i = 0; i < data.length; i++) {
      if (i < n - 1) {
        let tmp = data.slice(0, i + 1);
        smoothedData[i] = tmp.reduce((a: any, b: any) => {
          return a + b;
        });
        smoothedData[i] /= (i + 1);
      } else {
        let tmp = data.slice(i - n + 1, i + 1);
        smoothedData[i] = tmp.reduce((a: number, b: number) => {
          return a + b;
        });
        smoothedData[i] /= n;
      }
    }
    return smoothedData;
  }

  public calcDistance(a: number, b: number) {
    return Math.pow(Math.abs(a - b), 2);
  }
}