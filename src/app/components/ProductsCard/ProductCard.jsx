import s from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

export const ProductCard = (props) => {
  const { id, title, price, image, category } = props ? props : null;
  const navigate = useNavigate();

  const formattedPrice = price.toLocaleString('es', {
    useGrouping: true,
  });

  function handleClick(e) {
    e.preventDefault();
    navigate(`/product/${id}`);
  }

  return (
    <div className={s.cardContainer} onClick={handleClick}>
      <div className={s.imageContainer}>
        <img src={image} alt="product image" height="100%"/>
      </div>
      <ul className={s.data}>
        <li className={s.title}>{title}</li>
        <li className={s.price}><h2>${formattedPrice}</h2></li>
      </ul>
      <p>{category}</p>
    </div>
  )
}
