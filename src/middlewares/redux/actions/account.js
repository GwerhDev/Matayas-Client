import axios from "axios";
import { options, errMessage, getUserToken } from "../../helpers";
import { URL_API } from "../../config";
import { GET_USER_DATA } from "../../misc/consts";

export function getUserData() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/account/my-data`, options());
      dispatch({
        type: GET_USER_DATA,
        payload: response.data?.userData
      });
    } catch (e) {
      console.error(e);
    }
  }
}

// Editar nombre / origen de la foto. `onDone(ok, msg)` para el feedback local.
export function updateAccount(payload, onDone) {
  return async function (dispatch) {
    try {
      const res = await axios.patch(`${URL_API}/account/update`, payload, options());
      dispatch({
        type: GET_USER_DATA,
        payload: res.data?.userData
      });
      if (onDone) onDone(true, res.data?.message || 'Datos actualizados.');
    } catch (e) {
      console.error(e);
      if (onDone) onDone(false, errMessage(e, 'No se pudo actualizar la cuenta.'));
    }
  };
}

// Cambiar / crear contraseña. `onDone(ok, msg)` para el feedback local.
export function changePassword(payload, onDone) {
  return async function () {
    try {
      const res = await axios.post(`${URL_API}/account/change-password`, payload, options());
      if (onDone) onDone(true, res.data?.message || 'Contraseña actualizada.');
    } catch (e) {
      console.error(e);
      if (onDone) onDone(false, errMessage(e, 'No se pudo cambiar la contraseña.'));
    }
  };
}

// Desvincular Google. `onDone(ok, msg)` para el feedback local.
export function unlinkGoogle(onDone) {
  return async function (dispatch) {
    try {
      const res = await axios.post(`${URL_API}/account/unlink-google`, {}, options());
      dispatch({
        type: GET_USER_DATA,
        payload: res.data?.userData
      });
      if (onDone) onDone(true, res.data?.message || 'Cuenta de Google desvinculada.');
    } catch (e) {
      console.error(e);
      if (onDone) onDone(false, errMessage(e, 'No se pudo desvincular Google.'));
    }
  };
}

// La vinculación es un redirect completo del navegador (flujo OAuth).
export const linkGoogleUrl = () =>
  `${URL_API}/account/link-google?token=${encodeURIComponent(getUserToken() || '')}`;
