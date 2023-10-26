import s from './LoginInner.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginInner } from '../../../middlewares/redux/actions/auth';

export const LoginInner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    const formData = { email, password }
    dispatch(loginInner(formData, navigate));
  }

  return (
    <>
      <div className="form-group">
        <input onInput={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input onInput={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <div>
        <Link to="/password-recovery">Forgot password?</Link>
      </div>
      <button className={s.buttonLogin} onClick={handleLogin}>Login</button>
    </>
  )
}
