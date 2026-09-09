import s from './UserMenu.module.css';
import { $d } from '../../../functions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { admin } from '../Utils/consts';
import { logout } from '../../../middlewares/redux/actions/auth';

export const UserMenu = () => {
  const currentUser = useSelector(state => state.currentUser);

  document.addEventListener('mouseup', function (e) {
    const container = $d('#profile-menu-container');
    if (!container?.contains(e.target)) {
      return (
        $d('#profile-menu-container').style.display = 'none'
      );
    }
    return;
  });

  function handleClick() {
    $d('#profile-menu-container').style.display = 'none';
  }

  return (
    <ul className={s.profileMenuContainer} id='profile-menu-container'>
      {currentUser ? (
        <>
          <li><Link className={s.linkOption} onClick={handleClick} to={`/profile/${currentUser?.id}`}>Perfil</Link></li>
          {currentUser?.role === admin && (
            <li><Link className={s.linkOption} onClick={handleClick} to='/admin/dashboard'>Panel de administración</Link></li>
          )}
          <div className='divider pad-0 mar-0' />
          <li><button className="btn btn-ghost btn-sm btn-block" onClick={logout}>Cerrar sesión</button></li>
        </>
      ) : (
        <div className={s.authButtons}>
          <Link to="/login" className="btn btn-primary btn-sm btn-block" onClick={handleClick}>Ingresar</Link>
          <Link to="/register" className="btn btn-ghost btn-sm btn-block" onClick={handleClick}>Registrarse</Link>
        </div>
      )}
    </ul>
  );
};
