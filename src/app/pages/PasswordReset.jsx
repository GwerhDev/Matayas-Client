import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../middlewares/redux/actions/auth";
import { resetError } from "../../middlewares/redux/actions";

const PasswordReset = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const error = useSelector((state) => state.error);

  const token = useMemo(
    () => new URLSearchParams(location.search).get("token"),
    [location.search]
  );

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    setLocalError("");

    if (password.length < 6) {
      return setLocalError("La contraseña debe tener al menos 6 caracteres.");
    }
    if (password !== confirm) {
      return setLocalError("Las contraseñas no coinciden.");
    }

    dispatch(resetPassword({ token, password }, navigate));
  }

  if (!token) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Enlace inválido</h2>
          <p className="auth-subtitle">
            Este enlace no es válido o está incompleto. Solicita uno nuevo.
          </p>
          <Link to="/password-recovery" className="auth-submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            Pedir un nuevo enlace
          </Link>
        </div>
      </div>
    );
  }

  const shownError = localError || error;

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Nueva contraseña</h2>
        <p className="auth-subtitle">Elige una contraseña para tu cuenta.</p>

        <div className="form-group">
          <div className="field">
            <label htmlFor="reset-password">Contraseña nueva</label>
            <input
              id="reset-password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setLocalError(""); dispatch(resetError()); }}
            />
            <span className="field-hint">Mínimo 6 caracteres.</span>
          </div>

          <div className="field">
            <label htmlFor="reset-confirm">Repite la contraseña</label>
            <input
              id="reset-confirm"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => { setConfirm(e.target.value); setLocalError(""); dispatch(resetError()); }}
            />
          </div>
        </div>

        { shownError && <span className="error-span"><p>{shownError}</p></span> }

        <button type="submit" className="auth-submit">Guardar contraseña</button>

        <div className="divider" />
        <span className="auth-form-text">
          <Link to="/login" className="link-to">Volver a Ingresar</Link>
        </span>
      </form>
    </div>
  );
};

export default PasswordReset;
