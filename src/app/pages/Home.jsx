import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLastProducts, resetProductDetails } from "../../middlewares/redux/actions/products";
import { Slider } from "../components/Slider/Slider";
import { Preloader } from "../components/Preloader/Preloader";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";
import { getLastGallery, resetGalleryDetails } from "../../middlewares/redux/actions/gallery";
import { HomeGallery } from "../components/HomeGallery/HomeGallery";
import { scrollToTop } from "../../functions";
import { HomeProducts } from "../components/HomeProducts/HomeProducts";

const Home = () => {
  const dispatch = useDispatch();
  const lastProducts = useSelector(state => state.lastProducts);
  const lastGallery = useSelector(state => state.lastGallery);

  useEffect(() => {
    dispatch(resetGalleryDetails());
    dispatch(resetProductDetails());
    dispatch(getLastProducts());
    dispatch(getLastGallery());
    scrollToTop();
  }, [dispatch]);

  return (
    <div className="home-container">
      {
        lastProducts || lastGallery
          ?
          <div className="app-container">
            <Slider items={lastProducts} />
            <div className="page-container">
              <HomeGallery gallery={lastGallery} />
              <HomeProducts products={lastProducts} />
            </div>
          </div>
          :
          <Preloader />
      }
      <div className="contact-methods">
        <ContactMethods />
      </div>
    </div>
  )
}

export default Home;