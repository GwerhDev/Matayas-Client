import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordRecovery } from "../../middlewares/redux/actions/auth";
import { resetError } from "../../middlewares/redux/actions";

const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLoading(true);
    dispatch(requestPasswordRecovery(email, (ok) => {
      setLoading(false);
      if (ok) setSent(true);
    }));
  }

  if (sent) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Revisa tu correo</h2>
          <p className="auth-subtitle">
            Si <strong>{email}</strong> corresponde a una cuenta, te enviamos un
            enlace para restablecer tu contraseña. El enlace vence en 30 minutos.
          </p>
          <span className="auth-form-text">
            ¿No te llegó? Revisa spam o <Link to="/password-recovery" className="link-to" onClick={() => setSent(false)}>vuelve a intentar</Link>.
          </span>
          <div className="divider" />
          <span className="auth-form-text">
            <Link to="/login" className="link-to">Volver a Ingresar</Link>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Recuperar contraseña</h2>
        <p className="auth-subtitle">
          Ingresa tu email y te enviaremos un enlace para crear una nueva contraseña.
        </p>

        <div className="field">
          <label htmlFor="recovery-email">Email</label>
          <input
            id="recovery-email"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); dispatch(resetError()); }}
          />
        </div>

        { error && <span className="error-span"><p>{error}</p></span> }

        <button type="submit" className="auth-submit" disabled={loading}>
          {loading ? "Enviando…" : "Enviar enlace"}
        </button>

        <div className="divider" />
        <span className="auth-form-text">
          <Link to="/login" className="link-to">Volver a Ingresar</Link>
        </span>
      </form>
    </div>
  );
};

export default PasswordRecovery;
