import axios from "axios";
import { URL_API } from "../../config";
import { GET_GALLERY, GET_GALLERY_DETAILS } from "../../misc/consts";

export function getGallery() {
  return async function (dispatch) {
    await axios.get(`${URL_API}/gallery`)
      .then((res) => {
        dispatch({
          type: GET_GALLERY,
          payload: res.data
        });
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}

export function getGalleryDetails(id) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/gallery/${id}`)
      .then((res) => {
        dispatch({
          type: GET_GALLERY_DETAILS,
          payload: res.data
        });
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}

export function resetGalleryDetails() {
  return({
    type: GET_GALLERY_DETAILS,
    payload: null
  });
}