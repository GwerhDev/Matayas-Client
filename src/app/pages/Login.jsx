import { Link } from "react-router-dom";
import { LoginGoogle } from "../components/LoginGoogle/LoginGoogle";
import { LoginInner } from "../components/LoginInner/LoginInner";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Ingresar</h2>
        <p className="auth-subtitle">Accede a tu cuenta de Amplificadores Matayas.</p>

        <LoginInner />

        <div className="auth-divider">o continúa con</div>
        <LoginGoogle />

        <div className="divider" />
        <span className="auth-form-text">
          ¿No tienes una cuenta? <Link to="/register" className="link-to">Regístrate</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
