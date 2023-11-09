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
  const productDetails = useSelector(state => state.productDetails);
  const { id } = params;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [gallery1, setGallery1] = useState(null);
  const [gallery2, setGallery2] = useState(null);
  const [gallery3, setGallery3] = useState(null);
  const [gallery4, setGallery4] = useState(null);
  const productGallery = [];

  function handleGallery(e, index) {
    var fileInput = document.getElementById('fileInput' + index);
    fileInput.click();
  }

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

    dispatch(updateProduct(formData, id, navigate));
    return;
  }

  useEffect(() => {
    dispatch(getProductDetails(id));
    setTitle(productDetails?.title);
    setPrice(productDetails?.price);
    setDescription(productDetails?.description);
    setFeaturedImage(productDetails?.image);
    return;
  }, [dispatch, id, productDetails?.title, productDetails?.price, productDetails?.description, productDetails?.image]);

  useEffect(() => {
    setGallery1(productDetails?.productGallery[0]);
    setGallery2(productDetails?.productGallery[1]);
    setGallery3(productDetails?.productGallery[2]);
    setGallery4(productDetails?.productGallery[3]);
  }, [productDetails?.productGallery])

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
              <div className='d-flex g-1'>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery1?.file})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 1)}>
              <input 
                type="file" 
                id="fileInput1" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery1({file: reader.result});
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery1?.file && "+" }
            </button>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery2?.file})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 2)}>
              <input 
                type="file" 
                id="fileInput2" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery2({file: reader.result});
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery2?.file && "+" }
            </button>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery3?.file})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 3)}>
              <input 
                type="file" 
                id="fileInput3" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery3({file: reader.result});
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery3?.file && "+" }
            </button>
            <button type='button' className={s.addGallery} style={{backgroundImage: `url(${gallery4?.file})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center "}} onClick={(e) => handleGallery(e, 4)}>
              <input 
                type="file" 
                id="fileInput4" 
                style={{display: "none"}} 
                accept="image/jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setGallery4({file: reader.result});
                  }
                  reader.readAsDataURL(file);
                }}
              />
              { !gallery4?.file && "+" }
            </button>
          </div>            </span>
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
