import s from "./LoginGoogle.module.css";
import { URL_API } from "../../../middlewares/config";
import { Icon } from "../Icon/Icon";

export function LoginGoogle() {
  return (
    <div className={s.googleLoginContainer}>
      <a className={s.googleBtn} href={`${URL_API}/login-google`}>
        <span className={s.spanIcon}><Icon name="google" /></span>
        <span className={s.spanText}>Continuar con Google</span>
      </a>
    </div>
  );
}
