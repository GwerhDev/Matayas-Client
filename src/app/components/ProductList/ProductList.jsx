import s from './ProductList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../middlewares/redux/actions/products';
import editIcon from '../../../assets/png/edit-icon.png';
import deleteIcon from '../../../assets/png/delete-icon.png';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.optionsContainer}>
        <Link to="/admin/dashboard"><button className="button-user-options">Dashboard</button></Link>
        <Link to="/admin/products/management/create"><button className="button-user-options">Crear</button></Link>
      </div>
      <nav className={s.fieldsContainer}>
        <ul className={s.fieldsUl}>
          <li>Image</li> -
          <li>Title</li> -
          <li>Price</li> -
          <li>Description</li> -
          <li>Editar</li> -
          <li>Eliminar</li>
        </ul>
      </nav>
      <ul className={s.productsUl}>
        {
          products?.map(product => (
            <ul key={product._id} className={s.productsUlLi}>
              <li><img src={product.image} alt="" width="30px" /></li> -
              <li>{product.title}</li> -
              <li>{product.price}</li> -
              <li>{product.description}</li> -
              <li><button className='button-nostyle'><img src={editIcon} alt="" height="20px" /></button></li> -
              <li><button className='button-nostyle'><img src={deleteIcon} alt="" height="20px" /></button></li>
            </ul>
          ))
        }
      </ul>
    </div>
  )
}
