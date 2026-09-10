import s from './HomeProducts.module.css';
import { ProductCard } from "../ProductsCard/ProductCard";
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

export const HomeProducts = (props) => {
  const { products } = props || null;

  return (
    <div className={s.container}>
      <Link to="/shop" className="section-link"><h1>Venta</h1><Icon name="arrowRight" /></Link>
      <p className="section-subtitle">Productos en venta</p>
      <ul className={s.productsContainer}>
        {
          products?.map(product => {
            return (
              <ProductCard
                key={product?._id}
                id={product?._id}
                title={product?.title}
                price={product?.price}
                image={product?.image}
                description={product?.description}
                category={product?.category}
                rate={product?.rate}
              />
            )
          })
        }
      </ul>
    </div>
  )
}
