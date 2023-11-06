import { Link } from 'react-router-dom';
import s from './AdminBoard.module.css';

export const AdminBoard = () => {
  return (
    <form className={s.container}>
      <h2 className="page-title">Dashboard</h2>
      <Link to="/admin/users/management" className={s.options}>Administrar usuarios</Link>
      <Link to="/admin/products/management" className={s.options}>Administrar productos</Link>
      <Link to="/admin/gallery/management" className={s.options}>Administrar galería</Link>
    </form>
  )
}
