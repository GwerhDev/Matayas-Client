import s from './GallerySetsCard.module.css';

export const GallerySetsCard = (props) => {
  const { file } = props ? props : null;

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className={s.cardContainer} onClick={handleClick}>
      <div className={s.imageContainer}>
        <img src={file} alt="product image" height="100%"/>
      </div>
    </div>
  )
}
