import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import defaultImage from '../../../assets/png/default-image.png';
import { createGallery } from '../../../middlewares/redux/actions/admin';
import { AdminHeader } from '../admin/AdminHeader';

export const GallerySetCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);

  function readImage(e, setter) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setter(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createGallery({ file: featuredImage, title, description }, navigate));
  }

  return (
    <div>
      <AdminHeader title="Nueva publicación">
        <Link to="/admin/gallery/management" className="btn btn-ghost btn-sm">← Volver</Link>
      </AdminHeader>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="field">
          <span className="field-label">Imagen</span>
          <div className="image-drop">
            <img src={featuredImage || defaultImage} alt="" />
          </div>
          <input type="file" accept="image/jpeg" onChange={(e) => readImage(e, setFeaturedImage)} />
        </div>

        <div className="field">
          <label htmlFor="gc-title">Título</label>
          <input id="gc-title" type="text" placeholder="Ej: Reparación Fender Bassman"
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="gc-desc">Descripción</label>
          <textarea id="gc-desc" className="resize-vertical" rows="4" placeholder="Detalle del trabajo…"
            value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="divider" />
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Publicar</button>
        </div>
      </form>
    </div>
  );
};
