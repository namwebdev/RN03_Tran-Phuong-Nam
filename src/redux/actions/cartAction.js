export const INIT_CART = 'INIT_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const ADD_PRODUCT_QUANTITY = 'ADD_PRODUCT_QUANTITY';
export const SUBTRACT_PRODUCT_QUANTITY = 'SUBTRACT_PRODUCT_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

export const INIT_ORDERS = 'INIT_ORDERS';

export const initCart = cart => ({
  type: INIT_CART,
  payload: cart
});

export const addProductQuantity = (product, size) => ({
  type: ADD_PRODUCT_QUANTITY,
  payload: {productId: product.id, size, price: product.price}
});

export const subtractProductQuantity = product => ({
  type: SUBTRACT_PRODUCT_QUANTITY,
  payload: product
});

export const removeProductFromCartAction = id => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const initOrders = orders => ({
  type: INIT_ORDERS,
  payload: orders
});
