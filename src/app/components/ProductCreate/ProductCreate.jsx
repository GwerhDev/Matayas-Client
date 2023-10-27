import s from './ProductCreate.module.css';
import { Link } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';

export const ProductCreate = () => {
  function handleSubmit(e) {
    e.preventDefault();
    return;
  }

  function handleGallery(e) {
    e.preventDefault();
    return;
  }

  return (
    <div className={s.container}>
      <div className={s.optionsContainer}>
        <Link to="/admin/products/management"><button className="button-user-options">Volver</button></Link>
        <Link to="/admin/dashboard"><button className="button-user-options">Dashboard</button></Link>
      </div>
      <form className="auth-form">
        <span className={s.formImage}>
          <label htmlFor="Image">Imagen principal</label>
          <img src={defaultImage} alt="" />
          <input type="file"/>
        </span>
        <span className={s.formSpan}>
          <label htmlFor="Title">Título</label>
          <input type="text" placeholder='Ej: sexo, drogas, rock n roll, etc.' />
        </span>
        <span className={s.formSpan}>
          <label htmlFor="Price">Precio</label>
          <input type="text" placeholder='Ej: $1.000 (CLP)' />
        </span>
        <span className={s.formTextarea}>
          <label htmlFor="Description">Descripción</label>
          <textarea placeholder='Ej: En estricto rigor...' />
        </span>
        <span className={s.formGallery}>
          <label htmlFor="Gallery">Galería</label>
          <div>
            <button type='default' onClick={handleGallery} className={s.addGallery}>
              +
            </button>
          </div>
        </span>
        <div className='divider'/>
        <button onClick={handleSubmit}>Publicar</button>
      </form>
    </div>
  )
}
