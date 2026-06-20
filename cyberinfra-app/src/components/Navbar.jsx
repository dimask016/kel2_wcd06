import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ lang, setLang, t }) => {
  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)', zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">CyberInfra Solutions</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">{t.nav_home}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/tentang">{t.nav_about}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/keahlian">{t.nav_skills}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/pengalaman">{t.nav_exp}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/proyek">{t.nav_projects}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/sertifikasi">{t.nav_certs}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/kontak">{t.nav_contact}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/engineer">{t.nav_engineer}</NavLink></li>
            <li className="nav-item">
              <div className="btn-group ms-2" role="group">
                <button className={`btn btn-outline-light btn-sm ${lang === 'id' ? 'active' : ''}`} onClick={() => toggleLang('id')}>ID</button>
                <button className={`btn btn-outline-light btn-sm ${lang === 'en' ? 'active' : ''}`} onClick={() => toggleLang('en')}>EN</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;