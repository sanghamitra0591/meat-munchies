//Write the ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

export const login_signup = (payload) => (dispatch) => {
  dispatch({
    type: types.LOGIN_SIGNUP_REQUEST,
  });
  return axios
    .post("http://localhost:8080/api/auth", payload)
    .then((res) =>
      dispatch({
        type: types.LOGIN_SIGNUP_SUCCESS,
        payload: res.data,
      })
    )
    .catch((e) =>
      dispatch({
        type: types.LOGIN_SIGNUP_FAILURE,
        payload: e.response.data,
      })
    );
};

export const verifyOTP = (payload) => (dispatch) => {
  // console.log("payload: ", payload);
  dispatch({ type: types.ENTER_OTP_REQUEST });
  return axios({
    method: "post",
    url: "http://localhost:8080/api/auth/verifyotp",
    data: {
      otp: payload.otp,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return dispatch({ type: types.ENTER_OTP_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      return dispatch({
        type: types.ENTER_OTP_FAILURE,
        payload: e.response.data,
      });
    });
};
