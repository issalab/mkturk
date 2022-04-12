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
import {
  selectEntry,
  listDataFilesAsync,
  loadDatafileAsync,
  selectCurrentDatafile,
  selectFileList,
} from '../data/dataSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const entry = useAppSelector(selectEntry);
  // const currentDatafileEntry = useAppSelector(selectCurrentDatafile);
  const datafileList = useAppSelector(selectFileList);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  const selectorRef = React.useRef<HTMLSelectElement | null>(null);

  // React.useEffect(() => {
  //   const selectorContainer = selectorRef.current;
  //   if (selectorContainer) {
  //     if (datafileList !== undefined) {
  //       datafileList.forEach((entry) => {
  //         const opt = React.useRef<HTMLOptionElement | null>(null);
  //         selectorRef.current.add()
  //       })
  //     }
  //   }
  // })

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
        <button
          className={styles.button}
          // onClick={() => {
          //   dispatch(listDataFilesAsync(entry))
          //     .unwrap()
          //     .then((list) => {
          //       dispatch(loadDatafileAsync(list[0]));
          //     });
          // }}
        >
          Load Files
        </button>
        <select
          name="file-list"
          id="file-list"
          onChange={(e) => {
            dispatch(
              loadDatafileAsync({
                name: e.target.value.split('/').slice(-1)[0],
                fullPath: e.target.value,
              })
            );
          }}
        >
          {datafileList?.map((datafileEntry) => {
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
