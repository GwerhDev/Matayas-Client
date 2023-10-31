import s from './Seeker.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchByQuery } from '../../../middlewares/redux/actions/search';
import { ProductCard } from '../ProductsCard/ProductCard';
import { Preloader } from '../Preloader/Preloader';

export const Seeker = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');
  const search = useSelector(state => state.search);

  useEffect(() => {
    dispatch(searchByQuery(query));
  },[dispatch, query]);

  return (
    <div className={s.container}>
      {
        search
        ?
        search?.map(product => {
          return (
          <ProductCard
            key={product?._id}
            id={product?._id}
            title={product?.title}
            price={product?.price}
            image={product?.image}
            description={product?.description}
            category={product?.category}
            rate={product?.rate}
          />
          )
        })
        :
        <Preloader position="static"/>
      }
    </div>
  )
}
