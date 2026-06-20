import React from 'react';

const Tentang = ({ t }) => {
  return (
    <section className="min-vh-100 d-flex flex-column justify-content-center">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-4">{t.about_title}</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="p-4 p-md-5 bg-dark bg-opacity-25 rounded-4 border border-light border-opacity-10" style={{ backdropFilter: 'blur(16px)' }}>
              <p className="text-white-50">{t.about_text1}</p>
              <p className="text-white-50 mt-3">{t.about_text2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;