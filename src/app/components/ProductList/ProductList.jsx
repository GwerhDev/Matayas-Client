import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, resetProductDetails } from '../../../middlewares/redux/actions/products';
import { deleteProduct } from '../../../middlewares/redux/actions/admin';
import { AdminHeader } from '../admin/AdminHeader';
import { Icon } from '../Icon/Icon';
import defaultImage from '../../../assets/png/default-image.png';

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(resetProductDetails());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteProduct(id));
    setConfirmId(null);
  }

  return (
    <div>
      <AdminHeader title="Productos">
        <Link to="/admin/dashboard" className="btn btn-ghost btn-sm"><Icon name="back" /> Panel</Link>
        <Link to="/admin/products/management/create" className="btn btn-primary btn-sm"><Icon name="plus" /> Crear producto</Link>
      </AdminHeader>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th className="col-actions">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(product => (
              <tr key={product._id}>
                <td><img className="thumb" src={product.image || defaultImage} alt="" /></td>
                <td>{product.title}</td>
                <td>${product?.price?.toLocaleString('es', { useGrouping: true })}</td>
                <td className="cell-truncate">{product.description}</td>
                <td className="col-actions">
                  {confirmId === product._id ? (
                    <span className="row-actions">
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>Eliminar</button>
                      <button className="btn btn-ghost btn-sm" onClick={() => setConfirmId(null)}>Cancelar</button>
                    </span>
                  ) : (
                    <span className="row-actions">
                      <Link to={`/admin/products/management/update/${product._id}`} className="btn btn-ghost btn-icon" aria-label="Editar">
                        <Icon name="edit" />
                      </Link>
                      <button className="btn btn-ghost btn-icon" aria-label="Eliminar" onClick={() => setConfirmId(product._id)}>
                        <Icon name="delete" />
                      </button>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products && products.length === 0 && <p className="admin-empty">Aún no hay productos. Crea el primero.</p>}
        {!products && <p className="admin-empty">Cargando…</p>}
      </div>
    </div>
  );
};
