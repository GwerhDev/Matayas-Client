import axios from "axios";
import { options } from "../../helpers";
import { URL_API } from "../../config";
import { GET_USERS } from "../../misc/consts";

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users`, options());  
      dispatch({
        type: GET_USERS,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}
