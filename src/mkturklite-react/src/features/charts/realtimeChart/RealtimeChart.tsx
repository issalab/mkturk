import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentData } from '../../data/dataSlice';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  off,
  remove,
} from 'firebase/database';

const rtdb = getDatabase();

interface IDictionary {
  [index: string]: any;
}

export const RealtimeChart = () => {
  const currentData: IDictionary = useAppSelector(selectCurrentData);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [buttonString, setButtonString] = useState({
    current: 'Request Realtime Data',
    next: 'Cancel Realtime Data',
    on: false,
  });

  const [realtimeData, setRealtimeData] = useState({
    boundingBoxes: [],
    meta: null,
    timestamp: '',
    x: null,
    y: null,
  });

  const [streamState, setStreamState] = useState({
    active: false,
    agent: '',
    currentDate: '',
  });

  const [agentClientRef, setAgentClientRef] = useState(ref(rtdb));

  const handleClick = () => {
    const tmp = buttonString.current;
    setButtonString({
      current: buttonString.next,
      next: tmp,
      on: !buttonString.on,
    });

    if (currentData !== undefined) {
      if (streamState.active) {
        off(ref(rtdb, 'data/' + currentData['Agent']), 'value');
        remove(agentClientRef)
          .then((val) => {
            console.log('VAL removed:', val);
          })
          .catch((err) => {
            console.error('VAL Error:', err);
          });
        setStreamState({
          active: false,
          agent: '',
          currentDate: '',
        });
      } else {
        const agentClientKey = push(
          ref(rtdb, 'agents/' + currentData['Agent'])
        ).key;

        setAgentClientRef(
          ref(rtdb, 'agents/' + currentData['Agent'] + '/' + agentClientKey)
        );

        if (agentClientKey != null) {
          update(ref(rtdb, 'agents/' + currentData['Agent']), {
            [agentClientKey]: true,
          });
        }

        onValue(ref(rtdb, 'data/' + currentData['Agent']), (snapshot) => {
          const data = snapshot.val();

          setRealtimeData({
            boundingBoxes: data.boundingBoxes,
            meta: data.meta,
            timestamp: data.timestamp,
            x: data.x,
            y: data.y,
          });
        });

        setStreamState({
          active: true,
          agent: currentData['Agent'],
          currentDate: currentData['CurrentDate'],
        });
      }
    }
  };

  React.useEffect(() => {
    if (streamState.active && buttonString.on) {
    }

    if (buttonString.on) {
      const canvas = canvasRef.current;
      if (
        canvas &&
        currentData !== undefined &&
        Object.keys(currentData).length > 0
      ) {
        canvas.style.display = 'block';
        console.log('SCREAMM', currentData);
        canvas.width = currentData['workspace'][2] * currentData['CanvasRatio'];
        canvas.height =
          currentData['ViewportPixels'][1] - currentData['offsettop'];
      }
    } else {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.display = 'none';
      }
    }
  }, [currentData, buttonString.on, streamState]);

  return (
    <div>
      <Row>
        <Button variant="outline-secondary" onClick={handleClick}>
          {buttonString.current}
        </Button>
      </Row>
      <Row>
        <canvas ref={canvasRef}></canvas>
      </Row>
    </div>
  );
};
