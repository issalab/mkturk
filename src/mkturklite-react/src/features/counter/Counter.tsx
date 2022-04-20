import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { selectEntry, setCurrentDatafile } from '../data/dataSlice';

import { useGetDatafilesListQuery } from '../../services/firebaseApi';

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const entry = useAppSelector(selectEntry);
  const datafilesListResult = useGetDatafilesListQuery(entry);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  // const selectorRef = React.useRef<HTMLSelectElement | null>(null);

  React.useEffect(() => {
    const datafileEntry = {
      fullPath: datafilesListResult.data?.[0].fullPath,
      name: datafilesListResult.data?.[0].name,
      data: {},
    };

    dispatch(setCurrentDatafile(datafileEntry));
  });

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button className={styles.button}>Load Files</button>
        <select
          name="file-list"
          id="file-list"
          onChange={(e) => {
            const selectedEntry = {
              name: e.target.value.split('/').slice(-1)[0],
              fullPath: e.target.value,
              data: {},
            };
            dispatch(setCurrentDatafile(selectedEntry));
            console.log(selectedEntry);
          }}
        >
          {datafilesListResult.data?.map((datafileEntry) => {
            return (
              <option key={datafileEntry.name} value={datafileEntry.fullPath}>
                {datafileEntry.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
