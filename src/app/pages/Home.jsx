import { useEffect } from "react";
import { Products } from "../components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Slider } from "../components/Slider/Slider";
import { Preloader } from "../components/Preloader/Preloader";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(resetProductDetails());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home-container">
      {
        products
          ?
          <>
            <Slider />
            <div className="page-container">
              <Products products={products} />
            </div>
          </>
          :
          <Preloader/>
      }
      <div className="contact-methods">
        <ContactMethods/>
      </div>
    </div>
  )
}

export default Home;