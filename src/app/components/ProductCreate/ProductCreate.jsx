import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import defaultImage from '../../../assets/png/default-image.png';
import { createProduct } from '../../../middlewares/redux/actions/admin';
import { URL_API } from '../../../middlewares/config';
import { AdminHeader } from '../admin/AdminHeader';

export const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [gallery, setGallery] = useState([null, null, null, null]);

  function readImage(file, cb) {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => cb(reader.result);
    reader.readAsDataURL(file);
  }

  function setGalleryAt(i, value) {
    setGallery((prev) => prev.map((v, idx) => (idx === i ? value : v)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createProduct({
      image: featuredImage,
      title,
      price,
      description,
      productGallery: gallery.filter(Boolean),
    }, navigate));
  }

  return (
    <div>
      <AdminHeader title="Nuevo producto">
        <Link to="/admin/products/management" className="btn btn-ghost btn-sm">← Volver</Link>
      </AdminHeader>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="field">
          <span className="field-label">Imagen principal</span>
          <div className="image-drop">
            <img src={featuredImage || defaultImage} alt="" />
          </div>
          <input type="file" accept="image/jpeg"
            onChange={(e) => readImage(e.target.files[0], setFeaturedImage)} />
        </div>

        <div className="field">
          <label htmlFor="pc-title">Título</label>
          <input id="pc-title" type="text" placeholder="Ej: Electro-Harmonix 12AX7"
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="pc-price">Precio (CLP)</label>
          <input id="pc-price" type="number" placeholder="Ej: 28990"
            value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="pc-desc">Descripción</label>
          <textarea id="pc-desc" className="resize-vertical" rows="4"
            value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="field">
          <span className="field-label">Galería (hasta 4 imágenes)</span>
          <div className="thumb-picker">
            {gallery.map((img, i) => (
              <button key={i} type="button"
                style={{ backgroundImage: img ? `url(${img})` : undefined }}
                onClick={() => document.getElementById(`pc-gallery-${i}`).click()}>
                {!img && '+'}
                <input id={`pc-gallery-${i}`} type="file" accept="image/jpeg" hidden
                  onChange={(e) => readImage(e.target.files[0], (v) => setGalleryAt(i, v))} />
              </button>
            ))}
          </div>
        </div>

        <div className="divider" />
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Publicar</button>
          <a className="btn btn-ghost" target="_blank" rel="noreferrer"
            href={`${URL_API}/admin/post-instagram`}>Publicar en Instagram</a>
        </div>
      </form>
    </div>
  );
};
