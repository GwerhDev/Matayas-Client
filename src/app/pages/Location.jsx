const Location = () => {
  return (
    <div className="page-container d-flex row">
      <section className="w-50 d-flex">
        Ventura Lavalle 608, Santiago Centro
      </section>
      <section className="w-50">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6086914942625!2d-70.64351702315288!3d-33.459499997977694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c56c6b103a01%3A0x6889183662fc2d5b!2sVentura%20Lavalle%20608%2C%208360125%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1699024352468!5m2!1ses!2scl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Location;