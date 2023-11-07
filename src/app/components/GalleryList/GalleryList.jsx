import s from './GalleryList.module.css';
import { Link } from 'react-router-dom';
import editIcon from '../../../assets/png/edit-icon.png';
import deleteIcon from '../../../assets/png/delete-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { $gId } from '../../../functions';
import { useEffect } from 'react';
import { deleteGallery } from '../../../middlewares/redux/actions/admin';
import { getGallery, resetGalleryDetails } from '../../../middlewares/redux/actions/gallery';

export const GalleryList = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteGallery(id));
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
    dispatch(getGallery());
    dispatch(resetGalleryDetails());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.optionsContainer}>
        <Link to="/admin/dashboard"><button className="button-user-options">Dashboard</button></Link>
        <Link to="/admin/gallery/management/create"><button className="button-user-options">Crear</button></Link>
      </div>
      <nav className={s.fieldsContainer}>
        <ul className={s.fieldsUl}>
          <li>Archivo</li> -
          <li>Título</li> -
          <li>Descripción</li> -
          <li>Editar</li> -
          <li>Eliminar</li>
        </ul>
      </nav>
      <ul className={s.productsUl}>
        {
          gallery?.map(elem => (
            <ul key={elem._id} className={s.productsUlLi}>
              <li><img src={elem.file} alt="" width="30px" /></li> -
              <li>{elem.title}</li> -
              <li>{elem.price}</li> -
              <li>{elem.description}</li> -
              <li>
                <Link to={`/admin/gallery/management/update/${elem._id}`}>
                  <button className='button-nostyle'>
                    <img src={editIcon} alt="" height="20px" />
                  </button>
                </Link>
              </li> -
              <li>
                <button id={`delete-${elem._id}`} onClick={(e) => handleDeleteOptions(e, elem._id, true)} className='button-nostyle'>
                  <img src={deleteIcon} alt="" height="20px" />
                </button>
                <div className={s.deleteOptionsContainer} id={`check-delete-${elem._id}`}>
                  <button onClick={(e) => handleDelete(e, elem._id)}>✔️</button>
                  <button onClick={(e) => handleDeleteOptions(e, elem._id, false)}>❌</button>
                </div>
              </li>
            </ul>
          ))
        }
      </ul>
    </div>  
  )
}
