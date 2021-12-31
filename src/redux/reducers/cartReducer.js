import {
  ADD_PRODUCT_QUANTITY,
  CLEAR_CART,
  INIT_CART,
  INIT_ORDERS,
  REMOVE_PRODUCT_FROM_CART,
  SUBTRACT_PRODUCT_QUANTITY
} from '../actions/cartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  cart: [],
  orders: []
};

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case INIT_CART:
      return {...state, cart: payload};

    case REMOVE_PRODUCT_FROM_CART:
      const index = state.cart.findIndex(
        product => product.id === payload.productId
      );
      if (index === -1) return state;
      const cart = [...state.cart];
      cart.splice(index, 1);
      addToStorage(cart);
      return {...state, cart};

    case ADD_PRODUCT_QUANTITY:
      const indexProductToAdd = state.cart.findIndex(
        ({productId, size}) =>
          productId === payload.productId && size === payload.size
      );
      if (indexProductToAdd === -1) {
        const newProduct = {...payload, quantity: 1};
        const cart = [...state.cart, newProduct];
        addToStorage(cart);
        return {...state, cart};
      } else {
        const quantity = state.cart[indexProductToAdd].quantity + 1;
        const product = {
          ...state.cart[indexProductToAdd],
          quantity
        };
        const cart = [...state.cart];
        cart[indexProductToAdd] = product;
        addToStorage(cart);
        return {...state, cart};
      }
    case SUBTRACT_PRODUCT_QUANTITY:
      const indexProductToSubTract = state.cart.findIndex(
        ({productId, size}) =>
          productId === payload.productId && size === payload.size
      );
      if (indexProductToSubTract === -1) return state;
      if (state.cart[indexProductToSubTract].quantity === 1) {
        const cart = [...state.cart];
        cart.splice(indexProductToSubTract, 1);
        addToStorage(cart);
        return {...state, cart};
      } else {
        const quantity = state.cart[indexProductToSubTract].quantity - 1;
        const product = {
          ...state.cart[indexProductToSubTract],
          quantity
        };
        const cart = [...state.cart];
        cart[indexProductToSubTract] = product;
        addToStorage(cart);
        return {...state, cart};
      }
    case CLEAR_CART:
      AsyncStorage.removeItem('cart');
      return {...state, cart: []};
    case INIT_ORDERS:
      return {...state, orders: payload};
    default:
      return state;
  }
};

const addToStorage = cart => {
  AsyncStorage.setItem('cart', JSON.stringify(cart));
};

export default cartReducer;
