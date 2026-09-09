import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Products } from "../components/Products/Products";
import { useEffect } from "react";
import { ProductsSkeleton } from "../components/Skeleton/Skeleton";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";
import { scrollToTop } from "../../functions";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(resetProductDetails());
    dispatch(getProducts());
    scrollToTop();
  }, [dispatch]);

  return (
    <div className="page-container">
      {
        products
          ?
          <Products products={products} />
          :
          <ProductsSkeleton />
      }
      <div className="contact-methods">
        <ContactMethods />
      </div>
    </div>
  )
}

export default Shop;