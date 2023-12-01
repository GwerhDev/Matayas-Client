import { useDispatch } from 'react-redux';
import { sendContactMessage } from '../../../middlewares/redux/actions/contact-message';
import s from './FormMessage.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const FormMessage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subject, setSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    
    if (email.includes("@") && subject && contactMessage) {
      const formData = { email, subject, contactMessage };
      dispatch(sendContactMessage(formData));
      setShowForm(false);

    } else setError('Por favor, rellene todos los campos');
  }

  return (
    <form className={s.container} onSubmit={handleClick}>
      {
        showForm
        ?
        <>
          <div className={s.inputContainer}>
            <label htmlFor="">Email:</label>
            <input type="text" onInput={(e) => setEmail(e.target.value)} />
          </div>

          <div className={s.inputContainer}>
            <label htmlFor="">Asunto:</label>
            <input type="text" onInput={(e) => setSubject(e.target.value)} />
          </div>
          <label htmlFor="">Mensaje:</label>
          <textarea name="" id="" cols="30" rows="10" onInput={(e) => setContactMessage(e.target.value)}></textarea>
          <button>Enviar</button>
        </>
        :
        <div className={s.sendedMessage}>
          <h2>¡Mensaje enviado!</h2>
          <Link to="/"><button>Volver al inicio</button></Link>
        </div>
      }
      { error && <span className='error-span'><p>{error}</p></span> }
    </form>
  )
}
