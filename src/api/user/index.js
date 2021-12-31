import axiosClient from '..';

const userApiUrl = route => {
  return `/Users/` + (route ? route : '');
};

const userApi = {
  login: (email, password) => {
    return axiosClient.post(userApiUrl('signin'), {email, password});
  },
  /**
   * @param {*} formData
   * "email": "string",
   * "password": "string",
   * "name": "string",
   * "gender": true,
   * "phone": "string"
   */
  signUp: formData => {
    return axiosClient.post(userApiUrl('signup'), formData);
  },
  facebookLogin: facebookToken => {
    return axiosClient.post(userApiUrl('facebooklogin'), {facebookToken});
  },

  getProfile: () => {
    return axiosClient.post(userApiUrl('getProfile'));
  },
  /**
   * @param {*} formData
   * "email": "string",
   * "password": "string",
   * "name": "string",
   * "gender": true,
   * "phone": "string"
   */
  updateProfile: formData => {
    return axiosClient.post(userApiUrl('updateProfile'), formData);
  },
  changePassword: newPassword => {
    return axiosClient.post(userApi('changePassword'), {newPassword});
  },

  /**
   * @param {*} formData
   * "orderDetail": [
   *  {
   *   "productId": "string",
   *   "quantity": "number"
   *  }
   * ],
   * "email": "string"
   */
  order: formData => {
    return axiosClient.post(userApiUrl('order'), formData);
  },
  orderApprove: orderId => {
    return axiosClient.post(userApiUrl('OrderApproval'), {orderId});
  },
  deleteOrder: orderId => {
    return axiosClient.post(userApiUrl('deleteOrder'), {orderId});
  },

  like: productId => {
    return axiosClient.get(userApiUrl('like'), {params: {productId}});
  },
  unLike: productId => {
    return axiosClient.get(userApiUrl('unlike'), {params: {productId}});
  },
  getFavoriteProduct: () => {
    return axiosClient.get(userApiUrl('getproductfavorite'));
  }
};

export default userApi;
