import React, { useState } from "react";

//Redux
import { connect } from "react-redux";
import { sendText } from "../redux/actions";

//Boostrap
import { Button, FormControl, InputGroup } from "react-bootstrap";

function SendTexts(props) {
  const [text, setText] = useState("");
  const send = () => props.sendText(text);

  const { loading } = props;
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Text"
        aria-label="Text"
        aria-describedby="basic-addon2"
        onChange={(e) => setText(e.target.value)}
      />
      <InputGroup.Append>
        <Button
          variant="primary"
          disabled={loading}
          onClick={!loading ? send : null}
        >
          {loading ? "Loading…" : "Send"}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

const mapStateToProps = (state) => {
  const { sendText } = state;

  return { ...sendText };
};

export default connect(mapStateToProps, { sendText })(SendTexts);
