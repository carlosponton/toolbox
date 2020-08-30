import React, { useEffect, useState } from "react";

//redux
import { connect } from "react-redux";

//Boostrap
import { ListGroup, Alert } from "react-bootstrap";

function ListTexts(props) {
  const [show, setShow] = useState(false);

  const { texts, error } = props;

  useEffect(() => {
    if (error) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [error]);

  const showError = () => {
    if (show && !!error) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error.message}</p>
        </Alert>
      );
    } else {
      return null;
    }
  };

  return (
    <ListGroup>
      {showError()}
      {texts.map((text, index) => (
        <ListGroup.Item key={index}>{text}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

const mapStateToProps = (state) => {
  const { sendText } = state;

  return { ...sendText };
};

export default connect(mapStateToProps)(ListTexts);
