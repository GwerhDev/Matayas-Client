import s from './ProductList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, resetProductDetails } from '../../../middlewares/redux/actions/products';
import editIcon from '../../../assets/png/edit-icon.png';
import deleteIcon from '../../../assets/png/delete-icon.png';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../../middlewares/redux/actions/admin';
import { $gId } from '../../../functions';

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteProduct(id));
    return;
  }

  function handleDeleteOptions(e, id, value) {
    e.preventDefault();
    if (value) {
      $gId(`delete-${id}`).style.display = 'none';
      $gId(`check-delete-${id}`).style.display = 'flex';
    } else {
      $gId(`delete-${id}`).style.display = 'flex';
      $gId(`check-delete-${id}`).style.display = 'none';
    }
  }

  useEffect(() => {
    dispatch(getProducts());
    dispatch(resetProductDetails());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.optionsContainer}>
        <Link to="/admin/dashboard"><button className="button-user-options">Dashboard</button></Link>
        <Link to="/admin/products/management/create"><button className="button-user-options">Crear</button></Link>
      </div>
      <nav className={s.fieldsContainer}>
        <ul className={s.fieldsUl}>
          <li>Foto</li> -
          <li>Título</li> -
          <li>Precio</li> -
          <li>Descripción</li> -
          <li>Editar</li> -
          <li>Eliminar</li>
        </ul>
      </nav>
      <ul className={s.productsUl}>
        {
          products?.map(product => {
            const formattedPrice = product?.price.toLocaleString('es', {
              useGrouping: true,
            });
            return (
              <ul key={product._id} className={s.productsUlLi}>
                <li><img src={product.image} alt="" width="30px" /></li> -
                <li>{formattedPrice}</li> -
                <li>{product.price}</li> -
                <li>{product.description}</li> -
                <li>
                  <Link to={`/admin/products/management/update/${product._id}`}>
                    <button className='button-nostyle'>
                      <img src={editIcon} alt="" height="20px" />
                    </button>
                  </Link>
                </li> -
                <li>
                  <button id={`delete-${product._id}`} onClick={(e) => handleDeleteOptions(e, product._id, true)} className='button-nostyle'>
                    <img src={deleteIcon} alt="" height="20px" />
                  </button>
                  <div className={s.deleteOptionsContainer} id={`check-delete-${product._id}`}>
                    <button onClick={(e) => handleDelete(e, product._id)}>✔️</button>
                    <button onClick={(e) => handleDeleteOptions(e, product._id, false)}>❌</button>
                  </div>
                </li>
              </ul>
            )
          })
        }
      </ul>
    </div>
  )
}
