import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Slider } from "../components/Slider/Slider";
import { Preloader } from "../components/Preloader/Preloader";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";
import { getLastGallery, resetGalleryDetails } from "../../middlewares/redux/actions/gallery";
import { HomeGallery } from "../components/HomeGallery/HomeGallery";
import { scrollToTop } from "../../functions";
import { HomeProducts } from "../components/HomeProducts/HomeProducts";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const lastGallery = useSelector(state => state.lastGallery);

  useEffect(() => {
    dispatch(resetGalleryDetails());
    dispatch(resetProductDetails());
    dispatch(getLastGallery());
    dispatch(getProducts());
    scrollToTop();
  }, [dispatch]);

  return (
    <div className="home-container">
      {
        products || lastGallery
          ?
          <>
            <Slider />
            <div className="page-container">
              <HomeGallery gallery={lastGallery} />
              <HomeProducts products={products} />
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