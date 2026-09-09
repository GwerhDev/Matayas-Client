import s from './Spinner.module.css';

export const Spinner = (props) => {
  const { label } = props || {};
  return (
    <div className={s.wrap} role="status" aria-label={label || 'Cargando'}>
      <span className={s.ring} aria-hidden="true" />
      {label && <span className={s.label}>{label}</span>}
    </div>
  );
};
