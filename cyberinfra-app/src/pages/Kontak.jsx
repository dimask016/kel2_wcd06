import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Kontak = ({ t }) => {
  const formRef = useRef();
  const [status, setStatus] = useState({ sending: false, sent: false, error: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ sending: false, sent: false, error: 'Konfigurasi EmailJS belum lengkap.' });
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatus({ sending: false, sent: true, error: null });
          formRef.current.reset();
          setTimeout(() => setStatus({ sending: false, sent: false, error: null }), 5000);
        },
        (err) => {
          console.error('EmailJS error:', err);
          setStatus({ sending: false, sent: false, error: 'Gagal mengirim pesan. Silakan coba lagi.' });
        }
      );
  };

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold mb-4">{t.contact_title}</h2>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex gap-3 align-items-center">
              <div
                className="bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-3 p-3"
                style={{ color: '#4285F4' }}
              >
                <i className="fas fa-envelope fa-lg"></i>
              </div>
              <div>
                <small className="text-white-50 d-block text-uppercase" style={{ letterSpacing: '1px' }}>
                  {t.label_email}
                </small>
                <a href="mailto:info@cyberinfra.co.id" className="text-white text-decoration-none fw-semibold">
                  info@cyberinfra.co.id
                </a>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div
                className="bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 p-3"
                style={{ color: '#34A853' }}
              >
                <i className="fas fa-phone-alt fa-lg"></i>
              </div>
              <div>
                <small className="text-white-50 d-block text-uppercase" style={{ letterSpacing: '1px' }}>
                  {t.label_phone}
                </small>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none fw-semibold"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-start">
              <div
                className="bg-warning bg-opacity-10 border border-warning border-opacity-25 rounded-3 p-3"
                style={{ color: '#FBBC05' }}
              >
                <i className="fas fa-map-marker-alt fa-lg"></i>
              </div>
              <div>
                <small className="text-white-50 d-block text-uppercase" style={{ letterSpacing: '1px' }}>
                  {t.label_address}
                </small>
                <p className="text-white-50 mb-0" style={{ maxWidth: '320px' }}>
                  {t.val_address}
                </p>
              </div>
            </div>
            <div
              className="rounded-4 overflow-hidden border border-light border-opacity-10"
              style={{ height: '250px', background: 'rgba(0,0,0,0.3)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3644265079493!2d106.8184518!3d-6.2155734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f4c6370bbd%3A0x633cc4b4cc8e11a6!2sJl.%20Jend.%20Sudirman%20No.Kav.%2021%2C%20RT.10%2FRW.1%2C%20Karet%20Kuningan%2C%20Kecamatan%20Setiabudi%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012920!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                title="Google Maps - CyberInfra Solutions"
                className="w-100 h-100 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: 'grayscale(0.2) invert(0.9) hue-rotate(180deg)' }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-4 p-md-5 rounded-4 bg-dark bg-opacity-25 border border-light border-opacity-10"
            style={{ backdropFilter: 'blur(16px)', boxShadow: '0 20px 45px rgba(0,0,0,0.3)' }}
          >
            <div className="mb-3">
              <input
                type="text"
                name="user_name"
                className="form-control bg-dark bg-opacity-50 text-white border-light border-opacity-10"
                placeholder={t.form_name}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="user_email"
                className="form-control bg-dark bg-opacity-50 text-white border-light border-opacity-10"
                placeholder={t.form_email}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control bg-dark bg-opacity-50 text-white border-light border-opacity-10"
                placeholder={t.form_subject}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control bg-dark bg-opacity-50 text-white border-light border-opacity-10"
                rows="4"
                placeholder={t.form_msg}
                required
                style={{ resize: 'none' }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold py-2"
              disabled={status.sending}
              style={{ boxShadow: '0 5px 15px rgba(66,133,244,0.3)' }}
            >
              {status.sending ? '⏳ Mengirim...' : t.btn_send}
            </button>
            {status.sent && (
              <div className="alert alert-success mt-3 text-center">✅ Pesan terkirim! Kami akan segera merespons.</div>
            )}
            {status.error && (
              <div className="alert alert-danger mt-3 text-center">{status.error}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontak;