import axios from "axios";
import * as types from "./client.actionTypes";

export const getClientAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_CLIENT_LOADING });

  return axios
    .get("https://morning-fortress-32806.herokuapp.com/client", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_CLIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CLIENT_FAILED });
    });
};

export const createClientAPI = (client) => (dispatch) => {
  return axios.post("https://morning-fortress-32806.herokuapp.com/client",client, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const updateClientAPI = (id, updated_client, token) => (dispatch) => {
  return axios.patch(
    `https://morning-fortress-32806.herokuapp.com/client/${id}`,
    updated_client,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteClientAPI = (id, token) => (dispatch) => {
  return axios.delete(
    `https://morning-fortress-32806.herokuapp.com/client/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
