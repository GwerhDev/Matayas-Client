import { Link } from "react-router-dom";
import { SignupGoogle } from "../components/SignupGoogle/SignupGoogle";
import { SignupInner } from "../components/SignupInner/SignupInner";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Register</h2>
        <SignupInner />
        Register with:
        <SignupGoogle />
        <div className="divider"/>
        <span className="auth-form-text">
          Have an account? Login here and get started with GustavoEduca today! <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Login;