import { Link } from 'react-router-dom';
import s from './AdminBoard.module.css';
import { AdminHeader } from '../admin/AdminHeader';

const sections = [
  { to: '/admin/products/management', title: 'Productos', desc: 'Crear, editar y eliminar productos de la tienda.' },
  { to: '/admin/gallery/management', title: 'Galería', desc: 'Administrar los trabajos y reparaciones publicados.' },
  { to: '/admin/users/management', title: 'Usuarios', desc: 'Ver las cuentas registradas y sus roles.' },
];

export const AdminBoard = () => {
  return (
    <div>
      <AdminHeader title="Panel de administración" />
      <div className={s.grid}>
        {sections.map((sec) => (
          <Link key={sec.to} to={sec.to} className={s.card}>
            <h3>{sec.title}</h3>
            <p>{sec.desc}</p>
            <span className={s.cta}>Administrar →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
