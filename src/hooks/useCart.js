import {useSelector, useDispatch} from 'react-redux';
import {
  addProductQuantity,
  clearCart,
  initCart,
  removeProductFromCartAction,
  subtractProductQuantity
} from '../redux/actions/cartAction';

export default function useCart() {
  const {cart, orders} = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const dispatchInitCart = cart => {
    dispatch(initCart(cart));
  };
  const dispatchAddProduct = (product, size) => {
    dispatch(addProductQuantity(product, size));
  };
  const dispatchSubtractProduct = product => {
    dispatch(subtractProductQuantity(product));
  };
  const dispatchRemoveProduct = id => {
    dispatch(removeProductFromCartAction(id));
  };
  const dispatchClearCart = () => {
    dispatch(clearCart());
  };

  return {
    cart,
    orders,
    dispatchInitCart,
    dispatchAddProduct,
    dispatchSubtractProduct,
    dispatchRemoveProduct,
    dispatchClearCart
  };
}
