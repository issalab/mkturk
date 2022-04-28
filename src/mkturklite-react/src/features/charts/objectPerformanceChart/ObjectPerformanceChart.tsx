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

export const ObjectPerformanceChart = () => {
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
          text: 'performance (%)',
        },
      },
    },
  };

  React.useEffect(() => {
    if (Object.keys(currentData).length > 0) {
      const labels: string[] = [];
      const data: number[] = [];

      if (currentData['RewardStage'] > 0) {
        // SameDifferent
        if (currentData['SameDifferent'] > 0) {
        } else {
          // SR2
          if (
            currentData['ObjectGridIndex'] !== undefined &&
            currentData['ObjectGridIndex'].length > 0
          ) {
            for (let i = 0; i < currentData['SampleObjects'].length; i++) {
              labels.push(currentData['SampleObjects'][i]);
              let correctCount = 0;
              let totalCount = 0;
              for (let j = 0; j < currentData['Sample'][0].length; j++) {
                if (
                  currentData['SampleBagIdx'][currentData['Sample'][0][j]] == i
                ) {
                  totalCount++;
                  if (
                    currentData['Response'][j] == currentData['CorrectItem'][j]
                  ) {
                    correctCount++;
                  }
                }
              }
              data.push((correctCount / totalCount) * 100);
            }
          }
        }
      } else {
        // fountain task
      }
      setChartData({
        labels: labels,
        datasets: [{ data: data, backgroundColor: 'rgba(54, 162, 235, 0.2)' }],
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
