import s from './LoginInner.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginInner } from '../../../middlewares/redux/actions/auth';
import { resetError } from '../../../middlewares/redux/actions';
import { PasswordField } from '../PasswordField/PasswordField';

export const LoginInner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.error);

  function handleLogin(e) {
    e.preventDefault();
    dispatch(loginInner({ email, password }, navigate));
  }

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  return (
    <form className={s.form} onSubmit={handleLogin}>
      <div className="form-group">
        <div className="field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); dispatch(resetError()); }}
          />
        </div>

        <PasswordField
          id="login-password"
          label="Contraseña"
          autoComplete="current-password"
          labelRight={<Link to="/password-recovery" className={s.forgot}>¿Olvidaste tu contraseña?</Link>}
          value={password}
          onChange={(e) => { setPassword(e.target.value); dispatch(resetError()); }}
        />
      </div>

      { error && <span className='error-span'><p>{error}</p></span> }

      <button type="submit" className="auth-submit">Ingresar</button>
    </form>
  );
};
