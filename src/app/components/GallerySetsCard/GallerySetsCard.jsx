import { useDispatch } from 'react-redux';
import { $display } from '../../../functions';
import { GalleryViewer } from '../GalleryViewer/GalleryViewer';
import s from './GallerySetsCard.module.css';
import { setGalleryViewer } from '../../../middlewares/redux/actions/gallery';

export const GallerySetsCard = (props) => {
  const dispatch = useDispatch();
  const { file } = props ? props : null;

  function handleClick(e) {
    e.preventDefault();
    $display("#gallery-viewer");
    dispatch(setGalleryViewer(file))
  }

  return (
    <div>
      <div className={s.cardContainer} onClick={handleClick}>
        <div className={s.imageContainer}>
          <img src={file} alt="product image" height="100%"/>
        </div>
      </div>
      <GalleryViewer />
    </div>
  )
}
