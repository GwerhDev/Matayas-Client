import axios from "axios";
import { URL_API } from "../../config";
import { GET_PRODUCTS } from "../../misc/consts";

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