import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <ul>
      <Link to="/"><li>Inicio</li></Link>
      <Link to="/gallery"><li>Galería</li></Link>
      <Link to="/shop"><li>Venta</li></Link>
      {/* <select name="category" className="select-group nav-select" >
      <option defaultValue>Categorías</option>
      <option value={"1"}>Amplificadores</option>
    </select> */}
      {/* <Link to="/store"><li>Inventario</li></Link> */}
      <Link to="/contact"><li>Contacto</li></Link>
    </ul>
  )
}
