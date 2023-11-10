import { $d } from '../../../functions';
import s from './Menu.module.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  function handleClick() {
    $d('#burger-menu-container').style.display = 'none'
  }

  return (
    <ul className={s.menu}>
      <Link className={s.link} onClick={handleClick} to="/"><li>Inicio</li></Link>
      <Link className={s.link} onClick={handleClick} to="/gallery"><li>Galería</li></Link>
      <Link className={s.link} onClick={handleClick} to="/shop"><li>Venta</li></Link>
      {/* <select name="category" className="select-group nav-select" >
      <option defaultValue>Categorías</option>
      <option value={"1"}>Amplificadores</option>
    </select> */}
      {/* <Link className={s.link} onClick={handleClick} to="/store"><li>Inventario</li></Link> */}
      <Link className={s.link} onClick={handleClick} to="/contact"><li>Contacto</li></Link>
    </ul>
  )
}
