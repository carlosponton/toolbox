import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../actions";
import * as types from "../../ActionTypes";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library
import { HTTP_URL } from "../../../api/api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset().restore();
  });

  it("creates SEND_TEXT when fetching todos has been done", () => {
    fetchMock.postOnce(`${HTTP_URL}/text`, {
      body: { message: "do something" },
    });

    const expectedActions = [
      { type: types.LOADING_TEXT },
      { type: types.SEND_TEXT, payload: { text: "do something" } },
    ];
    const store = mockStore({ message: "" });

    return store.dispatch(actions.sendText("do something")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
