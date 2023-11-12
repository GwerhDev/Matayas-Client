import s from './Slider.module.css';
import matayasLogo from '../../../assets/svg/matayas-logo.svg';

export const Slider = () => {
  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        <img className={s.logo} src={matayasLogo} alt="logo matayas"/>
        <p className={s.text}>Fabricación, modificación y reparación de amplificadores a tubos</p>
      </div>
    </div>
  )
}
