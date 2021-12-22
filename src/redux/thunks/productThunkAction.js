import {store} from '..';
import {
  getCategories,
  getListProduct,
  getProductDetail
} from '../actions/productAction';
import {getProducts, getProductById} from '../../api/product';

export const getRequestListProduct = () => {
  const {listProduct} = store.getState().productReducer;
  if (listProduct.length > 0) return () => {};

  return async dispatch => {
    try {
      const {content} = await getProducts();
      dispatch(getListProduct(content));
    } catch (e) {
      console.error('getRequestListProduct', e);
    }
  };
};

export const getRequestCategories = () => {
  const {categories} = store.getState().productReducer;
  if (categories.length > 0) return () => {};

  return async dispatch => {
    try {
      const {content} = await productApi.getCategories();
      dispatch(getCategories(content));
    } catch (e) {
      console.error('getCategories', e);
    }
  };
};

export const getRequestProductDetail = id => {
  const {listProductDetail} = store.getState().productReducer;
  const isProductFetched = listProductDetail.some(item => item.id === id);
  if (isProductFetched) return () => {};

  return async dispatch => {
    try {
      const {content} = await getProductById(id);
      dispatch(getProductDetail(content));
    } catch (e) {
      console.error('getRequestProductDetail', e);
    }
  };
};
