import s from './Navigator.module.css';
import logo from '../../../assets/png/matayas-logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { UserButton } from '../UserButton/UserButton';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigator = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={s.navContainerExt}>
      <div className={s.navigatorContainer}>
        <nav>
          <Link to="/"><img src={logo} alt="" height="40px" /></Link>
          <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/store"><li>Inventario</li></Link>
            <Link to="/gallery"><li>Galería de Fotos</li></Link>
            <Link to="/location"><li>Ubicación</li></Link>
            <Link to="/contact"><li>Contacto</li></Link>
          </ul>
          <div className={s.authContainer}>
            {
              currentUser
                ? <UserButton />
                : <>
                    <Link to="/register" className={s.registerLink}>REGISTRARSE</Link>
                    <Link to="/login"><button>INGRESAR</button></Link>
                  </>
            }
          </div>
        </nav>
        <UserMenu/>
      </div>
    </div>
  )
}
