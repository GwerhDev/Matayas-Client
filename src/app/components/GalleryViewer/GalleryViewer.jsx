import { useSelector } from 'react-redux';
import { $display } from '../../../functions';
import s from './GalleryViewer.module.css';

export const GalleryViewer = () => {
  const galleryViewer = useSelector(state => state.galleryViewer);

  function handleDisplay() {
    $display("#gallery-viewer");
  }

  return (
    <div className={s.container} id='gallery-viewer' onClick={handleDisplay}>
      <img src={ galleryViewer || null } alt="" width="80%" />
    </div>
  )
}
