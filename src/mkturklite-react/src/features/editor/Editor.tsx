import React, { useState } from 'react';
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import './jsoneditor.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCurrentData } from '../data/dataSlice';

export const Editor = () => {
  // const mode: JSONEditorMode = 'tree';
  const elRef = React.useRef<HTMLDivElement | null>(null);
  const editorRef = React.useRef<JSONEditor | null>(null);
  const curData = useAppSelector(selectCurrentData);
  // const [curData, setCurData] = useState({});

  const unmountEditor = () => {
    console.log('unmountEditor::editorRef:', editorRef);
    editorRef.current?.destroy();
  };

  React.useEffect(() => {
    console.log(curData);
    console.log('editor');
    const container = elRef.current;
    if (container && editorRef) {
      if (editorRef.current === null) {
        console.log('editorRef.current == null');
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
