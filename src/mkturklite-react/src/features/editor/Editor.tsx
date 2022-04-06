import React, { useState } from 'react';
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import './jsoneditor.css';
// import './img/jsoneditor-icons.svg';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

export const Editor = () => {
  // const mode: JSONEditorMode = 'tree';
  const elRef = React.useRef<HTMLDivElement | null>(null);
  const editorRef = React.useRef<JSONEditor | null>(null);

  const unmountEditor = () => {
    editorRef.current?.destroy();
  };

  React.useEffect(() => {
    const container = elRef.current;

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
