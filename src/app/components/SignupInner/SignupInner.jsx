import s from './SignupInner.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupInner } from '../../../middlewares/redux/actions/auth';
import { resetError } from '../../../middlewares/redux/actions';

export const SignupInner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.error);

  function handleSignup(e) {
    e.preventDefault();
    dispatch(signupInner({ email, username, password }, navigate));
  }

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  return (
    <form className={s.form} onSubmit={handleSignup}>
      <div className="form-group">
        <div className="field">
          <label htmlFor="signup-username">Nombre de usuario</label>
          <input
            id="signup-username"
            type="text"
            autoComplete="username"
            placeholder="Tu nombre"
            value={username}
            onChange={(e) => { setUsername(e.target.value); dispatch(resetError()); }}
          />
        </div>

        <div className="field">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); dispatch(resetError()); }}
          />
        </div>

        <div className="field">
          <label htmlFor="signup-password">Contraseña</label>
          <input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => { setPassword(e.target.value); dispatch(resetError()); }}
          />
          <span className="field-hint">Mínimo 6 caracteres.</span>
        </div>
      </div>

      { error && <span className='error-span'><p>{error}</p></span> }

      <button type="submit" className="auth-submit">Crear cuenta</button>
    </form>
  );
};
