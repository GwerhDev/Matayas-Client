import { useId, useState } from 'react';
import s from './PasswordField.module.css';
import { Icon } from '../Icon/Icon';

/**
 * Campo de contraseña con botón de "ojo" para mostrar/ocultar el texto.
 * Reutiliza las clases globales `.field` / `.field-hint`.
 *
 * props: label, value, onChange, id?, name?, hint?, placeholder?, autoComplete?,
 *        labelRight? (nodo a la derecha de la etiqueta, p. ej. un enlace)
 */
export const PasswordField = (props) => {
  const {
    label,
    labelRight,
    value,
    onChange,
    id,
    name,
    hint,
    placeholder = '••••••••',
    autoComplete = 'current-password',
  } = props || {};

  const generatedId = useId();
  const fieldId = id || generatedId;
  const [show, setShow] = useState(false);

  return (
    <div className="field">
      {(label || labelRight) && (
        labelRight ? (
          <div className={s.labelRow}>
            {label && <label htmlFor={fieldId}>{label}</label>}
            {labelRight}
          </div>
        ) : (
          label && <label htmlFor={fieldId}>{label}</label>
        )
      )}
      <div className={s.wrap}>
        <input
          id={fieldId}
          name={name}
          type={show ? 'text' : 'password'}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={s.input}
        />
        <button
          type="button"
          className={s.toggle}
          onClick={() => setShow((v) => !v)}
          aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          aria-pressed={show}
          tabIndex={-1}
        >
          <Icon name={show ? 'eyeSlash' : 'eye'} />
        </button>
      </div>
      {hint && <span className="field-hint">{hint}</span>}
    </div>
  );
};
