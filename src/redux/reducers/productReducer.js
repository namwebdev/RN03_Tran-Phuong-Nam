import {
  ADD_PRODUCT_QUANTITY,
  CLEAR_CART,
  GET_LIST_CATEGORY,
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_FAVORITE,
  GET_PRODUCT_DETAIL,
  INIT_CART,
  REMOVE_PRODUCT_FROM_CART,
  SUBTRACT_PRODUCT_QUANTITY
} from '../actions/productAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  listProduct: [],
  listProductDetail: [],
  categories: [],
  favoProducts: [],
  isFetching: false
};

const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_LIST_PRODUCT:
      return {...state, listProduct: payload, isFetching: false};
    case GET_PRODUCT_DETAIL:
      const listProductDetail = [...state.listProductDetail, payload];
      return {
        ...state,
        listProductDetail,
        isFetching: false
      };
    case GET_LIST_CATEGORY:
      return {...state, categories: payload, isFetching: false};
    case GET_LIST_PRODUCT_FAVORITE:
      return {...state, favoProducts: payload};
    default:
      return state;
  }
};

export default productReducer;
