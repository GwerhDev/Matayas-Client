import { useDispatch } from 'react-redux';
import { sendContactMessage } from '../../../middlewares/redux/actions/contact-message';
import s from './FormMessage.module.css';
import { useState } from 'react';

export const FormMessage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  function handleClick(e) {
    e.preventDefault();

    const formData = {email, subject, contactMessage};

    dispatch(sendContactMessage(formData));
  }

  return (
    <form className={s.container} onSubmit={handleClick}>
      <div className={s.inputContainer}>
        <label htmlFor="">Email:</label>
        <input type="text" onInput={(e) => setEmail(e.target.value)} />
      </div>

      <div className={s.inputContainer}>
        <label htmlFor="">Asunto:</label>
        <input type="text" onInput={(e) => setSubject(e.target.value)}/>
      </div>
      <label htmlFor="">Mensaje:</label>
      <textarea name="" id="" cols="30" rows="10" onInput={(e) => setContactMessage(e.target.value)}></textarea>
      <button>Enviar</button>
    </form>
  )
}
