import axios from "axios";
import { URL_API } from "../../config";
import { GET_SEARCH_BY_QUERY } from "../../misc/consts";

export function searchByQuery(query) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/search/${query}`)
      .then((res) => {
        dispatch({
          type: GET_SEARCH_BY_QUERY,
          payload: res.data
        });
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}
