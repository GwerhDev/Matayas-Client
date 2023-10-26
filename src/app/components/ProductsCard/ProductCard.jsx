import s from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

export const ProductCard = (props) => {
  const { id, title, price, image, description, category, rating } = props ? props : null;
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(`/product/${id}`);
  }

  return (
    <div className={s.cardContainer}>
      <div className={s.imageContainer}>
        <img src={image} alt="product image" width="100%"/>
      </div>
      <h3>{price}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{"⭐".repeat(rating)}<span style={{filter:'grayscale(1)'}}>{"⭐".repeat(5-rating)}</span></p>
      <button onClick={handleClick}>Ver más...</button>
      <p>{category}</p>
    </div>
  )
}
