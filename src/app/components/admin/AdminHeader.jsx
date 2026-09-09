/**
 * Encabezado estándar para las vistas de /admin: título + barra de acciones.
 * Uso: <AdminHeader title="Productos"><Link.../><button.../></AdminHeader>
 */
export const AdminHeader = (props) => {
  const { title, children } = props || {};
  return (
    <header className="admin-header">
      <h1>{title}</h1>
      {children ? <div className="admin-toolbar">{children}</div> : null}
    </header>
  );
};
