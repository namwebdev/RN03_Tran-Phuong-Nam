export const GET_PROFILE = 'GET_PROFILE';
export const LOGOUT = 'LOGOUT';
export const FETCHING_DATA = 'FETCHING_DATA';

export const fetchingData = () => ({
  type: FETCHING_DATA
});

export const getProfile = profile => ({
  type: GET_PROFILE,
  payload: profile
});

export const logout = () => ({
  type: LOGOUT
});
