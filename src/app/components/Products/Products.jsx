import s from './Products.module.css';
import { ProductCard } from "../ProductsCard/ProductCard";

export const Products = () => {
  return (
    <div className={s.productsContainer}>
      <ProductCard
        id='1263128912893120'
        title='Test product'
        price='$1.000.000'
        image='https://www.randallamplifiers.com/wp-content/uploads/sites/9/2019/08/kh120RHS.jpg'
        description='Amplifier test'
        category='amps'
        rating={3}
      />
    </div>
  )
}
