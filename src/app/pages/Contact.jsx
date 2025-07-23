import s from '../components/ContactMethods/ContactMethods.module.css'
import { instagramLink, mailLink, messengerLink, phoneLink, telegramLink, whatsappLink } from "../components/Utils/consts";
import phoneIcon from '../../assets/svg/phone-icon.svg';
import whatsappIcon from '../../assets/svg/whatsapp-icon.svg';
import instagramIcon from '../../assets/svg/instagram-icon.svg';
import messengerIcon from '../../assets/svg/messenger-icon.svg';
import mailIcon from '../../assets/svg/mail-icon.svg';
import telegramIcon from '../../assets/svg/telegram-icon.svg';
import { useEffect } from 'react';
import { scrollToTop } from '../../functions';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }
  )

  return (
    <div className="page-container">
      <div className="d-flex row contact-page">
        <section className="w-50 d-flex column">
          <h1>Contacto</h1>
          <p>Teléfono: <a href={phoneLink}>+56 9 3345 1508</a></p>
          <p>Email: <a href={mailLink}> info@amplificadoresmatayas.com</a></p>
          <p>Dirección: Santiago Concha 1290, Santiago Centro</p>
          <span className="contactMethod d-flex g-1 pad-top-1">
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
              <Link to="/contact/message"><img src={mailIcon} alt="" width="38px" height="38px" /></Link>
            </div>
          </span>
        </section>
        <section className="map-contact">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8821315569373!2d-70.63949632406886!3d-33.45218649528706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59a2b5df899%3A0xdf0932446ff67046!2sSantiago%20Concha%201290%2C%208355028%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1721678221671!5m2!1ses-419!2scl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </div>
  )
}

export default Contact;