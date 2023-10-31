import axios from "axios";
import { URL_API } from "../../config";
import { GET_PRODUCTS, GET_PRODUCTS_DETAILS } from "../../misc/consts";

export function getProducts() {
  return async function (dispatch) {
    await axios.get(`${URL_API}/products`)
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data
        });
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}

export function getProductDetails(id) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/products/${id}`)
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS_DETAILS,
          payload: res.data
        });
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}

export function resetProductDetails() {
  return({
    type: GET_PRODUCTS_DETAILS,
    payload: null
  });
}
