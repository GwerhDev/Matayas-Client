import { ProductCard } from "../components/ProductsCard/ProductCard";

const Home = () => {
  return (
    <div className="page-container">
      <ProductCard 
        name='Test product' 
        id='1263128912893120' 
        price='$1.000.000' 
        image='' 
        description='Amplifier test' 
        category='amps' 
        rating={5}
      />
    </div>
  )
}

export default Home;