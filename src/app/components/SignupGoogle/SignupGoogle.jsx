import s from "./SignupGoogle.module.css";
import googleIcon from "../../../assets/png/google-icon.png";
import { URL_API } from "../../../middlewares/config";

export function SignupGoogle() {
  return (
    <div className={s.googleLoginContainer}>
      <a className={s.googleBtn} href={`${URL_API}/signup-google`}>
        <span className={s.spanIcon}>
          <img
            src={googleIcon}
            height="40px"
            className={s.googleImg}
            alt="Sign Up with Google"
          />
        </span>
        <span className={s.spanText}>
          Google
        </span>
      </a>
    </div>
  )
}
