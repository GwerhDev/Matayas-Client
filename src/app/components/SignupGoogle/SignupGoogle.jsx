import s from "./SignupGoogle.module.css";
import { URL_API } from "../../../middlewares/config";
import { Icon } from "../Icon/Icon";

export function SignupGoogle() {
  return (
    <div className={s.googleLoginContainer}>
      <a className={s.googleBtn} href={`${URL_API}/signup-google`}>
        <span className={s.spanIcon}><Icon name="google" /></span>
        <span className={s.spanText}>Continuar con Google</span>
      </a>
    </div>
  );
}
