export const GET_PROFILE = 'GET_PROFILE';
export const LOGOUT = 'LOGOUT';

export const getProfile = profile => ({
  type: GET_PROFILE,
  payload: profile
});

export const logout = () => ({
  type: LOGOUT
});
