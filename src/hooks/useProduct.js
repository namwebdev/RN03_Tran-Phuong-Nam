import {useDispatch, useSelector} from 'react-redux';
import {getListProductFavo} from '../redux/actions/productAction';
import {
  getRequestCategories,
  getRequestListProduct,
  getRequestProductDetail
} from '../redux/thunks/productThunkAction';

export default function useProduct(id) {
  const {listProduct, listProductDetail, categories, favoProducts, isFetching} =
    useSelector(state => state.productReducer);
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
  const dispatchFavoProducts = listProduct => {
    dispatch(getListProductFavo(listProduct));
  };

  return {
    listProduct,
    product,
    categories,
    favoProducts,
    isFetching,
    dispatchListProduct,
    dispatchCategories,
    dispatchProductDetail,
    dispatchFavoProducts
  };
}
