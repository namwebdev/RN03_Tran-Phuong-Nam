import {store} from '..';
import {getProducts, getProductById} from '../../api/product';
import {getListProduct, getProductDetail} from '../actions/productAction';

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
