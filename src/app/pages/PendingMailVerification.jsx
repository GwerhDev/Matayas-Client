import { Link } from "react-router-dom";

const PendingMailVerification = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Verifica tu correo</h2>
        <p className="auth-subtitle">
          Te enviamos un correo electrónico. Revisa tu bandeja de entrada y sigue
          las instrucciones para activar tu cuenta.
        </p>
        <div className="divider" />
        <span className="auth-form-text">
          <Link to="/login" className="link-to">Volver a Ingresar</Link>
        </span>
      </div>
    </div>
  );
};

export default PendingMailVerification;
