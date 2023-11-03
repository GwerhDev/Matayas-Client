import s from './ContactMethods.module.css';
import phoneIcon from '../../../assets/svg/phone-icon.svg';
import whatsappIcon from '../../../assets/svg/whatsapp-icon.svg';
import instagramIcon from '../../../assets/svg/instagram-icon.svg';
import messengerIcon from '../../../assets/svg/messenger-icon.svg';
import mailIcon from '../../../assets/svg/mail-icon.svg';
import telegramIcon from '../../../assets/svg/telegram-icon.svg';

export const ContactMethods = () => {
  const phoneLink = "tel:56933451508";
  const mailLink = "mailto:info@amplificadoresmatayas.com";
  const whatsappLink = "https://api.whatsapp.com/send/?phone=56933451508&text&type=phone_number&app_absent=0";
  const instagramLink = "https://www.instagram.com/amplificadoresmatayas/";
  const messengerLink = "https://m.me/amplificadoresmatayas";
  const telegramLink = "https://t.me/amplificadoresmatayas";

  return (
    <span className={s.contactMethod}>
      <div className={s.imgContainer}>
        <a href={phoneLink}><img src={phoneIcon} alt="" width="38px" height="38px" /></a>
      </div>
      <div className={s.imgContainer}>
        <a target='_blank' rel='noreferrer' href={whatsappLink}><img src={whatsappIcon} alt="" width="38px" height="38px" /></a>
      </div>
      <div className={s.imgContainer}>
        <a target='_blank' rel='noreferrer' href={instagramLink}><img src={instagramIcon} alt="" width="38px" height="38px" /></a>
      </div>
      <div className={s.imgContainer}>
        <a target='_blank' rel='noreferrer' href={messengerLink}><img src={messengerIcon} alt="" width="38px" height="38px" /></a>
      </div>
      <div className={s.imgContainer}>
        <a target='_blank' rel='noreferrer' href={telegramLink}><img src={telegramIcon} alt="" width="38px" height="38px" /></a>
      </div>
      <div className={s.imgContainer}>
        <a href={mailLink}><img src={mailIcon} alt="" width="38px" height="38px" /></a>
      </div>
    </span>
  )
}
