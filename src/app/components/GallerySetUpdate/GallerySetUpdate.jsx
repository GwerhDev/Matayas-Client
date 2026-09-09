import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import defaultImage from '../../../assets/png/default-image.png';
import { updateGallery } from '../../../middlewares/redux/actions/admin';
import { getGalleryDetails } from '../../../middlewares/redux/actions/gallery';
import { AdminHeader } from '../admin/AdminHeader';
import { Spinner } from '../Spinner/Spinner';

export const GallerySetUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const galleryDetails = useSelector(state => state.galleryDetails);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredFile, setFeaturedFile] = useState(null);

  useEffect(() => {
    dispatch(getGalleryDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!galleryDetails) return;
    setTitle(galleryDetails.title || '');
    setDescription(galleryDetails.description || '');
    setFeaturedFile(galleryDetails.file || null);
  }, [galleryDetails]);

  function readImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setFeaturedFile(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateGallery({ file: featuredFile, title, description }, id, navigate));
  }

  if (!galleryDetails) return <Spinner label="Cargando…" />;

  return (
    <div>
      <AdminHeader title="Editar publicación">
        <Link to="/admin/gallery/management" className="btn btn-ghost btn-sm">← Volver</Link>
      </AdminHeader>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="field">
          <span className="field-label">Imagen</span>
          <div className="image-drop">
            <img src={featuredFile || defaultImage} alt="" />
          </div>
          <input type="file" accept="image/jpeg" onChange={readImage} />
        </div>

        <div className="field">
          <label htmlFor="gu-title">Título</label>
          <input id="gu-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="gu-desc">Descripción</label>
          <textarea id="gu-desc" className="resize-vertical" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="divider" />
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};
