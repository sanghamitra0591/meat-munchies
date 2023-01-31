import * as types from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADDTOCART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADDTOCART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    case types.ADDTOCART_FAILURE:
      return {
        ...state,
        isLoading: false,
        cart: [],
        isError: true,
      };
    default:
      return state;
  }
};
