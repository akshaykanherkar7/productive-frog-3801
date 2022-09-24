import axios from "axios";
import * as types from "./invoice.actionTypes";

export const getInvoiceAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_INVOICE_LOADING });
  return axios
    .get("https://ancient-scrubland-60473.herokuapp.com/invoice", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_INVOICE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_INVOICE_FAILED });
    });
};

export const createInvoiceAPI = (invoice,token) => (dispatch) => {
  return axios.post(
    "https://ancient-scrubland-60473.herokuapp.com/invoice",
    invoice,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const updateInvoiceAPI = (id, updated_invoice, token) => (dispatch) => {
  return axios.patch(
    `https://ancient-scrubland-60473.herokuapp.com/invoice/${id}`,
    updated_invoice,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteInvoiceAPI = (id, token) => (dispatch) => {
  return axios.delete(
    `https://ancient-scrubland-60473.herokuapp.com/invoice/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
