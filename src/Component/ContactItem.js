import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={1}>
          <img
            width={60}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/813px-Unknown_person.jpg"
          />
        </Col>
        <Col lg={11}>
        <div>
            이름
        </div>
        <div>
            전화번호
        </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
