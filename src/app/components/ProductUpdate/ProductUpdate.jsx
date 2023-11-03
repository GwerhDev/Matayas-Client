import s from './ProductUpdate.module.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../../middlewares/redux/actions/admin';
import { getProductDetails } from '../../../middlewares/redux/actions/products';
import { Preloader } from '../Preloader/Preloader';

export const ProductUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const productDetails = useSelector(state => state.productDetails);

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

    dispatch(updateProduct(formData, id, navigate));
    return;
  }

  useEffect(() => {
    dispatch(getProductDetails(id));
    setTitle(productDetails?.title)
    setPrice(productDetails?.price)
    setDescription(productDetails?.description)
    setFeaturedImage(productDetails?.image)
    return;
  }, [dispatch, id, productDetails?.title, productDetails?.price, productDetails?.description, productDetails?.image]);

  return (
    <>
      {
        productDetails
        ?
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
              <input defaultValue={title} onInput={(e) => setTitle(e.target.value)} type="text" placeholder='Ej: sexo, drogas, rock n roll, etc.' />
            </span>
            <span className={s.formSpan}>
              <label htmlFor="Price">Precio</label>
              <input defaultValue={price} onInput={(e) => setPrice(e.target.value)} type="number" placeholder='Ej: $1.000 (CLP)' />
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
