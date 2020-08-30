import React from "react";

//Boostrap
import { Container, Row, Col } from "react-bootstrap";

//components
import ListTexts from "../components/ListTexts";
import SendTexts from "../components/SendTexts";

function Texts() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SendTexts />
        </Col>
      </Row>
      <Row>
        <Col>
          <ListTexts />
        </Col>
      </Row>
    </Container>
  );
}

export default Texts;
