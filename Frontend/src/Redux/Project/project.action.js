import axios from "axios";
import * as types from "./project.actionTypes";

export const getProjectAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_PROJECT_LOADING });
  return axios
    .get("https://ancient-scrubland-60473.herokuapp.com/project", {
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

export const createProjectAPI = (project,token) => (dispatch) => {
  return axios.post(
    "https://ancient-scrubland-60473.herokuapp.com/project",
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
    `https://ancient-scrubland-60473.herokuapp.com/project/${id}`,
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
    `https://ancient-scrubland-60473.herokuapp.com/project/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
