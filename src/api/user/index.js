import axiosClient from '..';

const userApiUrl = route => {
  return `/Users/` + (route ? route : '');
};

const userApi = {
  login: (email, password) => {
    return axiosClient.post(userApiUrl('signin'), {email, password});
  },
  signUp: formData => {
    return axiosClient.post(userApiUrl('signup'), formData);
  },
  getProfile: async () => {
    return axiosClient.post(userApiUrl('getProfile'));
  }
};

export default userApi;
