import s from './GallerySetCreate.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';
import { useDispatch } from 'react-redux';
import { createGallery } from '../../../middlewares/redux/actions/admin';

export const GallerySetCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      file: featuredImage,
      title,
      description,
    }

    dispatch(createGallery(formData, navigate));
    return;
  }

  return (
    <div className={s.container}>
      <div className={s.optionsContainer}>
        <Link to="/admin/gallery/management"><button className="button-user-options">Volver</button></Link>
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
        <span className={s.formTextarea}>
          <label htmlFor="Description">Descripción</label>
          <textarea className='resize-vertical' onInput={(e) => setDescription(e.target.value)} placeholder='Ej: En estricto rigor...' />
        </span>
        <div className='divider' />
        <div className={s.buttonsContainer}>
          <button onClick={handleSubmit}>Publicar</button>
        </div>
      </form>
    </div>
  )
}
