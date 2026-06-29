import React from 'react';
import { Outlet } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';  // <-- tambahkan ini

const Layout = ({ lang, setLang, t }) => {
  return (
    <>
      <ThreeBackground />
      <div className="overlay"></div>
      <div className="content">
        <Navbar lang={lang} setLang={setLang} t={t} />
        <main className="container py-5" style={{ paddingTop: '80px' }}>
          <Outlet />
        </main>
        <Footer />
        {/* ChatBot ditempatkan di sini, tetap terlihat di semua halaman */}
        <ChatBot t={t} />
      </div>
    </>
  );
};

export default Layout;