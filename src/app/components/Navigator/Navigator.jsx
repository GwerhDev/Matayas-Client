import s from './Navigator.module.css';
import logo from '../../../assets/png/matayas-logo-black.png';
import { Link } from 'react-router-dom';

export const Navigator = () => {
  return (
    <div className={s.navigatorContainer}>
      <nav>
        <Link to="/"><img src={logo} alt="" height="40px" /></Link>
        <ul>
          <Link to= "/"><li>INICIO</li></Link>                  |
          <Link to= "/store"><li>INVENTARIO</li></Link>         |
          <Link to= "/gallery"><li>GALERÍA DE FOTOS</li></Link> |
          <Link to= "/location"><li>UBICACIÓN</li></Link>       |
          <Link to= "/contact"><li>CONTACTO</li></Link>
        </ul>
        <div className={s.authContainer}>
          <Link to="/register" className={s.registerLink}>REGISTRARSE</Link>
          <Link to="/login"><button>INGRESAR</button></Link>
        </div>
      </nav>
    </div>
  )
}
