import { useSelector } from 'react-redux';
import s from './ProductComments.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductComments = () => {
  const currentUser = useSelector(state => state.currentUser);
  const [comment, setComment] = useState("");

  function handleComment(e) {
    e.preventDefault();
    console.log(comment);
  }

  return (
    <div className={s.container}>
      <h2>Comentarios:</h2>
      {
        currentUser
          ?
          <form onSubmit={handleComment}>
            <textarea placeholder='Escribe un comentario' className={s.comment} onInput={(e) => setComment(e.target.value)}></textarea>
            <button>Enviar</button>
          </form>
          :
          <p>Para comentar debes <Link to="/login" className='link-to'>iniciar sesión</Link></p>
      }
    </div>
  )
}
