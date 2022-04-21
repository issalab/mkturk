import React, { useState } from 'react';

import { useAppSelector } from '../../../app/hooks';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { selectCurrentData } from '../../data/dataSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IDictionary {
  [index: string]: any;
}

export const ChoiceChart = () => {
  const currentData: IDictionary = useAppSelector(selectCurrentData);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  } as ChartData<'bar', number[], unknown>);

  const chartOptions: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: 'count',
        },
      },
      xAxes: {
        title: {
          display: true,
          text: 'reward units',
        },
      },
    },
  };

  React.useEffect(() => {
    if (Object.keys(currentData).length > 0) {
      const labels: string[] = [];
      const data: number[] = [];

      if (currentData['RewardStage'] !== 0) {
      }

      for (let i = 0; i <= currentData['NRewardMax']; i++) {
        labels.push(i.toString());
        data.push(0);
      }

      currentData['NReward'].forEach((amount: number) => {
        data[amount]++;
      });

      setChartData({
        labels: labels,
        datasets: [{ data: data, label: 'Reward' }],
      });
      console.log('RewardChart::currentData', currentData);
    }
  }, [currentData]);

  // React.useEffect(() => {
  //   if (currentData !== undefined) {
  //     console.log('currentData:', currentData);
  //   }
  // });

  return <Bar data={chartData} options={chartOptions} />;
};
