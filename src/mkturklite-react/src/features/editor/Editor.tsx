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
      pollingInterval: 1000,
      refetchOnMountOrArgChange: true,
    }
  );

  // const dataResult = useGetDatafileQuery(currentDatafileEntry, {
  //   refetchOnMountOrArgChange: true,
  // });
  console.log(
    metadataGenerationResult.data,
    currentMetadataGeneration,
    metadataGenerationResult.data == currentMetadataGeneration
  );

  const dataResult = useGetDatafileQuery(currentDatafileEntry, {
    refetchOnMountOrArgChange: true,
  });

  console.log('metadataGenerationResult:', metadataGenerationResult);
  console.log('dataResult:', dataResult);
  // console.log('dataResult:', data, 'requestId:', requestId);

  // const unmountEditor = () => {
  //   console.log('unmountEditor::editorRef:', editorRef);
  //   editorRef.current?.destroy();
  // };

  React.useEffect(() => {
    const container = elRef.current;
    if (container && editorRef) {
      if (editorRef.current === null) {
        const jsonEditor = new JSONEditor(container, { mode: 'tree' });
        editorRef.current = jsonEditor;
        console.log('jsoneditor GET', jsonEditor.get());
      } else if (editorRef.current !== null) {
        if (
          !dataResult.isError &&
          !dataResult.isFetching &&
          !dataResult.isLoading &&
          dataResult.isSuccess &&
          !metadataGenerationResult.isError &&
          !metadataGenerationResult.isFetching &&
          !metadataGenerationResult.isLoading &&
          metadataGenerationResult.isSuccess
        ) {
          if (metadataGenerationResult.data !== currentMetadataGeneration) {
            console.log('DISPATCH');
            dispatch(
              setCurrentDatafileGeneration(metadataGenerationResult.data)
            );
            dispatch(setCurrentData(dataResult.data));
            if (Object.keys(editorRef.current.get()).length === 0) {
              editorRef.current.set(dataResult.data);
            } else {
              editorRef.current.update(dataResult.data);
            }
            metadataGenerationResult.refetch();
            dataResult.refetch();
          }
        }

        if (dataResult.isError) {
          dataResult.refetch();
        }
      }
    }

    // return unmountEditor;
  });

  // [curData, dispatch, entry, metadata.data]

  return <div id="jsoneditor" ref={elRef}></div>;
};
