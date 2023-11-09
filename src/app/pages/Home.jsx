import { useEffect } from "react";
import { Products } from "../components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Slider } from "../components/Slider/Slider";
import { Preloader } from "../components/Preloader/Preloader";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";
import { getGallery, resetGalleryDetails } from "../../middlewares/redux/actions/gallery";
import { HomeGallery } from "../components/HomeGallery/HomeGallery";
import { scrollToTop } from "../../functions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const gallery = useSelector(state => state.gallery);

  useEffect(() => {
    dispatch(resetGalleryDetails());
    dispatch(resetProductDetails());
    dispatch(getGallery());
    dispatch(getProducts());
    scrollToTop();
  }, [dispatch]);

  return (
    <div className="home-container">
      {
        products || gallery
          ?
          <>
            <Slider />
            <div className="page-container">
              <HomeGallery gallery={gallery} />
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