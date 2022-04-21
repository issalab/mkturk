import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectEntry,
  setCurrentDatafile,
  setDatafileList,
} from '../data/dataSlice';

import { useGetDatafilesListQuery } from '../../services/firebaseApi';

export function Counter() {
  const dispatch = useAppDispatch();
  const entry = useAppSelector(selectEntry);
  const datafilesListResult = useGetDatafilesListQuery(entry);

  React.useEffect(() => {
    if (
      datafilesListResult.data?.length !== undefined &&
      datafilesListResult.data?.length > 0
    ) {
      const datafileEntry = {
        fullPath: datafilesListResult.data?.[0].fullPath,
        name: datafilesListResult.data?.[0].name,
        data: {},
      };
      dispatch(setCurrentDatafile(datafileEntry));
      dispatch(setDatafileList(datafilesListResult.data));
    }
  }, [datafilesListResult.data, dispatch]);

  return (
    <Form.Select
      onChange={(e) => {
        const selectedEntry = {
          name: e.target.value.split('/').splice(-1)[0],
          fullPath: e.target.value,
          data: {},
        };
        dispatch(setCurrentDatafile(selectedEntry));
      }}
    >
      {datafilesListResult.data?.map((datafileEntry) => {
        return (
          <option key={datafileEntry.name} value={datafileEntry.fullPath}>
            {datafileEntry.name}
          </option>
        );
      })}
    </Form.Select>
  );
}
