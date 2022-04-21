import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { RewardChart } from './rewardChart/RewardChart';
import { HealthChart } from './healthChart/HealthChart';
import { PerformanceChart } from './performanceChart/PerformanceChart';

export function Charts() {
  return (
    <Row className="p-3">
      <Card className="mb-3 p-0">
        <Card.Header>Performance</Card.Header>
        <Card.Body>
          <PerformanceChart />
        </Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Trial</Card.Header>
        <Card.Body>Trial Chart</Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Health Diagnosis</Card.Header>
        <Card.Body>
          <HealthChart />
        </Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Screen Plot</Card.Header>
        <Card.Body>Screen Plot Chart</Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Realtime Stream</Card.Header>
        <Card.Body>Realtime Stream Chart</Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Reaction Time</Card.Header>
        <Card.Body>Reaction Time Chart</Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Choice Bias</Card.Header>
        <Card.Body>Choice Bias Chart</Card.Body>
      </Card>
      <Card className="mb-3 p-0">
        <Card.Header>Object Performance</Card.Header>
        <Card.Body>Object Performance Chart</Card.Body>
      </Card>
      <Card className="p-0">
        <Card.Header>Reward Amount</Card.Header>
        <Card.Body>
          <RewardChart />
        </Card.Body>
      </Card>
    </Row>
  );
}
