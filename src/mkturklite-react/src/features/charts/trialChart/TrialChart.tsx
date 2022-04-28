import React, { useState } from 'react';
import 'chartjs-adapter-date-fns';

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
  Filler,
  TimeScale,
  TimeSeriesScale,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { selectCurrentData } from '../../data/dataSlice';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
  TimeSeriesScale
);

interface IDictionary {
  [index: string]: any;
}

export const TrialChart = () => {
  const currentData: IDictionary = useAppSelector(selectCurrentData);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  } as ChartData<'line', number[], unknown>);

  const chartOptions: ChartOptions<'line'> = {
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      yAxes: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Trial Count',
        },
      },
      xAxes: {
        type: 'time',
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

      // const smallAvgData: number[] = []; // 5 trials average
      const bigAvgData: number[] = []; // 100 trials average
      const labels = currentData['EndTime'].map((time: number) => {
        const currentDateInMs = new Date(currentData['CurrentDate']).getTime();
        return new Date(time + currentDateInMs);
      });

      const smallAvgData = currentData['EndTime'].map((time: number) => {
        return 1;
      });

      // for (let i = 0; i < correctData.length; i++) {
      //   labels.push(new Date(currentData[]))

      // }

      setChartData({
        labels: labels,
        datasets: [
          {
            data: smallAvgData,
            label: 'current average',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointRadius: 0,
            fill: true,
          },
          {
            data: bigAvgData,
            label: '100 trials average',
            backgroundColor: '#6610f2',
            borderColor: '#6610f2',
            pointRadius: 0,
            fill: true,
          },
        ],
      });
    }
  }, [currentData]);

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
