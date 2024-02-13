import s from './Footer.module.css'
import burgerIcon from '../../../assets/png/matayas-logo.png';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={s.container}>
      <img src={burgerIcon} alt="" width="80" />
      © { currentYear } Amplificadores Matayas
    </div>
  )
}
