import axiosClient from '../index';

const productApiURL = route => {
  return `/Product/` + (route ? route : '');
};

const productApi = {
  getProducts: () => {
    return axiosClient.get(productApiURL());
  },
  getProductPaging: (index, size, keyword) => {
    const params = {
      ...(index && {pageIndex: index}),
      ...(size && {pageSize: size}),
      ...(keyword && {keywords: keyword})
    };
    return axiosClient.get(productApiURL('getpaging'), {params});
  },
  getProductByFeature: feature => {
    return axiosClient.get(
      productApiURL('getProductByFeature', {params: {feature}})
    );
  },
  getProductById: id => {
    return axiosClient.get(productApiURL('getbyid'), {params: {id}});
  },

  getCategories: () => {
    return axiosClient.get(productApiURL('getAllCategory'));
  },
  getProductByCategory: categoryId => {
    return axiosClient.get(productApiURL('getProductByCategory'), {
      params: {categoryId}
    });
  },

  getStores: () => {
    return axiosClient.get(productApiURL('getAllStore'));
  }
};

export default productApi;
