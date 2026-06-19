import React from 'react';

const Tentang = ({ t }) => {
  return (
    <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <h2 className="section-title" style={{ fontSize:'clamp(1.8rem,6vw,2.5rem)', textAlign:'center', marginBottom:'3rem', position:'relative' }}>
        {t.about_title}
        <span style={{ content:'""', position:'absolute', bottom:'-10px', left:'50%', transform:'translateX(-50%)', width:'70px', height:'3px', background:'linear-gradient(135deg,#4285F4,#EA4335)', borderRadius:'3px' }} />
      </h2>
      <div className="about-content" style={{ maxWidth:'850px', margin:'0 auto', textAlign:'center', fontSize:'1rem', lineHeight:1.7, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)', padding:'2.5rem', borderRadius:'20px', boxShadow:'0 15px 35px rgba(0,0,0,0.25)' }}>
        <p>{t.about_text1}</p>
        <p style={{ marginTop: '1rem' }}>{t.about_text2}</p>
      </div>
    </section>
  );
};

export default Tentang;