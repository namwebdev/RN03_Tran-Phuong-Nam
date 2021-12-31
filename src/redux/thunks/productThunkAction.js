import {store} from '..';
import {
  getCategories,
  getListProduct,
  getListProductFavo,
  getProductDetail
} from '../actions/productAction';
import productApi from '../../api/product';
import userApi from '../../api/user';

export const getRequestListProduct = () => {
  const {listProduct} = store.getState().productReducer;
  if (listProduct.length > 0) return () => {};

  return async dispatch => {
    try {
      const {content} = await productApi.getProducts();
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
      const {content} = await productApi.getProductById(id);
      dispatch(getProductDetail(content));
    } catch (e) {
      console.error('getRequestProductDetail', e);
    }
  };
};

export const getFavoriteProducts = () => {
  return async dispatch => {
    try {
      const {content} = await userApi.getFavoriteProduct();
      if (content) dispatch(getListProductFavo(content.productsFavorite));
    } catch (e) {
      console.error('getFavoriteProducts', e);
    }
  };
};
