import React from "react";
import { render, fireEvent, screen } from "../../utils/test";
import SendTexts from "../SendTexts";

it("should not call SendText if length of text is 0", () => {
  const mockAddTodo = jest.fn();
  render(<SendTexts />);

  fireEvent.change(screen.getByPlaceholderText(/Text/i), {
    target: { value: "" },
  });

  expect(mockAddTodo).toHaveBeenCalledTimes(0);
});
