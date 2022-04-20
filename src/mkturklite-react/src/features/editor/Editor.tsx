import React, { useCallback, useState } from 'react';
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import './jsoneditor.css';
// import './dataWorker';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectCurrentData,
  selectEntry,
  listDataFilesAsync,
  loadDatafileAsync,
  selectFileList,
} from '../data/dataSlice';
import { useGetDatafileQuery } from '../../services/firebaseApi';

const dataWorker: Worker = new Worker(
  new URL('dataWorker.ts', import.meta.url),
  { type: 'module' }
);

// const dataWorker: Worker = new Worker('./dataWorker.ts');

export const Editor = () => {
  console.log('Editor');
  // const mode: JSONEditorMode = 'tree';
  const elRef = React.useRef<HTMLDivElement | null>(null);
  const editorRef = React.useRef<JSONEditor | null>(null);
  const dispatch = useAppDispatch();
  const entry = useAppSelector(selectEntry);
  const datafileList = useAppSelector(selectFileList);
  const curData = useAppSelector(selectCurrentData);
  const datafile = useGetDatafileQuery({ fullPath: '', name: '' });
  console.log('editor::datafile', datafile);
  // const eentry = {
  //   fullPath: '/mkturkfiles/datafiles/Eliaso/2022-04-19T21:13:28_Eliaso.json',
  //   name: '2022-04-19T21:13:28_Eliaso.json',
  // };
  // const metadata = useGetMetadataGenerationQuery(eentry, {
  //   pollingInterval: 1000,
  // });
  // console.log(metadata);
  // const worker = new Worker(new URL('./path/to/worker', import.meta.url));
  // const dataWorker: Worker = new Worker(
  //   new URL('./dataWorker.ts', import.meta.url),
  //   { type: 'module' }
  // );
  // const [curData, setCurData] = useState({});

  const unmountEditor = () => {
    console.log('unmountEditor::editorRef:', editorRef);
    editorRef.current?.destroy();
  };

  React.useEffect(() => {
    console.log('React.useEffect()');
    console.log('DATAFILE:', datafile);
    const container = elRef.current;
    if (container && editorRef) {
      if (editorRef.current === null) {
        console.log('editorRef.current == null');
        dispatch(listDataFilesAsync(entry))
          .unwrap()
          .then((list) => {
            dispatch(loadDatafileAsync(list[0]));
            dataWorker.postMessage(list[0]);
          });
        const jsonEditor = new JSONEditor(container, { mode: 'tree' }, {});
        editorRef.current = jsonEditor;
      } else if (editorRef.current !== null) {
        if (curData !== undefined) {
          editorRef.current.update(curData);
        }
      }
    }

    // return unmountEditor;
  });

  // [curData, dispatch, entry, metadata.data]

  return <div id='jsoneditor' ref={elRef}></div>;
};
