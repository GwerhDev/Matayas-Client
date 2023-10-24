import { useNavigate } from 'react-router-dom';
import s from './ProductCard.module.css';

export const ProductCard = (props) => {
  const { id, name, price, image, description, category, rating } = props ? props : null;
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
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{"⭐".repeat(rating)}</p>
      <button onClick={handleClick}>Ver más</button>
      <p>{category}</p>
    </div>
  )
}
