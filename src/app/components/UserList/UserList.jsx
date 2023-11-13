import s from './UserList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../middlewares/redux/actions/admin';
import { Link } from 'react-router-dom';
import editIcon from '../../../assets/png/edit-icon.png';
import deleteIcon from '../../../assets/png/delete-icon.png';

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.optionsContainer}>
        <Link to="/admin/dashboard"><button className="button-user-options">Dashboard</button></Link>
      </div>
      <nav className={s.fieldsContainer}>
        <ul className={s.fieldsUl}>
          <li>Username</li> -
          <li>Email</li> -
          <li>Foto</li> -
          <li>Rol</li> -
          <li>Editar</li> -
          <li>Eliminar</li>
        </ul>
      </nav>
      <ul className={s.usersUl}>
        {
          users?.map(user => (
            <ul key={user._id} className={s.usersUlLi}>
              <li>{user.username}</li> -
              <li className={s.email}>{user.email}</li> -
              <li><img className={s.profilePic} src={user.profilePic || user.googlePic} alt="" height="40px" /></li> -
              <li>{user.role}</li> -
              <li><button className='button-nostyle'><img src={editIcon} alt="" height="20px" /></button></li> -
              <li><button className='button-nostyle'><img src={deleteIcon} alt="" height="20px" /></button></li>
            </ul>
          ))
        }
      </ul>
    </div>
  )
}
