import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteGallery } from '../../../middlewares/redux/actions/admin';
import { getGallery, resetGalleryDetails } from '../../../middlewares/redux/actions/gallery';
import { AdminHeader } from '../admin/AdminHeader';
import { Icon } from '../Icon/Icon';
import defaultImage from '../../../assets/png/default-image.png';

export const GalleryList = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    dispatch(getGallery());
    dispatch(resetGalleryDetails());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteGallery(id));
    setConfirmId(null);
  }

  return (
    <div>
      <AdminHeader title="Galería">
        <Link to="/admin/dashboard" className="btn btn-ghost btn-sm"><Icon name="back" /> Panel</Link>
        <Link to="/admin/gallery/management/create" className="btn btn-primary btn-sm"><Icon name="plus" /> Nueva publicación</Link>
      </AdminHeader>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Archivo</th>
              <th>Título</th>
              <th>Descripción</th>
              <th className="col-actions">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {gallery?.map(elem => (
              <tr key={elem._id}>
                <td><img className="thumb" src={elem.file || defaultImage} alt="" /></td>
                <td>{elem.title}</td>
                <td className="cell-truncate">{elem.description}</td>
                <td className="col-actions">
                  {confirmId === elem._id ? (
                    <span className="row-actions">
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(elem._id)}>Eliminar</button>
                      <button className="btn btn-ghost btn-sm" onClick={() => setConfirmId(null)}>Cancelar</button>
                    </span>
                  ) : (
                    <span className="row-actions">
                      <Link to={`/admin/gallery/management/update/${elem._id}`} className="btn btn-ghost btn-icon" aria-label="Editar">
                        <Icon name="edit" />
                      </Link>
                      <button className="btn btn-ghost btn-icon" aria-label="Eliminar" onClick={() => setConfirmId(elem._id)}>
                        <Icon name="delete" />
                      </button>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {gallery && gallery.length === 0 && <p className="admin-empty">Aún no hay publicaciones en la galería.</p>}
        {!gallery && <p className="admin-empty">Cargando…</p>}
      </div>
    </div>
  );
};
