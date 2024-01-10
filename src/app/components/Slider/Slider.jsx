import s from './Slider.module.css';
import matayasLogo from '../../../assets/svg/matayas-logo.svg';
import { useEffect, useState } from 'react';
import { $d, formattedPrice } from '../../../functions';
import { Link } from 'react-router-dom';

export const Slider = (props) => {
  const { items } = props || null;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    $d("#slider-container").style.transform = `translateX(${-index * 100}vw)`;

    if(index === 0) {
      $d("#slider-container").style.transitionDuration = `0s`;
    } else {
      $d("#slider-container").style.transitionDuration = `1s`;
    }

    interval = setInterval(() => {
      setIndex((index + 1) % (items?.length + 1));
    }, 5000);

    return () => (clearInterval(interval));
  }, [index, items]);

  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        {
          items
            ?
            <div className={s.sliderContainer} id="slider-container">
              <div className={s.sliderCard}>
                <img className={s.logo} src={matayasLogo} alt="logo matayas" />
                <p className={s.text}>Fabricación, modificación y reparación de amplificadores a tubos</p>
              </div>
              {
                items.map((item, i) => {
                  return (
                    <Link to={`/product/${item._id}`} key={i} className={s.background} id='slide'>
                      <div>
                        <h2 className={s.titleText}>{item.title}</h2>
                        <h1 className={s.priceText}>${formattedPrice(item.price)}</h1>
                      </div>
                      <img className={s.imageSlider} key={i} src={item.image} height="100%" />
                    </Link>
                  )
                })
              }
            </div>
            :
            <>
              <img className={s.logo} src={matayasLogo} alt="logo matayas" />
              <p className={s.text}>Fabricación, modificación y reparación de amplificadores a tubos</p>
            </>
        }
      </div>
    </div>
  )
}
