import s from './SignupInner.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupInner } from '../../../middlewares/redux/actions/auth';
import { resetError } from '../../../middlewares/redux/actions';

export const SignupInner = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.error);

  function handleSignup(e) {
    e.preventDefault();
    const formData = { email, username, password };
    dispatch(signupInner(formData));
  }

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  return (
    <>
      <div className="form-group">
        <input onInput={(e) => { setUsername(e.target.value), dispatch(resetError()) }} type="text" placeholder="Username" />
        <input onInput={(e) => { setEmail(e.target.value), dispatch(resetError()) }} type="email" placeholder="Email" />
        <input onInput={(e) => { setPassword(e.target.value), dispatch(resetError()) }} type="password" placeholder="Password" />
      </div>
      { error && <span className='error-span'><p>{error}</p></span> }
      <button className={s.buttonSignup} onClick={handleSignup}>Signup</button>
    </>
  )
}
