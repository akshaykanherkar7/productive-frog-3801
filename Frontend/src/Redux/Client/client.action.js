import axios from "axios";
import * as types from "./client.actionTypes";

export const getClientAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_CLIENT_LOADING });

  return axios
    .get("https://ancient-scrubland-60473.herokuapp.com/client", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log('resFROMSTORE:', res)
      dispatch({ type: types.GET_CLIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CLIENT_FAILED });
    });
};

export const createClientAPI = (client,token) => (dispatch) => {
  console.log('tokenFromRedux:', token)
  console.log('clientFromRedux:', client)
  return axios.post("https://ancient-scrubland-60473.herokuapp.com/client",client, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const updateClientAPI = (id, updated_client, token) => (dispatch) => {
  return axios.patch(
    `https://ancient-scrubland-60473.herokuapp.com/client/${id}`,
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
    `https://ancient-scrubland-60473.herokuapp.com/client/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
