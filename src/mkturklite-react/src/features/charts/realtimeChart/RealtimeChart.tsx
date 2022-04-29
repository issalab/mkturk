import React, { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentData } from '../../data/dataSlice';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

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

  const handleClick = () => {
    const tmp = buttonString.current;
    setButtonString({
      current: buttonString.next,
      next: tmp,
      on: !buttonString.on,
    });
  };

  const handleRealtimeData = () => {};

  React.useEffect(() => {
    if (buttonString.on) {
      const canvas = canvasRef.current;
      if (
        canvas &&
        currentData !== undefined &&
        Object.keys(currentData).length > 0
      ) {
        console.log('SCREAMM', currentData);
        canvas.width = currentData['workspace'][2] * currentData['CanvasRatio'];
        canvas.height =
          currentData['ViewportPixels'][1] - currentData['offsettop'];
      }
    }
  }, [currentData, buttonString.on]);

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
