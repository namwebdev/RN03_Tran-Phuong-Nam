import {useSelector, useDispatch} from 'react-redux';
import {initOrders} from '../redux/actions/cartAction';
import {getRequestProfile, logout} from '../redux/thunks/userThunkAction';

export default function useUser() {
  const {user, isLogin, isFetching} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const dispatchProfile = () => {
    dispatch(getRequestProfile());
  };
  const dispatchLogout = () => {
    dispatch(logout());
  };
  return {
    user,
    isLogin,
    isFetching,
    dispatchProfile,
    dispatchLogout
  };
}
