import { useEffect } from 'react';
import { mailLink, phoneLink } from "../components/Utils/consts";
import { ContactMethods } from '../components/ContactMethods/ContactMethods';
import { scrollToTop } from '../../functions';

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="page-container">
      <div className="d-flex row contact-page">
        <section className="w-50 d-flex column">
          <h1>Contacto</h1>
          <p className="section-subtitle">Escríbenos o visítanos en el taller.</p>
          <p className="pad-top-1"><span className="text-muted">Teléfono:</span> <a href={phoneLink}>+56 9 3345 1508</a></p>
          <p><span className="text-muted">Email:</span> <a href={mailLink}>info@amplificadoresmatayas.com</a></p>
          <p><span className="text-muted">Dirección:</span> Santiago Concha 1290, Santiago Centro</p>
          <div className="pad-top-1">
            <ContactMethods />
          </div>
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
  );
};

export default Contact;
