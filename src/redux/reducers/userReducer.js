import {GET_PROFILE} from '../actions/userAction';

const initialState = {
  user: {},
  isLogin: false,
  isFetching: false
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PROFILE:
      return {...state, user: payload, isLogin: true, isFetching: false};
    default:
      return state;
  }
};

export default userReducer;
