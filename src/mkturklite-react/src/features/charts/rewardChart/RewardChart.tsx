import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { selectCurrentData, selectCurrentDatafile } from '../../data/dataSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ['0', '1'];
// export const rewardChartData = { labels, datasets: [{ label: 'Dataset1', data: [0, 1] }] };

interface IDictionary {
  [index: string]: any;
}

export const RewardChart = () => {
  const currentData: IDictionary = useAppSelector(selectCurrentData);
  const labels: string[] = [];
  const dataset = [];
  const rewardChartData = { labels, datasets: dataset };
  React.useEffect(() => {
    if (Object.keys(currentData).length > 0) {
      for (let i = 0; i <= currentData['NRewardMax']; i++) {
        labels.push(i.toString());
        dataset.data.push(0);
      }

      currentData['NReward'].forEach((amount: number) => {});
    }
  }, [currentData]);

  // React.useEffect(() => {
  //   if (currentData !== undefined) {
  //     console.log('currentData:', currentData);
  //   }
  // });

  return <Bar data={rewardChartData} />;
};
