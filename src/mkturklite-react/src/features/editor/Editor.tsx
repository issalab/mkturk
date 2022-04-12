import React, { useCallback, useState } from 'react';
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import './jsoneditor.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectCurrentData,
  selectEntry,
  listDataFilesAsync,
  loadDatafileAsync,
  selectFileList,
} from '../data/dataSlice';

import { mkturkliteApp } from '../data/dataAPI';

const dataWorker: Worker = new Worker(
  new URL('./dataWorker.ts', import.meta.url),
  { type: 'module' }
);

export const Editor = () => {
  // const mode: JSONEditorMode = 'tree';
  const elRef = React.useRef<HTMLDivElement | null>(null);
  const editorRef = React.useRef<JSONEditor | null>(null);
  const dispatch = useAppDispatch();
  const entry = useAppSelector(selectEntry);
  const datafileList = useAppSelector(selectFileList);
  const curData = useAppSelector(selectCurrentData);
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
        console.log('stuff in editor:', editorRef.current.get());
        if (curData !== undefined) {
          editorRef.current.update(curData);
        }
      }
    }

    // return unmountEditor;
  });

  return <div id="jsoneditor" ref={elRef}></div>;
};
