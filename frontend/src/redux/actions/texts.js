import { SEND_TEXT, LOADING_TEXT, ERROR_TEXT } from "../actionTypes";
import { sendText as _sendText } from "../../api";

export function sendText(text) {
  return (dispatch) => {
    dispatch(request());
    return _sendText("/text", { message: text })
      .then(
        (response) => {
          dispatch(success(response.message));
        },
        (error) => {
          dispatch(failure(error));
        }
      )
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: LOADING_TEXT };
  }
  function success(text) {
    return { type: SEND_TEXT, payload: { text } };
  }
  function failure(error) {
    return { type: ERROR_TEXT, error };
  }
}

export default { sendText };
