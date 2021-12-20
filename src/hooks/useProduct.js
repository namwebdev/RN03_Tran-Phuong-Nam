import {useDispatch, useSelector} from 'react-redux';
import {
  getProductsByCategory,
  getRequestCategories,
  getRequestListProduct,
  getRequestProductDetail
} from '../redux/thunks/productThunkAction';

export default function useProduct(id) {
  const {listProduct, listProductDetail, categories, isFetching} = useSelector(
    state => state.productReducer
  );
  const dispatch = useDispatch();
  const product = listProductDetail.find(item => item.id === id);

  const dispatchListProduct = () => {
    dispatch(getRequestListProduct());
  };
  const dispatchCategories = () => {
    dispatch(getRequestCategories());
  };
  const dispatchProductDetail = id => {
    dispatch(getRequestProductDetail(id));
  };
  return {
    listProduct,
    product,
    categories,
    isFetching,
    dispatchListProduct,
    dispatchCategories,
    dispatchProductDetail,
  };
}
