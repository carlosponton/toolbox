export const HTTP_URL = "http://localhost:4000";

export function _post(url, data) {
  return fetch(`${HTTP_URL}${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response;
    });
}
