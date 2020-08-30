import reducer from "../../reducers";
import * as types from "../../ActionTypes";

describe("text reducer", () => {
  it("should return the initial state", () => {
    expect(reducer({ sendText: undefined }, {})).toEqual({
      sendText: {
        texts: [],
        loading: false,
        error: null,
      },
    });
  });

  it("should handle SEND_TEXT", () => {
    expect(
      reducer(
        {
          sendText: {
            texts: ["Use Redux"],
            loading: false,
            error: null,
          },
        },
        {
          type: types.SEND_TEXT,
          payload: {
            text: "Run the tests",
          },
        }
      )
    ).toEqual({
      sendText: {
        texts: ["Use Redux", "Run the tests"],
        loading: false,
        error: null,
      },
    });
  });
});
