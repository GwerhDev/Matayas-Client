import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Preloader } from "../components/Preloader/Preloader";
import { emailVerification } from "../../middlewares/redux/actions/auth";

const MailVerification = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  console.log(token);

  useEffect(() => {
    dispatch(emailVerification(token, navigate))
  }, [dispatch, token, navigate]);

  return (
    <div>
      <Preloader />
    </div>
  )
}

export default MailVerification;