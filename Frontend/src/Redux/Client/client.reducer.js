import * as types from "./client.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Client: [],
};

export const clientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CLIENT_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_CLIENT_SUCCESS: {
      return { ...state, Client: payload, isLoading: false, isError: false };
    }

    case types.GET_CLIENT_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
