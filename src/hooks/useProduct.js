import {useDispatch, useSelector} from 'react-redux';
import {
  getRequestListProduct,
  getRequestProductDetail
} from '../redux/thunks/productThunkAction';

export default function useProduct(id) {
  const {listProduct, listProductDetail, isFetching} = useSelector(
    state => state.productReducer
  );
  const dispatch = useDispatch();
  const product = listProductDetail.find(item => item.id === id);

  const dispatchListProduct = () => {
    dispatch(getRequestListProduct());
  };
  const dispatchProductDetail = id => {
    dispatch(getRequestProductDetail(id));
  };
  return {
    listProduct,
    product,
    isFetching,
    dispatchListProduct,
    dispatchProductDetail
  };
}
