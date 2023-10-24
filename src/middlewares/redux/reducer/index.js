import { CURRENT_USER, GET_PRODUCTS, GET_USER_DATA } from "../../misc/consts";

const initialState = {
  currentUser: null,
  products: null,
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
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return { ...state };
  }
}