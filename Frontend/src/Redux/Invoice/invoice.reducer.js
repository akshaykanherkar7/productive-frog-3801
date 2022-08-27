import * as types from "./invoice.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Invoice: [],
};

export const invoiceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_INVOICE_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_INVOICE_SUCCESS: {
      return { ...state, Invoice: payload, isLoading: false, isError: false };
    }

    case types.GET_INVOICE_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
