import * as types from "./project.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Project: [],
};

export const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROJECT_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_PROJECT_SUCCESS: {
      return { ...state, Project: payload, isLoading: false, isError: false };
    }

    case types.GET_PROJECT_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
