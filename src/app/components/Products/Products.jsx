import s from './Products.module.css';
import { ProductCard } from "../ProductsCard/ProductCard";
import { useSelector } from 'react-redux';

export const Products = () => {
  const products = useSelector(state => state.products)

  return (
    <div className={s.productsContainer}>
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
    </div>
  )
}
