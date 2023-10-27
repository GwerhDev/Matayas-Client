import axios from "axios";
import { options } from "../../helpers";
import { URL_API } from "../../config";
import { CREATE_PRODUCT, CREATE_USER, DELETE_PRODUCT, DELETE_USER, GET_USERS, UPDATE_PRODUCT, UPDATE_USER } from "../../misc/consts";

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

export function createUser() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users/create`, options());
      dispatch({
        type: CREATE_USER,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function updateUser() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users/update`, options());
      dispatch({
        type: UPDATE_USER,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function deleteUser() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users/delete`, options());
      dispatch({
        type: DELETE_USER,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function createProduct() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-products/create`, options());
      dispatch({
        type: CREATE_PRODUCT,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function updateProduct() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-products/update`, options());
      dispatch({
        type: UPDATE_PRODUCT,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function deleteProduct() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-products/delete`, options());
      dispatch({
        type: DELETE_PRODUCT,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}