import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentData } from '../../data/dataSlice';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { getDatabase, ref, onValue, push, update } from 'firebase/database';

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
    boundingBoxes: {},
    meta: null,
    timestamp: '',
    x: null,
    y: null,
  });

  const [streamState, setStreamState] = useState({
    active: false,
    agent: '',
    currentDate: '',
    agentClientRef: ref(rtdb),
  });

  const handleClick = () => {
    const tmp = buttonString.current;
    setButtonString({
      current: buttonString.next,
      next: tmp,
      on: !buttonString.on,
    });
  };

  // const handleRealtimeData = () => {};
  const tmpRef = ref(rtdb, 'data/' + streamState.agent);
  onValue(tmpRef, (snapshot) => {
    const data = snapshot.val();
    console.log('VAL DATA', data);
    return data;
  });

  React.useEffect(() => {
    // Request realtime data & setup canvas
    if (!streamState.active && buttonString.on) {
      if (currentData !== undefined) {
        const agentClientKey = push(
          ref(rtdb, 'agents/' + currentData.agent)
        ).key;

        setStreamState({
          agentClientRef: ref(
            rtdb,
            'agent/' + currentData.agent + '/' + agentClientKey
          ),
        });
        const agentClientRef = ref(
          rtdb,
          'agent/' + currentData.agent + '/' + agentClientKey
        );
        if (agentClientKey != null) {
          update();
        }
      }
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
  }, [currentData, buttonString.on, val]);

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
