/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { LoginGoogle } from "../components/LoginGoogle/LoginGoogle";
import { LoginInner } from "../components/LoginInner/LoginInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Ingresar</h2>
        <LoginInner />
        Ingresar usando:
        <LoginGoogle />
        <div className="divider"/>
        <span className="auth-form-text">
          No tienes una cuenta aún? Registrate aquí! <Link to="/register" className="link-to">Registrarse</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;