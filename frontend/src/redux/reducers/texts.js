import { SEND_TEXT, LOADING_TEXT, ERROR_TEXT } from "../actionTypes";

const initialState = {
  texts: [],
  loading: false,
  error: null,
};

export function sendText(state = initialState, action) {
  switch (action.type) {
    case SEND_TEXT: {
      if (action.payload) {
        const { text } = action.payload;
        return {
          ...state,
          texts: [...state.texts, text],
          loading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          texts: [...state.texts],
          loading: false,
          error: null,
        };
      }
    }
    case LOADING_TEXT: {
      return {
        ...state,
        loading: true,
      };
    }
    case ERROR_TEXT: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default:
      return state;
  }
}
