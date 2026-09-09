import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER, ERROR } from "../../misc/consts";
import { options, errMessage } from "../../helpers";
import { getUserData } from "./account";

export function auth(navigate) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/auth`, options())
      .then((res) => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        });
        return res.data.logged && navigate(`/`);
      })
      .then(() => dispatch(getUserData()))
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}

export function loginInner(formData, navigate) {
  return async function (dispatch) {
    await axios.post(`${URL_API}/login-inner`, formData)
      .then((res) => {
        localStorage.setItem('userToken', res.data.token);
        return res.data.logged && navigate(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
        dispatch({
          type: ERROR,
          payload: errMessage(e, 'No se pudo iniciar sesión.')
        });
        console.error(e.code);
        return;
      });
  };
}

export function loginGoogle() {
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .catch((e) => { console.error(e); });
  };
}

export function signupInner(formData, navigate) {
  return async function (dispatch) {
    await axios.post(`${URL_API}/signup-inner`, formData)
      .then((res) => {
        return res.data.signed && navigate(`/mail-verification/pending`);
      })
      .catch((e) => {
        console.error(e);
        return (
          dispatch({
            type: ERROR,
            payload: errMessage(e, 'No se pudo completar el registro.')
          })
        );
      });
  }
}

export function signupGoogle() {
  return async function () {
    await axios.get(`${URL_API}/signup-google`)
      .then((res) => {
        return res.data.logged;
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
}

export function logout() {
  localStorage.removeItem('userToken');
  return ({
    type: CURRENT_USER,
    payload: null
  },
    window.location.reload()
  );
}

export function emailVerification(token, navigate) {
  return async function (dispatch) {
    await axios.post(`${URL_API}/email-verification`, { token })
      .then((res) => {
        return res.data.verified && navigate(`/login`);
      })
      .catch((e) => {
        console.error(e);
        return (
          dispatch({
            type: ERROR,
            payload: errMessage(e, 'No se pudo verificar el correo.')
          })
        );
      });
  };
}

// Paso 1: pedir el enlace de recuperación. `onDone(true)` en éxito.
export function requestPasswordRecovery(email, onDone) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}/password-recovery`, { email });
      if (onDone) onDone(true);
    } catch (e) {
      console.error(e);
      dispatch({
        type: ERROR,
        payload: errMessage(e, 'No se pudo procesar la solicitud.')
      });
      if (onDone) onDone(false);
    }
  };
}

// Paso 2: definir la contraseña nueva con el token del correo.
export function resetPassword(formData, navigate) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}/password-recovery/reset`, formData);
      navigate('/login');
    } catch (e) {
      console.error(e);
      dispatch({
        type: ERROR,
        payload: errMessage(e, 'No se pudo actualizar la contraseña.')
      });
    }
  };
}
