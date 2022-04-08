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
  const curDatafileEntry = useAppSelector(selectCurrentDatafile);

  const unmountEditor = () => {
    console.log('unmountEditor::editorRef:', editorRef);
    editorRef.current?.destroy();
  };

  React.useEffect(() => {
    console.log('editor');
    const container = elRef.current;
    if (container && editorRef) {
      if (editorRef.current === null) {
        console.log('editorRef.current == null');
        const jsonEditor = new JSONEditor(container, {}, {});
        editorRef.current = jsonEditor;
      } else if (editorRef.current !== null) {
        const currentDatafileRef = ref(storage, curDatafileEntry.fullPath);
        getDownloadURL(currentDatafileRef)
          .then(async (url: string) => {
            const response = await fetch(url);
            if (editorRef.current !== null) {
              const responseJson = await response.json();
              console.log('response.json:', responseJson);
              editorRef.current.set(responseJson);
            }
          })
          .catch((e: Error) => {
            console.error('Error getting download URL:', e);
          });
      }
    }

    // return unmountEditor;
  });

  return <div id='jsoneditor' ref={elRef}></div>;
};
