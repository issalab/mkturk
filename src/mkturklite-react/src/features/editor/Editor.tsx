import React, { useCallback, useState } from 'react';
import JSONEditor, { JSONEditorMode, JSONEditorOptions } from 'jsoneditor';
import './jsoneditor.css';
// import './dataWorker';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectCurrentDatafile,
  selectCurrentMetadataGeneration,
  setCurrentData,
  setCurrentDatafileGeneration,
} from '../data/dataSlice';
import {
  useGetDatafileQuery,
  useGetMetadataGenerationQuery,
} from '../../services/firebaseApi';

// const dataWorker: Worker = new Worker(
//   new URL('dataWorker.ts', import.meta.url),
//   { type: 'module' }
// );

// const dataWorker: Worker = new Worker('./dataWorker.ts');

export const Editor = () => {
  console.log('Editor');
  const elRef = React.useRef<HTMLDivElement | null>(null);
  const editorRef = React.useRef<JSONEditor | null>(null);
  const dispatch = useAppDispatch();
  const currentDatafileEntry = useAppSelector(selectCurrentDatafile);
  const currentMetadataGeneration = useAppSelector(
    selectCurrentMetadataGeneration
  );
  const metadataGenerationResult = useGetMetadataGenerationQuery(
    currentDatafileEntry,
    {
      pollingInterval: 5000,
    }
  );

  const dataResult = useGetDatafileQuery(currentDatafileEntry, {
    refetchOnMountOrArgChange: true,
  });

  console.log('dataResult:', dataResult);

  const unmountEditor = () => {
    console.log('unmountEditor::editorRef:', editorRef);
    editorRef.current?.destroy();
  };

  React.useEffect(() => {
    console.log('React.useEffect()');
    const container = elRef.current;
    if (container && editorRef) {
      if (editorRef.current === null) {
        // console.log('editorRef.current == null');
        const jsonEditor = new JSONEditor(container, { mode: 'tree' });
        editorRef.current = jsonEditor;
      } else if (editorRef.current !== null) {
        if (
          dataResult.data !== undefined &&
          metadataGenerationResult.data != currentMetadataGeneration
        ) {
          console.log('new data loaded i think:', Date.now());
          dispatch(setCurrentDatafileGeneration(metadataGenerationResult.data));
          dispatch(setCurrentData(dataResult.data));
          editorRef.current.set(dataResult.data);
          metadataGenerationResult.refetch();
          dataResult.refetch();
        }
      }
    }

    // return unmountEditor;
  });

  // [curData, dispatch, entry, metadata.data]

  return <div id="jsoneditor" ref={elRef}></div>;
};
