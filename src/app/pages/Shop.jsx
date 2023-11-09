import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Products } from "../components/Products/Products";
import { useEffect } from "react";
import { Preloader } from "../components/Preloader/Preloader";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(resetProductDetails());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="page-container">
      {
        products
          ?
          <Products products={products} />
          :
          <Preloader />
      }
      <div className="contact-methods">
        <ContactMethods />
      </div>
    </div>
  )
}

export default Shop;