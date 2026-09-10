import s from './Products.module.css';
import { ProductCard } from "../ProductsCard/ProductCard";
import { formattedPrice } from '../../../functions';

export const Products = (props) => {
  const { products } = props || null;

  return (
    <div className={s.container}>
      <h1>Venta</h1>
      <p className="section-subtitle">Productos en venta</p>
      <ul className={s.productsContainer}>
        {
          products?.map(product => {
            return (
              <ProductCard
                key={product?._id}
                id={product?._id}
                title={product?.title}
                price={formattedPrice(product?.price)}
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
