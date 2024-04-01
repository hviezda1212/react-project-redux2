import React from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름" />
      </Col>
      <Col lg={2}>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
