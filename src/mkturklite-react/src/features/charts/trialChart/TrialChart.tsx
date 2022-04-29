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

      const labels = currentData['EndTime'].map((time: number) => {
        const currentDateInMs = new Date(currentData['CurrentDate']).getTime();
        return new Date(time + currentDateInMs);
      });

      const trialCountList: number[] = []; // trial count at every trial
      const correctResponseCountList: number[] = []; // correct response count at every trial

      for (let i = 0; i < currentData['Response'].length; i++) {
        const trialCount = i + 1;
        trialCountList.push(trialCount);

        const correctResponseCount = correctData
          .slice(0, i + 1)
          .reduce((prev, cur) => prev + cur, 0);
        correctResponseCountList.push(correctResponseCount);
      }

      setChartData({
        labels: labels,
        datasets: [
          {
            data: trialCountList,
            label: 'Trial',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointRadius: 1,
            fill: true,
          },
          {
            data: correctResponseCountList,
            label: 'Performance',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgb(153, 102, 255)',
            pointRadius: 1,
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
