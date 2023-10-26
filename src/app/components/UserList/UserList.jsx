import s from './UserList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../middlewares/redux/actions/admin';

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  return (
    <nav className={s.fieldsContainer}>
      <ul className={s.fieldsUl}>
        <li>Username</li> -
        <li>Email</li> -
        <li>Foto</li> -
        <li>Rol</li> -
        <li>Editar</li> -
        <li>Eliminar</li>
      </ul>
      <ul className={s.usersUl}>
        {
          users?.map(user => (
            <li key={user._id}>
              <li>{user.username}</li> -
              <li>{user.email}</li> -
              <li><img src={user.profilePic} alt="" /></li> -
              <li>{user.role}</li> -
              <li></li> -
              <li></li>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
