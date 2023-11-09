import axios from "axios";
import { options } from "../../helpers";
import { URL_API } from "../../config";
import { CREATE_PRODUCT, CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "../../misc/consts";
import { getProducts } from "./products";
import { getGallery } from "./gallery";

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

export function createUser(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users/create`, formData, options());
      dispatch({
        type: CREATE_USER,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function updateUser(formData, id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users/update/${id}`, formData, options());
      dispatch({
        type: UPDATE_USER,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_API}/admin/management-users/delete/${id}`, options());
      dispatch({
        type: DELETE_USER,
        payload: response.data
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export function createProduct(formData, navigate) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_API}/admin/management-products/create`, formData, options());
      dispatch({
        type: CREATE_PRODUCT,
        payload: response.data
      });
      response.data.success && navigate('/admin/products/management')
    } catch (e) {
      console.error(e);
    }
  }
}

export function updateProduct(formData, id, navigate) {
  return async function (dispatch) {
    try {
      const response = await axios.patch(`${URL_API}/admin/management-products/update/${id}`, formData, options());
      dispatch(getProducts());
      response.data.success && navigate('/admin/products/management');
    } catch (e) {
      console.error(e);
    }
  }
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${URL_API}/admin/management-products/delete/${id}`, options());
      dispatch(getProducts());
    } catch (e) {
      console.error(e);
    }
  }
}

export function createGallery(formData, navigate) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_API}/admin/management-gallery/create`, formData, options());
      dispatch({
        type: CREATE_PRODUCT,
        payload: response.data
      });
      response.data.success && navigate('/admin/gallery/management')
    } catch (e) {
      console.error(e);
    }
  }
}

export function updateGallery(formData, id, navigate) {
  return async function (dispatch) {
    try {
      const response = await axios.patch(`${URL_API}/admin/management-gallery/update/${id}`, formData, options());
      dispatch(getGallery());
      response.data.success && navigate('/admin/gallery/management');
    } catch (e) {
      console.error(e);
    }
  }
}

export function deleteGallery(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${URL_API}/admin/management-gallery/delete/${id}`, options());
      dispatch(getGallery());
    } catch (e) {
      console.error(e);
    }
  }
}

export function postInstagram() {
  return `${URL_API}/admin/post-instagram/`
}
