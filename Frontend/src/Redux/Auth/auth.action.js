import axios from "axios";
import * as types from "./auth.actionTypes";

export const registerAPI = (payload) => (dispatch) => {
  return axios
    .post("https://morning-fortress-32806.herokuapp.com/user/register", payload)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER });
    });
};

export const loginAPI = (creds) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_LOADING });
  return axios
    .post("https://morning-fortress-32806.herokuapp.com/user/login", creds)
    .then((res) => {
      console.log("res FROM ACTION:", res.data);
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data});
      return types.USER_LOGIN_SUCCESS;
    })
    .catch(() => {
      dispatch({ type: types.USER_LOGIN_FAILED });
    });
};

export const logoutAPI = () => (dispatch) => {
  dispatch({ type: types.USER_LOGOUT });
};
