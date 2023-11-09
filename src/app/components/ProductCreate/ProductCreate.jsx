import s from './ProductCreate.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../middlewares/redux/actions/admin';

export const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [gallery1, setGallery1] = useState(null);
  const [gallery2, setGallery2] = useState(null);
  const [gallery3, setGallery3] = useState(null);
  const [gallery4, setGallery4] = useState(null);
  const productGallery = [];

  function handleSubmit(e) {
    e.preventDefault();
    
    gallery1 && productGallery.push(gallery1);
    gallery2 && productGallery.push(gallery2);
    gallery3 && productGallery.push(gallery3);
    gallery4 && productGallery.push(gallery4);

    const formData = {
      image: featuredImage,
      title,
      price,
      description,
      productGallery
    }

    dispatch(createProduct(formData, navigate));
    return;
  }

  function handleGallery(e, index) {
    var fileInput = document.getElementById('fileInput' + index);
    fileInput.click();
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
          <input onInput={(e) => setPrice(e.target.value)} type="number" placeholder='Ej: $1.000 (CLP)' />
        </span>
        <span className={s.formTextarea}>
          <label htmlFor="Description">Descripción</label>
          <textarea className='resize-vertical' onInput={(e) => setDescription(e.target.value)} placeholder='Ej: En estricto rigor...' />
        </span>
        <span className={s.formGallery}>
          <label htmlFor="Gallery">Galería</label>
          <div className='d-flex g-1'>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 1)}>
              <input 
                type="file" 
                id="fileInput1" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery1(reader.result);
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery1 && "+" }
            </button>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 2)}>
              <input 
                type="file" 
                id="fileInput2" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery2(reader.result);
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery2 && "+" }
            </button>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery3})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 3)}>
              <input 
                type="file" 
                id="fileInput3" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery3(reader.result);
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery3 && "+" }
            </button>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery4})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 4)}>
              <input 
                type="file" 
                id="fileInput4" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery4(reader.result);
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery4 && "+" }
            </button>
          </div>
        </span>
        <div className='divider' />
        <div className={s.buttonsContainer}>
          <button onClick={handleSubmit}>Publicar</button>
        </div>
      </form>
    </div>
  )
}
