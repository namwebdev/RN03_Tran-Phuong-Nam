import {
  GET_LIST_CATEGORY,
  GET_LIST_PRODUCT,
  GET_PRODUCT_DETAIL
} from '../actions/productAction';

const initialState = {
  listProduct: [],
  listProductDetail: [],
  categories: [],
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
    default:
      return state;
  }
};

export default productReducer;
