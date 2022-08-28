import * as types from "./auth.actionTypes";
const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_REGISTER: {
      return state;
    }

    case types.USER_LOGIN_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.USER_LOGIN_SUCCESS: {
      if (payload.token) {
        localStorage.setItem("token", payload.token);
        localStorage.setItem("userData", JSON.stringify(payload.data));
      }
      return {
        ...state,
        token: payload,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case types.USER_LOGIN_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.USER_LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false };
    }

    default: {
      return state;
    }
  }
};
