import { Link } from "react-router-dom";
import { SignupGoogle } from "../components/SignupGoogle/SignupGoogle";
import { SignupInner } from "../components/SignupInner/SignupInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Registrarse</h2>
        <SignupInner />
        Registrarse con:
        <SignupGoogle />
        <div className="divider"/>
        <span className="auth-form-text">
          Tienes una cuenta? Ingresa aquí <Link to="/login" className="link-to">Ingresar</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;