import s from './Footer.module.css'
import logo from '../../../assets/png/matayas-logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.container}>
      <img src={logo} alt="Amplificadores Matayas" width="80" />
      <span className={s.brand}>Amplificadores Matayas</span>
      <span className={s.copy}>© {currentYear} · Todos los derechos reservados</span>
    </footer>
  )
}
