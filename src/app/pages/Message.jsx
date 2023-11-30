import { Link } from "react-router-dom";
import { FormMessage } from "../components/FormMessage/FormMessage";

const Message = () => {
  return (
    <div className="page-container">
      <span className="span-routes"><h1><Link to="/contact">Contacto / </Link>Mensaje</h1></span>
      <FormMessage/>
    </div>
  )
}

export default Message