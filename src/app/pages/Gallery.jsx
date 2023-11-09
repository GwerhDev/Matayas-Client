import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGallery, resetGalleryDetails } from "../../middlewares/redux/actions/gallery";
import { Preloader } from "../components/Preloader/Preloader";
import { GallerySets } from "../components/GallerySets/GallerySets";
import { ContactMethods } from "../components/ContactMethods/ContactMethods";
import { scrollToTop } from "../../functions";

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery);

  useEffect(() => {
    dispatch(resetGalleryDetails());
    dispatch(getGallery());
    scrollToTop();
  }, [dispatch]);

  return (
    <div className="page-container">
      {
        gallery
          ?
          <GallerySets gallery={gallery} />
          :
          <Preloader />
      }
      <div className="contact-methods">
        <ContactMethods />
      </div>
    </div>
  )
}

export default Gallery;