import { _post } from "./api";

export function sendText(url, data) {
  return _post(url, data);
}

export default { sendText };
