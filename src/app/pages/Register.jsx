import { Link } from "react-router-dom";
import { SignupGoogle } from "../components/SignupGoogle/SignupGoogle";
import { SignupInner } from "../components/SignupInner/SignupInner";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Crear cuenta</h2>
        <p className="auth-subtitle">Regístrate para comprar y seguir tus pedidos.</p>

        <SignupInner />

        <div className="auth-divider">o regístrate con</div>
        <SignupGoogle />

        <div className="divider" />
        <span className="auth-form-text">
          ¿Ya tienes una cuenta? <Link to="/login" className="link-to">Ingresar</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
