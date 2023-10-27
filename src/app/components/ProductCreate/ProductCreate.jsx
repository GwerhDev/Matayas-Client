import { useState } from 'react';
import s from './ProductCreate.module.css';
import { Link } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';

export const ProductCreate = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);

  function handleGallery(e) {
    e.preventDefault();
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      image: featuredImage,
      title,
      price,
      description,
    }

    console.log(formData);
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
          <img src={featuredImage || defaultImage} alt="" />
          <input
            type="file"
            style={{ cursor: 'pointer' }}
            name="imageSlider"
            accept="image/jpeg"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setFeaturedImage(reader.result);
              }
              reader.readAsDataURL(file);
            }}
          />
        </span>
        <span className={s.formSpan}>
          <label htmlFor="Title">Título</label>
          <input onInput={(e) => setTitle(e.target.value)} type="text" placeholder='Ej: sexo, drogas, rock n roll, etc.' />
        </span>
        <span className={s.formSpan}>
          <label htmlFor="Price">Precio</label>
          <input onInput={(e) => setPrice(e.target.value)} type="text" placeholder='Ej: $1.000 (CLP)' />
        </span>
        <span className={s.formTextarea}>
          <label htmlFor="Description">Descripción</label>
          <textarea onInput={(e) => setDescription(e.target.value)} placeholder='Ej: En estricto rigor...' />
        </span>
        <span className={s.formGallery}>
          <label htmlFor="Gallery">Galería</label>
          <div>
            <button type='default' onClick={handleGallery} className={s.addGallery}>
              +
            </button>
          </div>
        </span>
        <div className='divider' />
        <button onClick={handleSubmit}>Publicar</button>
      </form>
    </div>
  )
}
