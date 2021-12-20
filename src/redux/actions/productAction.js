export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_LIST_CATEGORY = 'GET_LIST_CATEGORY';

export const getListProduct = listProduct => ({
  type: GET_LIST_PRODUCT,
  payload: listProduct
});

export const getCategories = categories => ({
  type: GET_LIST_CATEGORY,
  payload: categories
});

export const getProductDetail = product => ({
  type: GET_PRODUCT_DETAIL,
  payload: product
});
