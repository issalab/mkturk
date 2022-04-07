import React, { useState } from 'react';
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import './jsoneditor.css';
import { getDownloadURL, ref, getStorage } from 'firebase/storage';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCurrentDatafile } from '../data/dataSlice';

const storage = getStorage();

export const Editor = () => {
  // const mode: JSONEditorMode = 'tree';
  const elRef = React.useRef<HTMLDivElement | null>(null);
  const editorRef = React.useRef<JSONEditor | null>(null);
  const currentDatafile = useAppSelector(selectCurrentDatafile);

  const unmountEditor = () => {
    editorRef.current?.destroy();
  };

  React.useEffect(() => {
    const container = elRef.current;
    console.log(currentDatafile);
    const currentDatafileRef = ref(storage, currentDatafile.fullPath);
    console.log(editorRef);
    // getDownloadURL(currentDatafileRef).then((url) => {});

    if (container) {
      const data = {
        hi: 'hello',
      };
      const jsonEditor = new JSONEditor(container, {}, data);
      editorRef.current = jsonEditor;
    }

    return unmountEditor;
  });

  return <div id="jsoneditor" ref={elRef}></div>;
};
