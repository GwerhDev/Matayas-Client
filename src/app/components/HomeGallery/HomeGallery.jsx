import s from './HomeGallery.module.css';
import { Link } from 'react-router-dom';

export const HomeGallery = (props) => {
  const { gallery } = props || null;

  return (
    <div className={s.container}>
      <Link to="/gallery"><h1>Galería</h1></Link>
      <p>Mantención, reparación de equipos</p>
      <ul>
        {
          gallery?.map(e => (
            <li key={e._id}>
              <Link to="/gallery"><img src={e.file} alt="gallery" width={"100%"} /></Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
