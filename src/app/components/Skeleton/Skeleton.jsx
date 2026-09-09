import s from './Skeleton.module.css';

/**
 * Bloque base de carga. Acepta ancho/alto/radio y estilos extra.
 */
export const Skeleton = (props) => {
  const { width, height, radius, className = '', style } = props || {};
  return (
    <span
      className={`${s.sk} ${className}`}
      style={{ width, height, borderRadius: radius, ...style }}
      aria-hidden="true"
    />
  );
};

/** Varias líneas de texto; la última más corta. */
export const SkeletonText = (props) => {
  const { lines = 3, lastWidth = '55%', lineHeight = 12 } = props || {};
  return (
    <span className={s.textBlock}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={lineHeight}
          width={i === lines - 1 ? lastWidth : '100%'}
        />
      ))}
    </span>
  );
};

const SectionHead = () => (
  <div className={s.sectionHead}>
    <Skeleton width="180px" height={34} />
    <Skeleton width="240px" height={13} />
  </div>
);

/* ---------- Tarjetas ---------- */

export const ProductCardSkeleton = () => (
  <div className={s.productCard}>
    <Skeleton className={s.productImage} />
    <Skeleton width="80%" height={12} />
    <Skeleton width="45%" height={20} />
  </div>
);

export const ProductGridSkeleton = (props) => {
  const { count = 6 } = props || {};
  return (
    <div className={s.productGrid} role="status" aria-label="Cargando productos">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const GalleryCardSkeleton = () => (
  <div className={s.galleryCard}>
    <Skeleton className={s.galleryImage} />
    <Skeleton width="70%" height={12} />
  </div>
);

export const GalleryGridSkeleton = (props) => {
  const { count = 6 } = props || {};
  return (
    <div className={s.galleryGrid} role="status" aria-label="Cargando galería">
      {Array.from({ length: count }).map((_, i) => (
        <GalleryCardSkeleton key={i} />
      ))}
    </div>
  );
};

/* ---------- Vistas completas ---------- */

export const ProductsSkeleton = (props) => {
  const { count = 6 } = props || {};
  return (
    <div>
      <SectionHead />
      <ProductGridSkeleton count={count} />
    </div>
  );
};

export const GallerySetsSkeleton = (props) => {
  const { count = 6 } = props || {};
  return (
    <div>
      <SectionHead />
      <GalleryGridSkeleton count={count} />
    </div>
  );
};

export const HomeSkeleton = () => (
  <div className={s.homeStack} role="status" aria-label="Cargando">
    <Skeleton className={s.slider} />
    <ProductsSkeleton count={3} />
    <GallerySetsSkeleton count={3} />
  </div>
);

export const ProductDetailsSkeleton = () => (
  <div className={s.detailsContainer} role="status" aria-label="Cargando producto">
    <div className={s.detailsThumbs}>
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className={s.detailsThumb} />
      ))}
    </div>
    <div className={s.detailsMain}>
      <Skeleton className={s.detailsImage} />
      <Skeleton width="60%" height={26} />
      <Skeleton width="30%" height={20} />
      <Skeleton width="40%" height={34} />
      <SkeletonText lines={4} />
    </div>
  </div>
);

export const ProfileHeaderSkeleton = () => (
  <div className={s.profile} role="status" aria-label="Cargando perfil">
    <Skeleton className={s.profileBanner} />
    <Skeleton className={s.profileAvatar} />
    <div className={s.profileData}>
      <Skeleton width="200px" height={26} />
      <Skeleton width="120px" height={14} />
    </div>
  </div>
);
