import React, { useState } from 'react';

import { useAppSelector } from '../../../app/hooks';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { selectCurrentData } from '../../data/dataSlice';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IDictionary {
  [index: string]: any;
}

export const PerformanceChart = () => {
  const currentData: IDictionary = useAppSelector(selectCurrentData);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  } as ChartData<'line', number[], unknown>);

  const chartOptions: ChartOptions<'line'> = {
    scales: {
      yAxes: {
        beginAtZero: true,
        title: {
          display: true,
          text: '% correct',
        },
      },
      xAxes: {
        title: {
          display: true,
          text: 'trial #',
        },
      },
    },
  };

  React.useEffect(() => {
    if (Object.keys(currentData).length > 0) {
      const correctData: number[] = currentData['Response'].map(
        (response: number, idx: number) => {
          if (response == currentData['CorrectItem'][idx]) {
            return 1;
          } else {
            return 0;
          }
        }
      );

      console.log('correctData:', correctData);

      const smallAvgData: number[] = []; // 5 trials average
      const bigAvgData: number[] = []; // 100 trials average
      const labels: string[] = []; // trial number

      for (let i = 0; i < correctData.length; i++) {
        labels.push(i.toString());
        if (i < 5) {
          const smallAvg =
            correctData
              .slice(0, i + 1)
              .reduce((a: number, b: number) => a + b) /
            (i + 1);
          smallAvgData.push(smallAvg * 100);
        } else {
          const smallAvg =
            correctData
              .slice(i - 4, i + 1)
              .reduce((a: number, b: number) => a + b) / 5;
          smallAvgData.push(smallAvg * 100);
        }

        if (i < 100) {
          const bigAvg =
            correctData
              .slice(0, i + 1)
              .reduce((a: number, b: number) => a + b) /
            (i + 1);
          bigAvgData.push(bigAvg * 100);
        } else {
          const bigAvg =
            correctData
              .slice(i - 99, i + 1)
              .reduce((a: number, b: number) => a + b) / 100;
          bigAvgData.push(bigAvg * 100);
        }
      }

      setChartData({
        labels: labels,
        datasets: [
          {
            data: smallAvgData,
            label: 'current average',
            backgroundColor: '#0d6efd',
            borderColor: '#0d6efd',
            pointRadius: 0,
          },
          {
            data: bigAvgData,
            label: '100 trials average',
            backgroundColor: '#6610f2',
            borderColor: '#6610f2',
            pointRadius: 0,
          },
        ],
      });
    }
  }, [currentData]);

  return <Line data={chartData} options={chartOptions} />;
};
