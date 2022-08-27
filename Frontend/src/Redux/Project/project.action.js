import axios from "axios";
import * as types from "./project.actionTypes";

export const getProjectAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_PROJECT_LOADING });
  return axios
    .get("https://morning-fortress-32806.herokuapp.com/project", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PROJECT_FAILED });
    });
};

export const createProjectAPI = (project) => (dispatch) => {
  return axios.post(
    "https://morning-fortress-32806.herokuapp.com/project",
    project,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const updateProjectAPI = (id, updated_project, token) => (dispatch) => {
  return axios.patch(
    `https://morning-fortress-32806.herokuapp.com/project/${id}`,
    updated_project,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteProjectAPI = (id, token) => (dispatch) => {
  return axios.delete(
    `https://morning-fortress-32806.herokuapp.com/project/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
