import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  otp: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        otp: payload.otp,
      };
    case types.LOGIN_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
        otp: "",
      };
    case types.ENTER_OTP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ENTER_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
      };
    case types.ENTER_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
        otp: "",
      };
    default:
      return state;
  }
};
