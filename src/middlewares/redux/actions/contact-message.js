import axios from "axios";
import { URL_API } from "../../config";
import { CONTACT_MESSAGE } from "../../misc/consts";

export function sendContactMessage(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_API}/contact-message`, formData);  
      dispatch({
        type: CONTACT_MESSAGE,
        payload: response.data?.message
      });
    } catch (e) {
      console.error(e);
    }
  }
}