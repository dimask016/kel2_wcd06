import React, { useState } from 'react';

const Engineer = ({ t }) => {
  const [filter, setFilter] = useState('all');

  // Data engineer sesuai dengan engineer.html
  const engineers = [
    {
      name: "Dimas Kurniawan",
      role: "Lead Data Center Engineer",
      category: "infra",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      descKey: "eng1_desc",
      link: "https://dimask016.github.io/kel2_wcd06/portofolioDimasKurniawan/home.html",
      badge: "Google Cloud Certified"
    },
    {
      name: "Deva Agriani",
      role: "Senior Cyber Security Analyst",
      category: "cyber",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      descKey: "eng2_desc",
      link: "https://dimask016.github.io/kel2_wcd06/portofolioDevaAgriani/index.html",
      badge: "CEH Master"
    },
    {
      name: "Gempur Mahya Reksa",
      role: "DevSecOps Cloud Architect",
      category: "devsec",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      descKey: "eng3_desc",
      link: "#",
      badge: "AWS Solutions Architect"
    }
  ];

  const filteredEngineers = filter === 'all' ? engineers : engineers.filter(e => e.category === filter);

  // Jika t tidak tersedia (misal error), tampilkan pesan
  if (!t) {
    return <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>Loading translations...</div>;
  }

  return (
    <section>
      <h2 style={{ fontSize:'2.5rem', textAlign:'center', marginBottom:'1rem', fontWeight:700 }}>{t.eng_title}</h2>
      <p style={{ textAlign:'center', color:'rgba(255,255,255,0.7)', marginBottom:'3rem', fontSize:'1.1rem' }}>{t.eng_subtitle}</p>

      <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem', marginBottom:'4rem', flexWrap:'wrap' }}>
        <label style={{ fontSize:'1rem', color:'rgba(255,255,255,0.8)', fontWeight:500 }}>{t.eng_filter}</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', padding:'0.5rem 1.5rem', borderRadius:'30px', color:'#fff', fontSize:'0.9rem', outline:'none', cursor:'pointer' }}>
          <option value="all" style={{ background:'#111' }}>{t.opt_all}</option>
          <option value="infra" style={{ background:'#111' }}>{t.opt_infra}</option>
          <option value="cyber" style={{ background:'#111' }}>{t.opt_cyber}</option>
          <option value="devsec" style={{ background:'#111' }}>{t.opt_devsec}</option>
        </select>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'3rem' }}>
        {filteredEngineers.map((eng, idx) => (
          <div key={idx} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'24px', overflow:'hidden', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)', boxShadow:'0 15px 35px rgba(0,0,0,0.2)' }}>
            <div style={{ width:'100%', height:'280px', overflow:'hidden', position:'relative' }}>
              <img src={eng.img} alt={eng.name} style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(30%)' }} />
              <div style={{ position:'absolute', bottom:0, left:0, width:'100%', padding:'1.5rem', background:'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 style={{ fontSize:'1.3rem', fontWeight:600, color:'#fff' }}>{eng.name}</h3>
                <p style={{ color:'#4285F4', fontSize:'0.9rem', fontWeight:500, marginTop:'0.2rem' }}>
                  {eng.link && eng.link !== '#' ? (
                    <a href={eng.link} target="_blank" rel="noopener noreferrer" style={{ color:'#8ab4f8', textDecoration:'none' }}>
                      {eng.role}
                    </a>
                  ) : (
                    eng.role
                  )}
                </p>
              </div>
            </div>
            <div style={{ padding:'1.5rem' }}>
              <p style={{ fontSize:'0.95rem', color:'rgba(255,255,255,0.75)', lineHeight:1.6 }}>{t[eng.descKey]}</p>
              {eng.badge && (
                <span style={{ display:'inline-block', marginTop:'1rem', fontSize:'0.75rem', fontWeight:600, padding:'0.3rem 0.8rem', borderRadius:'12px', background:'rgba(66,133,244,0.15)', color:'#8ab4f8', border:'1px solid rgba(66,133,244,0.3)', textTransform:'uppercase', letterSpacing:'0.5px' }}>
                  {eng.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Engineer;