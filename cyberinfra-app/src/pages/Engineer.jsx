import React, { useState } from 'react';
import dimasImg from '../assets/dimas.jpeg';
import devaImg from '../assets/devaagriani.jpg';

const Engineer = ({ t }) => {
  const [filter, setFilter] = useState('all');

  const engineers = [
    {
      name: "Dimas Kurniawan",
      role: "Lead Data Center Engineer",
      category: "infra",
      img: dimasImg,
      descKey: "eng1_desc",
      link: "https://dimask016.github.io/kel2_wcd06/portofolioDimasKurniawan/home.html",
      badge: "Google Cloud Certified"
    },
    {
      name: "Deva Agriani",
      role: "Senior Cyber Security Analyst",
      category: "cyber",
      img: devaImg,
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

  if (!t) return <div className="text-center py-5">Loading translations...</div>;

  return (
    <section className="container py-5">
      <h2 className="text-center display-5 fw-bold mb-2">{t.eng_title}</h2>
      <p className="text-center text-white-50 mb-4">{t.eng_subtitle}</p>

      <div className="d-flex justify-content-center align-items-center gap-3 mb-5 flex-wrap">
        <label className="text-white-50 fw-semibold">{t.eng_filter}</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="form-select w-auto bg-dark text-white border-light border-opacity-25 rounded-pill">
          <option value="all" className="bg-dark">{t.opt_all}</option>
          <option value="infra" className="bg-dark">{t.opt_infra}</option>
          <option value="cyber" className="bg-dark">{t.opt_cyber}</option>
          <option value="devsec" className="bg-dark">{t.opt_devsec}</option>
        </select>
      </div>

      <div className="row g-4">
        {filteredEngineers.map((eng, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="bg-dark bg-opacity-25 border border-light border-opacity-10 rounded-4 overflow-hidden h-100" style={{ backdropFilter: 'blur(16px)', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
              <div className="position-relative" style={{ height: '280px' }}>
                <img
                  src={eng.img}
                  alt={eng.name}
                  className="w-100 h-100 object-fit-cover"
                  style={{ filter: 'grayscale(30%)' }}
                  onError={(e) => {
                    e.target.onerror = null; // Hindari infinite loop jika placeholder juga error
                    e.target.src = 'https://via.placeholder.com/400x280/1a2a6c/ffffff?text=Engineer';
                  }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h3 className="text-white fw-semibold fs-5">{eng.name}</h3>
                  <p className="text-primary fw-medium">
                    {eng.link && eng.link !== '#' ? (
                      <a href={eng.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">{eng.role}</a>
                    ) : (
                      eng.role
                    )}
                  </p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-white-50 small">{t[eng.descKey]}</p>
                {eng.badge && (
                  <span className="badge bg-primary bg-opacity-15 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-1 text-uppercase fs-7" style={{ letterSpacing: '0.5px' }}>
                    {eng.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Engineer;