import * as types from "./actionTypes";
import axios from "axios";

export const addToCart = (params) => (dispatch) => {
  dispatch({
    type: types.ADDTOCART_FAILURE,
  });
  return axios
    .get(`https://odd-boa-earrings.cyclic.app/cart`, params)
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
