import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from "../../utils/test";
import ListTexts from "../ListTexts";

it("Renders the connected app with initialState", () => {
  render(<ListTexts />, {
    initialState: {
      sendText: {
        texts: ["Use Redux"],
        loading: false,
        error: null,
      },
    },
  });

  expect(screen.getByText(/Use Redux/i)).toBeInTheDocument();
});
