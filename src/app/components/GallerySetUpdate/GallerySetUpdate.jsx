import s from './GallerySetUpdate.module.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateGallery } from '../../../middlewares/redux/actions/admin';
import { Preloader } from '../Preloader/Preloader';
import { getGalleryDetails } from '../../../middlewares/redux/actions/gallery';

export const GallerySetUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredFile, setFeaturedFile] = useState(null);
  const galleryDetails = useSelector(state => state.galleryDetails);

  function handleGallery(e) {
    e.preventDefault();
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      file: featuredFile,
      title,
      description,
    }

    dispatch(updateGallery(formData, id, navigate));
    return;
  }

  useEffect(() => {
    dispatch(getGalleryDetails(id));
    setTitle(galleryDetails?.title);
    setDescription(galleryDetails?.description);
    setFeaturedFile(galleryDetails?.file);
    return;
  }, [dispatch, id, galleryDetails?.title, galleryDetails?.price, galleryDetails?.description, galleryDetails?.file]);

  return (
    <>
      {
        galleryDetails
        ?
        <div className={s.container}>
          <div className={s.optionsContainer}>
            <Link to="/admin/gallery/management"><button className="button-user-options">Volver</button></Link>
            <Link to="/admin/dashboard"><button className="button-user-options">Dashboard</button></Link>
          </div>
          <form className="auth-form">
            <span className={s.formImage}>
              <label htmlFor="Image">Imagen principal</label>
              <img src={featuredFile || defaultImage} alt="" />
              <input
                type="file"
                style={{ cursor: 'pointer' }}
                name="imageSlider"
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFeaturedFile(reader.result);
                  }
                  reader.readAsDataURL(file);
                }}
              />
            </span>
            <span className={s.formSpan}>
              <label htmlFor="Title">Título</label>
              <input defaultValue={title} onInput={(e) => setTitle(e.target.value)} type="text" placeholder='Ej: sexo, drogas, rock n roll, etc.' />
            </span>
            <span className={s.formTextarea}>
              <label htmlFor="Description">Descripción</label>
              <textarea className='resize-vertical' defaultValue={description} onInput={(e) => setDescription(e.target.value)} placeholder='Ej: En estricto rigor...' />
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
            <button onClick={handleSubmit}>Actualizar</button>
          </form>
        </div>
        :
        <Preloader/>
      }
    </>
  )
}
