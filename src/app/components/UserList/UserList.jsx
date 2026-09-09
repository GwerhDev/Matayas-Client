import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../../middlewares/redux/actions/admin';
import { AdminHeader } from '../admin/AdminHeader';
import defaultImage from '../../../assets/png/default-image.png';

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <AdminHeader title="Usuarios">
        <Link to="/admin/dashboard" className="btn btn-ghost btn-sm">← Panel</Link>
      </AdminHeader>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Foto</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td className="cell-truncate">{user.email}</td>
                <td>
                  <img
                    className="thumb thumb-round"
                    src={user.profilePic || user.googlePic || defaultImage}
                    alt=""
                  />
                </td>
                <td>
                  <span className={`badge ${user.role === 'admin' ? 'badge-admin' : ''}`}>{user.role || '—'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users && users.length === 0 && <p className="admin-empty">No hay usuarios registrados.</p>}
        {!users && <p className="admin-empty">Cargando…</p>}
      </div>
    </div>
  );
};
