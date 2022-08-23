const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
