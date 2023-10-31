import s from './LoginInner.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginInner } from '../../../middlewares/redux/actions/auth';
import { resetError } from '../../../middlewares/redux/actions';

export const LoginInner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.error);

  function handleLogin(e) {
    e.preventDefault();
    const formData = { email, password }
    dispatch(loginInner(formData, navigate));
  }

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  return (
    <>
      <div className="form-group">
        <input onInput={(e) => { setEmail(e.target.value), dispatch(resetError()) }} type="email" placeholder="Email" />
        <input onInput={(e) => { setPassword(e.target.value), dispatch(resetError()) }} type="password" placeholder="Password" />
      </div>
      <div>
        <Link to="/password-recovery">Forgot password?</Link>
      </div>
      { error && <span className='error-span'><p>{error}</p></span> }
      <button className={s.buttonLogin} onClick={handleLogin}>Login</button>
    </>
  )
}
