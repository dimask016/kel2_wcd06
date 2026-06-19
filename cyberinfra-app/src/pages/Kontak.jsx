import React from 'react';

const Kontak = ({ t }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Solusi Permintaan Terkirim! Tim CyberInfra Solutions akan meninjau skema infrastruktur Anda dan menghubungi Anda kembali dalam kurun waktu 1x24 jam.");
  };

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
      {/* KOLOM KIRI: Info Kontak + Maps */}
      <div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>{t.contact_title}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {/* Email */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4285F4' }}>
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <small style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.label_email}</small>
              <a href="mailto:info@cyberinfra.co.id" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}>info@cyberinfra.co.id</a>
            </div>
          </div>

          {/* Telepon / WhatsApp */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'rgba(52,168,83,0.1)', border: '1px solid rgba(52,168,83,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#34A853' }}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <small style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.label_phone}</small>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500 }}>+62 812-3456-7890</a>
            </div>
          </div>

          {/* Alamat */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '50px', height: '50px', background: 'rgba(251,188,5,0.1)', border: '1px solid rgba(251,188,5,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#FBBC05' }}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <small style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.label_address}</small>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, maxWidth: '320px' }}>{t.val_address}</p>
            </div>
          </div>

          {/* MAPS - seperti di kontak.html */}
          <div
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              transition: '0.3s',
              marginTop: '0.5rem'
            }}
            className="map-container"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3644265079493!2d106.8184518!3d-6.2155734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f4c6370bbd%3A0x633cc4b4cc8e11a6!2sJl.%20Jend.%20Sudirman%20No.Kav.%2021%2C%20RT.10%2FRW.1%2C%20Karet%20Kuningan%2C%20Kecamatan%20Setiabudi%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012920!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
              title="Google Maps - CyberInfra Solutions"
              style={{
                width: '100%',
                height: '100%',
                border: 0,
                filter: 'grayscale(0.2) invert(0.9) hue-rotate(180deg)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* KOLOM KANAN: Form Kontak */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '2.5rem',
          borderRadius: '24px',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          boxShadow: '0 20px 45px rgba(0,0,0,0.3)'
        }}
      >
        <input
          type="text"
          placeholder={t.form_name}
          required
          style={{
            width: '100%',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            transition: '0.3s'
          }}
        />
        <input
          type="email"
          placeholder={t.form_email}
          required
          style={{
            width: '100%',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            transition: '0.3s'
          }}
        />
        <input
          type="text"
          placeholder={t.form_subject}
          required
          style={{
            width: '100%',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            transition: '0.3s'
          }}
        />
        <textarea
          placeholder={t.form_msg}
          rows="4"
          required
          style={{
            width: '100%',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            transition: '0.3s',
            resize: 'none'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '1rem',
            background: '#4285F4',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: '0 5px 15px rgba(66,133,244,0.3)'
          }}
        >
          {t.btn_send}
        </button>
      </form>
    </section>
  );
};

export default Kontak;