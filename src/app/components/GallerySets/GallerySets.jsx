import s from './GallerySets.module.css';
import { GallerySetsCard } from "../GallerySetsCard/GallerySetsCard";

export const GallerySets = (props) => {
  const { gallery } = props || null;

  return (
    <div className={s.container}>
      <h1>Galería</h1>
      <p>Mantención, reparación de equipos</p>
      <ul className={s.galleryContainer}>
        {
          gallery?.map(product => {
            return (
              <GallerySetsCard
                key={product?._id}
                id={product?._id}
                title={product?.title}
                file={product?.file}
                description={product?.description}
              />
            )
          })
        }
      </ul>
    </div>
  )
}