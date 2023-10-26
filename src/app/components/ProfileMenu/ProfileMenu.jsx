import s from './ProfileMenu.module.css';
import { $d } from '../../../functions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { admin } from '../Utils/consts';

export const ProfileMenu = () => {
  const currentUser = useSelector(state => state.currentUser);

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
      <li><Link to={`/profile/${currentUser?.id}`}>Perfil</Link></li>
      <li><Link to='/my-favorites'>Favoritos</Link></li>
      {
        currentUser?.role === admin 
          ?  <li><Link to='/admin/dashboard'>Dashboard</Link></li>
          :  null
      }
      <div className='divider pad-0 mar-0'/>
      <li><button className='btn-logout' onClick={handleLogout}>Cerrar sesión</button></li>
    </ul>
  )
}
