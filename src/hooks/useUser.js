import {useSelector, useDispatch} from 'react-redux';
import {getRequestProfile} from '../redux/thunks/userThunkAction';

export default function useUser() {
  const {user, isLogin, isFetching} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const dispatchProfile = () => {
    dispatch(getRequestProfile());
  };

  return {user, isLogin, isFetching, dispatchProfile};
}
