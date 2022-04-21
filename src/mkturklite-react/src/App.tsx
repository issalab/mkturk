import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Counter } from './features/counter/Counter';
import { Editor } from './features/editor/Editor';
import { Charts } from './features/charts/Charts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row className="p-3">
        <Card className="p-0">
          <Card.Header>MkTurk::Liveplot</Card.Header>
          <Card.Body>
            <Card.Title>Please select a datafile to view.</Card.Title>
            <Counter />
          </Card.Body>
        </Card>
      </Row>
      <Charts />
      <Row className="p-3">
        <Card className="p-0">
          <Card.Header>Data Viewer</Card.Header>
          <Card.Body>
            <Editor />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
