import s from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

export const ProductCard = (props) => {
  const { id, title, price, image, category, rating } = props ? props : null;
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(`/product/${id}`);
  }

  return (
    <div className={s.cardContainer}>
      <div className={s.imageContainer}>
        <img src={image} alt="product image" height="100%"/>
      </div>
      <ul className={s.data}>
        <li className={s.title}>{title}</li>
        <li className={s.price}>{price}</li>
      </ul>
      <p>{"⭐".repeat(rating)}<span style={{filter:'grayscale(1)'}}>{"⭐".repeat(5-rating)}</span></p>
      <button onClick={handleClick}>Ver más...</button>
      <p>{category}</p>
    </div>
  )
}
