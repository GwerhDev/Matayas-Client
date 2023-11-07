import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGallery, resetGalleryDetails } from "../../middlewares/redux/actions/gallery";
import { Preloader } from "../components/Preloader/Preloader";
import { GallerySets } from "../components/GallerySets/GallerySets";

const Gallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery);

  useEffect(() => {
    dispatch(resetGalleryDetails());
    dispatch(getGallery());
  }, [dispatch]);

  return (
    <div className="page-container">
      {
        gallery
        ?
        <GallerySets gallery={gallery} />
        :
        <Preloader/>
      }
    </div>
  )
}

export default Gallery;