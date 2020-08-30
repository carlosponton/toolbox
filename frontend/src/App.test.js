import React from "react";
import App from "./App";
import { render } from "./utils/test";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Send/i);
  expect(linkElement).toBeInTheDocument();
});
