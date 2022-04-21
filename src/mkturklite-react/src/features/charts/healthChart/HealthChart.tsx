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

import { Scatter } from 'react-chartjs-2';
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

export const HealthChart = () => {
  const currentData: IDictionary = useAppSelector(selectCurrentData);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  } as ChartData<'scatter', number[], unknown>);

  const chartOptions: ChartOptions<'scatter'> = {
    scales: {
      yAxes: {
        title: {
          display: true,
          text: 'time (ms)',
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
      const labels: string[] = [];

      if (currentData['RewardStage'] > 0) {
        const lastIdx =
          Object.keys(currentData['TSequenceActualClip']).length - 1;
        const dtData = [];
        const dt2Data = [];
        const sampleCmdIntervalData = [];
        const sampleCmdOffIntervalData = [];
        const eyeTrackerSampleIntervalData = [];

        for (
          let i = 0;
          i < currentData['TSequenceActualClip'][lastIdx].length;
          i++
        ) {
          let dt: number;
          let dt2: number;
          let sampleCmdInterval: number;
          let sampleCmdOffInterval: number;
          let eyeTrackerSampleInterval: number;

          try {
            if (currentData['TSequenceActualClip'][lastIdx][i] < 0) {
              dt = NaN;
            } else {
              dt =
                currentData['TSequenceActualClip'][lastIdx][i] -
                currentData['TSequenceDesiredClip'][lastIdx][i];
              dt = Math.abs(Math.round(dt));
            }
          } catch {
            dt = NaN;
          }

          try {
            if (currentData['TSequenceActualClip'][1][i] < 0) {
              dt2 = NaN;
            } else {
              dt2 =
                currentData['TSequenceActualClip'][1][i] -
                currentData['TSequenceDesiredClip'][1][i];
              dt2 = Math.abs(Math.round(dt2));
            }
          } catch {
            dt2 = NaN;
          }

          try {
            if (
              currentData['SampleCommandReturnTime'][i] == null ||
              currentData['SampleCommandReturnTime'][i] < 0 ||
              currentData['SampleCommandReturnTime'][i] === undefined
            ) {
              sampleCmdInterval = NaN;
            } else {
              sampleCmdInterval =
                currentData['SampleCommandReturnTime'][i] -
                currentData['SampleStartTime'][i];
            }
          } catch {
            sampleCmdInterval = NaN;
          }

          try {
            if (
              currentData['SampleCommandOffReturnTime'][i] == null ||
              currentData['SampleCommandOffReturnTime'][i] < 0 ||
              currentData['SampleCommandOffReturnTime'][i] === undefined
            ) {
              sampleCmdOffInterval = NaN;
            } else {
              sampleCmdOffInterval =
                currentData['SampleCommandOffReturnTime'][i] -
                currentData['EndTime'][i];
            }
          } catch {
            sampleCmdOffInterval = NaN;
          }

          try {
            eyeTrackerSampleInterval =
              currentData['EyetrackerSampleInterval'][i];
          } catch {
            eyeTrackerSampleInterval = NaN;
          }

          labels.push(i.toString());
          dtData.push(dt);
          dt2Data.push(dt2);
          sampleCmdIntervalData.push(sampleCmdInterval);
          sampleCmdOffIntervalData.push(sampleCmdOffInterval);
          eyeTrackerSampleIntervalData.push(eyeTrackerSampleInterval);
        }

        setChartData({
          labels: labels,
          datasets: [
            {
              data: dtData,
              label: 'tdisplay_last',
              backgroundColor: '#0d6efd',
            },
            {
              data: dt2Data,
              label: 'tdisplay_first',
              backgroundColor: '#6610f2',
            },
            {
              data: sampleCmdIntervalData,
              label: 'sample command',
              backgroundColor: '#6f42c1',
            },
            {
              data: sampleCmdOffIntervalData,
              label: 'sample command off',
              backgroundColor: '#d63384',
            },
            {
              data: eyeTrackerSampleIntervalData,
              label: 'eye interval',
              backgroundColor: '#dc3545',
            },
          ],
        });
      }
    }
  }, [currentData]);

  return <Scatter data={chartData} options={chartOptions} />;
};
