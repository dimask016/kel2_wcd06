import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Keahlian from './pages/Keahlian';
import Pengalaman from './pages/Pengalaman';
import Proyek from './pages/Proyek';
import Sertifikasi from './pages/Sertifikasi';
import Kontak from './pages/Kontak';
import Engineer from './pages/Engineer';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'id');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout lang={lang} setLang={setLang} t={t} />}>
          <Route index element={<Home t={t} />} />
          <Route path="tentang" element={<Tentang t={t} />} />
          <Route path="keahlian" element={<Keahlian t={t} />} />
          <Route path="pengalaman" element={<Pengalaman t={t} />} />
          <Route path="proyek" element={<Proyek t={t} />} />
          <Route path="sertifikasi" element={<Sertifikasi t={t} />} />
          <Route path="kontak" element={<Kontak t={t} />} />
          <Route path="engineer" element={<Engineer t={t} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;