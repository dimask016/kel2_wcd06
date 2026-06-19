import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';

const Layout = ({ lang, setLang, t }) => {
  const toggleLang = (l) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  return (
    <>
      <ThreeBackground />
      <div className="overlay"></div>
      <div className="content">
        <nav>
          {/* Navbar sama seperti sebelumnya */}
          <div className="logo">CyberInfra Solutions</div>
          <div className="nav-links">
            <NavLink to="/">{t.nav_home}</NavLink>
            <NavLink to="/tentang">{t.nav_about}</NavLink>
            <NavLink to="/keahlian">{t.nav_skills}</NavLink>
            <NavLink to="/pengalaman">{t.nav_exp}</NavLink>
            <NavLink to="/proyek">{t.nav_projects}</NavLink>
            <NavLink to="/sertifikasi">{t.nav_certs}</NavLink>
            <NavLink to="/kontak">{t.nav_contact}</NavLink>
            <NavLink to="/engineer">{t.nav_engineer}</NavLink>
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === 'id' ? 'active' : ''}`} onClick={() => toggleLang('id')}>🇮🇩 ID</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => toggleLang('en')}>🇬🇧 EN</button>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;