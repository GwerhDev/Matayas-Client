import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner";
import { emailVerification } from "../../middlewares/redux/actions/auth";

const MailVerification = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  useEffect(() => {
    dispatch(emailVerification(token, navigate))
  }, [dispatch, token, navigate]);

  return (
    <div className="auth-container">
      <Spinner label="Verificando tu correo…" />
    </div>
  )
}

export default MailVerification;