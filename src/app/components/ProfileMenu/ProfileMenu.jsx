import s from './ProfileMenu.module.css';
import { $d } from '../../../functions';
import { Link } from 'react-router-dom';

export const ProfileMenu = () => {
  document.addEventListener('mouseup', function (e) {
    const container = $d('#profile-menu-container');
    if (!container?.contains(e.target)) {
      return (
        $d('#profile-menu-container').style.display = 'none'
      )
    }
    return;
  });

  function handleLogout() {
    localStorage.removeItem('userToken');
    window.location.reload();
  }

  return (
    <ul className={s.profileMenuContainer} id='profile-menu-container'>
      <li><Link href='/profile/'>Perfil</Link></li>
      <li><Link href='/profile/'>Favoritos</Link></li>
      <div className='divider pad-0 mar-0'/>
      <li><button className='btn-logout' onClick={handleLogout}>Cerrar sesión</button></li>
    </ul>
  )
}
