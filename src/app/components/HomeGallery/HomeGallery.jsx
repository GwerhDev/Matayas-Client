import s from './HomeGallery.module.css';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

export const HomeGallery = (props) => {
  const { gallery } = props || null;

  return (
    <div className={s.container}>
      <Link to="/gallery" className="section-link"><h1>Galería</h1><Icon name="arrowRight" /></Link>
      <p className="section-subtitle">Mantención, reparación de equipos</p>
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
