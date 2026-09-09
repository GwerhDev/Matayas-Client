import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import defaultImage from '../../../assets/png/default-image.png';
import { updateProduct } from '../../../middlewares/redux/actions/admin';
import { getProductDetails } from '../../../middlewares/redux/actions/products';
import { AdminHeader } from '../admin/AdminHeader';
import { Spinner } from '../Spinner/Spinner';

export const ProductUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const productDetails = useSelector(state => state.productDetails);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [gallery, setGallery] = useState([null, null, null, null]);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!productDetails) return;
    setTitle(productDetails.title || '');
    setPrice(productDetails.price || '');
    setDescription(productDetails.description || '');
    setFeaturedImage(productDetails.image || null);
    const g = productDetails.productGallery || [];
    setGallery([g[0] || null, g[1] || null, g[2] || null, g[3] || null]);
  }, [productDetails]);

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
    dispatch(updateProduct({
      image: featuredImage,
      title,
      price,
      description,
      productGallery: gallery.filter(Boolean),
    }, id, navigate));
  }

  if (!productDetails) return <Spinner label="Cargando…" />;

  return (
    <div>
      <AdminHeader title="Editar producto">
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
          <label htmlFor="pu-title">Título</label>
          <input id="pu-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="pu-price">Precio (CLP)</label>
          <input id="pu-price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="pu-desc">Descripción</label>
          <textarea id="pu-desc" className="resize-vertical" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="field">
          <span className="field-label">Galería (hasta 4 imágenes)</span>
          <div className="thumb-picker">
            {gallery.map((img, i) => {
              const src = img?.file || img;
              return (
                <button key={i} type="button"
                  style={{ backgroundImage: src ? `url(${src})` : undefined }}
                  onClick={() => document.getElementById(`pu-gallery-${i}`).click()}>
                  {!src && '+'}
                  <input id={`pu-gallery-${i}`} type="file" accept="image/jpeg" hidden
                    onChange={(e) => readImage(e.target.files[0], (v) => setGalleryAt(i, { file: v }))} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="divider" />
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};
