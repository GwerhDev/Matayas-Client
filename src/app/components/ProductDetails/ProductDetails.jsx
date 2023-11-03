import s from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductDetails } from '../../../middlewares/redux/actions/products';
import { useParams } from 'react-router-dom';
import defaultImage from '../../../assets/png/default-image.png';
import { ProductComments } from '../ProductComments/ProductComments';
import { Preloader } from '../Preloader/Preloader';
import { ContactMethods } from '../ContactMethods/ContactMethods';

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productDetails = useSelector(state => state.productDetails);
  const { id } = params;
  const [visorImage, setVisorImage] = useState(null);

  useEffect(() => {
    dispatch(getProductDetails(id));
    setVisorImage(productDetails?.image);
  }, [dispatch, id, productDetails?.image])

  return (
    <>
      {
        productDetails ?
          <div className={s.container}>
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
              <ContactMethods/>
            </section>
          </div>
          : <Preloader/>
      }

    </>
  )
}
