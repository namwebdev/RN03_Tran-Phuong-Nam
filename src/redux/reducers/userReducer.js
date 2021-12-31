import {FETCHING_DATA, GET_PROFILE, LOGOUT} from '../actions/userAction';

const initialState = {
  user: {},
  isLogin: false,
  isFetching: false
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCHING_DATA:
      return {...state, isFetching: true};
    case GET_PROFILE:
      return {...state, user: payload, isLogin: true, isFetching: false};
    case LOGOUT:
      return {...state, user: {}, isLogin: false};
    default:
      return state;
  }
};

export default userReducer;
