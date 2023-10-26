import s from './ProductList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../middlewares/redux/actions/products';

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <nav className={s.fieldsContainer}>
      <ul className={s.fieldsUl}>
        <li>Image</li> -
        <li>Title</li> -
        <li>Price</li> -
        <li>Description</li>
      </ul>
      <ul className={s.usersUl}>
        {
          products?.map(user => (
            <li key={user._id}>
              <li>{user.username}</li> -
              <li>{user.email}</li> -
              <li><img src={user.profilePic} alt="" /></li> -
              <li>{user.role}</li> -
              <li></li> -
              <li></li>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
