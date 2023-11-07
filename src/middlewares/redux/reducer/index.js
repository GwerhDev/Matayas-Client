import { CURRENT_USER, ERROR, GET_GALLERY, GET_GALLERY_DETAILS, GET_PRODUCTS, GET_PRODUCTS_DETAILS, GET_SEARCH_BY_QUERY, GET_USERS, GET_USER_DATA } from "../../misc/consts";

const initialState = {
  error: null,
  users: null,
  gallery:null,
  products: null,
  currentUser: null,
  galleryDetails: null,
  productDetails: null,
  search: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case GET_USER_DATA:
      return {
        ...state,
        currentUser: action.payload
      };
    case GET_GALLERY:
      return {
        ...state,
        gallery: action.payload
      };
    case GET_GALLERY_DETAILS:
      return {
        ...state,
        galleryDetails: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_PRODUCTS_DETAILS:
      return {
        ...state,
        productDetails: action.payload
      }
    case GET_SEARCH_BY_QUERY:
      return {
        ...state,
        search: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return { ...state };
  }
}