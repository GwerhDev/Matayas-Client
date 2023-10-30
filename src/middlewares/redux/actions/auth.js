import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER, ERROR } from "../../misc/consts";
import { options } from "../../helpers";
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
      .then(dispatch(getUserData()))
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
          payload: e.response.data.message
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

export function signupInner(formData) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, formData)
      .then((res) => {
        return res.data.logged;
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  };
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