import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary'; // pastikan file ini ada
import { translations } from './translations';

// === LAZY LOAD SEMUA HALAMAN ===
const Home = lazy(() => import('./pages/Home'));
const Tentang = lazy(() => import('./pages/Tentang'));
const Keahlian = lazy(() => import('./pages/Keahlian'));
const Pengalaman = lazy(() => import('./pages/Pengalaman'));
const Proyek = lazy(() => import('./pages/Proyek'));
const Sertifikasi = lazy(() => import('./pages/Sertifikasi'));
const Kontak = lazy(() => import('./pages/Kontak'));
const Engineer = lazy(() => import('./pages/Engineer'));

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'id');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100 text-white">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Memuat...</span>
              </div>
            </div>
          }
        >
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
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;