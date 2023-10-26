import { Link } from 'react-router-dom';
import s from './AdminBoard.module.css';

export const AdminBoard = () => {
  return (
    <form className={s.container}>
      <h1>Dashboard</h1>
      <Link to="/admin/users-management" className={s.options}>Administrar usuarios</Link>
      <Link to="/admin/products-management" className={s.options}>Administrar productos</Link>
    </form>
  )
}
