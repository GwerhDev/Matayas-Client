import s from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductDetails } from '../../../middlewares/redux/actions/products';
import { useParams } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';
import phoneIcon from '../../../assets/svg/phone-icon.svg';
import whatsappIcon from '../../../assets/svg/whatsapp-icon.svg';
import instagramIcon from '../../../assets/svg/instagram-icon.svg';
import messengerIcon from '../../../assets/svg/messenger-icon.svg';
import mailIcon from '../../../assets/svg/mail-icon.svg';
import telegramIcon from '../../../assets/svg/telegram-icon.svg';
import { ProductComments } from '../ProductComments/ProductComments';
import { Preloader } from '../Preloader/Preloader';

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productDetails = useSelector(state => state.productDetails);
  const { id } = params;
  const [visorImage, setVisorImage] = useState(null);
  const phoneLink = "tel:56933451508";
  const mailLink = "mailto:info@amplificadoresmatayas.com";
  const whatsappLink = "https://api.whatsapp.com/send/?phone=56933451508&text&type=phone_number&app_absent=0";
  const instagramLink = "https://www.instagram.com/amplificadoresmatayas/";
  const messengerLink = "https://m.me/amplificadoresmatayas";
  const telegramLink = "https://t.me/amplificadoresmatayas";

  useEffect(() => {
    dispatch(getProductDetails(id));
    setVisorImage(productDetails?.image);
  }, [dispatch, id, productDetails?.image])

  return (
    <div className={s.container}>
      {
        productDetails ?
          <>
            <section className={s.gallerySection}>
              <ul className={s.galleryUl}>
                <li style={{ border: productDetails?.image === visorImage ? "white solid 1px" : "transparent" }} onClick={() => setVisorImage(productDetails?.image)}>
                  <img src={productDetails?.image || defaultImage} alt="1" width="100%" />
                </li>
                {
                  productDetails?.gallery?.map((e, index) => {
                    return (
                      <li style={{ border: productDetails?.image === e ? "white solid 1px" : "transparent" }} key={e} onClick={() => setVisorImage(e)}>
                        <img src={e} alt={index + 2} width="100%" />
                      </li>
                    )
                  })
                }
              </ul>
            </section>
            <section className={s.detailsSection}>
              <div className={s.mainImageContainer}>
                <img src={visorImage || defaultImage} width="100%" alt="" />
              </div>

              <div className='divider' />

              <h2>Descripción</h2>
              <p>{productDetails?.description}</p>

              <div className='divider' />

              {
                productDetails?.features &&
                <>
                  <h1>Características</h1>
                  <p>{productDetails?.features}</p>

                  <div className='divider' />
                </>
              }

              <ProductComments />

            </section>
            <section className={s.contactSection}>
              <h2><b>{productDetails?.title}</b></h2>
              <p>{"⭐".repeat(productDetails?.rate)}<span style={{ filter: 'grayscale(1)' }}>{"⭐".repeat(5 - productDetails?.rate)}</span></p>
              <h1>${productDetails?.price}</h1>

              <div className='divider' />
              <h2>Comprar</h2>
              <p>Método de contacto:</p>
              <span className={s.contactMethod}>
                <div className={s.imgContainer}>
                  <a href={phoneLink}><img src={phoneIcon} alt="" width="38px" height="38px" /></a>
                </div>
                <div className={s.imgContainer}>
                  <a target='_blank' rel='noreferrer' href={whatsappLink}><img src={whatsappIcon} alt="" width="38px" height="38px" /></a>
                </div>
                <div className={s.imgContainer}>
                  <a target='_blank' rel='noreferrer' href={instagramLink}><img src={instagramIcon} alt="" width="38px" height="38px" /></a>
                </div>
                <div className={s.imgContainer}>
                  <a target='_blank' rel='noreferrer' href={messengerLink}><img src={messengerIcon} alt="" width="38px" height="38px" /></a>
                </div>
                <div className={s.imgContainer}>
                  <a target='_blank' rel='noreferrer' href={telegramLink}><img src={telegramIcon} alt="" width="38px" height="38px" /></a>
                </div>
                <div className={s.imgContainer}>
                  <a href={mailLink}><img src={mailIcon} alt="" width="38px" height="38px" /></a>
                </div>
              </span>
            </section>
          </>
          : <Preloader position="static"/>
      }
    </div>
  )
}
