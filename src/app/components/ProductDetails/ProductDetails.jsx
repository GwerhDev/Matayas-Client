import s from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductDetails } from '../../../middlewares/redux/actions/products';
import { useParams } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productDetails = useSelector(state => state.productDetails);
  const { id } = params;

  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [dispatch, id])

  return (
    <div className={s.container}>
      <div className={s.mainImageContainer}>
        <img src={productDetails?.image || defaultImage} width="100%" alt="" />
      </div>
      <p>{productDetails?.price}</p>
      <p>{productDetails?.title}</p>
      <p>{productDetails?.description}</p>
    </div>
  )
}
