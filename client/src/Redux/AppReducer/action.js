import * as types from "./actionTypes";
import axios from "axios";

export const addToCart = (params) => (dispatch) => {
  dispatch({
    type: types.ADDTOCART_FAILURE,
  });
  return axios
    .get(`http://localhost:8080/shoes`, params)
    .then((res) => {
      dispatch({
        type: types.ADDTOCART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: types.ADDTOCART_FAILURE,
      });
    });
};
