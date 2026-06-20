import React, { useState, useEffect } from 'react';

const ApiData = ({ t }) => {
  const [berita, setBerita] = useState([]);
  const [harga, setHarga] = useState({ dollar: null, emas: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState({
    news: 'loading',
    gold: 'loading',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // === CACHE ===
        const CACHE_KEY = 'cyberinfra_api_data';
        const cacheExpiry = 5 * 60 * 1000;
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < cacheExpiry) {
            setBerita(data.berita || []);
            setHarga(data.harga || { dollar: null, emas: null });
            setLoading(false);
            return;
          }
        }

        // === 1. Berita ===
        let beritaData = [];
        const newsApiKey = import.meta.env.VITE_NEWSDATA_API_KEY;

        if (newsApiKey) {
          try {
            const resBerita = await fetch(
              `https://newsdata.io/api/1/news?apikey=${newsApiKey}&category=technology&language=en&size=6`
            );
            if (!resBerita.ok) {
              const errorData = await resBerita.json().catch(() => ({}));
              throw new Error(errorData.message || `HTTP ${resBerita.status}`);
            }
            const data = await resBerita.json();
            if (data.results && data.results.length > 0) {
              beritaData = data.results.map((article) => ({
                title: article.title,
                description: article.description || t.api_news_click || 'Klik untuk baca selengkapnya...',
                link: article.link,
                source: article.source_id || 'Unknown',
              }));
              setApiStatus(prev => ({ ...prev, news: 'success' }));
            } else {
              throw new Error('Tidak ada artikel dari NewsData.io');
            }
          } catch (e) {
            console.warn('NewsData.io gagal:', e.message);
            setApiStatus(prev => ({ ...prev, news: 'error' }));
          }
        } else {
          setApiStatus(prev => ({ ...prev, news: 'fallback' }));
        }

        // Fallback ke Hacker News jika beritaData kosong
        if (beritaData.length === 0) {
          try {
            const resHN = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
            if (resHN.ok) {
              const storyIds = await resHN.json();
              const topIds = storyIds.slice(0, 6);
              const stories = await Promise.all(
                topIds.map(async (id) => {
                  const resStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                  return resStory.ok ? resStory.json() : null;
                })
              );
              const validStories = stories.filter((s) => s && s.url);
              if (validStories.length > 0) {
                beritaData = validStories.map((story) => ({
                  title: story.title || 'Hacker News Story',
                  description: `Score: ${story.score || 0} | By: ${story.by || 'Anonymous'}`,
                  link: story.url || '#',
                  source: 'Hacker News',
                }));
                setApiStatus(prev => ({ ...prev, news: 'success' }));
              } else {
                throw new Error('No valid stories from Hacker News');
              }
            } else {
              throw new Error('Hacker News API failed');
            }
          } catch (fallbackErr) {
            console.warn('Fallback Hacker News gagal:', fallbackErr.message);
            setApiStatus(prev => ({ ...prev, news: 'error' }));
            beritaData = [
              {
                title: t.api_news_error || 'Berita tidak tersedia',
                description: t.api_news_empty || 'Silakan refresh halaman.',
                link: '#',
                source: 'System',
              },
            ];
          }
        }

        setBerita(beritaData);
        if (beritaData.length === 1 && beritaData[0].source === 'System') {
          setError(t.api_news_error || 'Gagal memuat berita.');
        } else {
          setError(null);
        }

        // === 2. Harga Dollar ===
        let dollar = null;
        try {
          const resDollar = await fetch('https://open.er-api.com/v6/latest/USD');
          if (resDollar.ok) {
            const data = await resDollar.json();
            if (data.rates && data.rates.IDR) {
              dollar = data.rates.IDR;
            }
          }
        } catch (e) {
          console.warn('Gagal ambil dollar:', e.message);
        }

        // === 3. Harga Emas ===
        let emasPerGram = null;
        const goldToken = import.meta.env.VITE_GOLDAPI_TOKEN;
        if (goldToken) {
          try {
            const resEmas = await fetch('https://www.goldapi.io/api/XAU/IDR', {
              headers: { 'x-access-token': goldToken },
            });
            if (resEmas.ok) {
              const data = await resEmas.json();
              if (data.price) {
                emasPerGram = data.price / 31.1035;
                setApiStatus(prev => ({ ...prev, gold: 'success' }));
              }
            } else {
              console.warn('GoldAPI response status:', resEmas.status);
              setApiStatus(prev => ({ ...prev, gold: 'error' }));
            }
          } catch (e) {
            console.warn('Gagal ambil emas:', e.message);
            setApiStatus(prev => ({ ...prev, gold: 'error' }));
          }
        } else {
          setApiStatus(prev => ({ ...prev, gold: 'missing' }));
        }

        const hargaData = { dollar, emas: emasPerGram };
        setHarga(hargaData);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: { berita: beritaData, harga: hargaData },
            timestamp: Date.now(),
          })
        );
      } catch (err) {
        setError(t.api_news_error || 'Gagal memuat data. Silakan refresh.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  if (loading) return <div className="text-center text-white py-4">{t.api_news_loading || '⏳ Memuat data...'}</div>;

  return (
    <div className="container my-5">
      <h3 className="text-center text-white mb-3">{t.api_title || '💰 Harga Pasar Terkini'}</h3>
      <div className="row g-3 mb-5">
        <div className="col-md-6 col-sm-6">
          <div
            className="card h-100"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
            }}
          >
            <div className="card-body text-center text-white">
              <h5 className="card-title">{t.api_dollar || '💵 Dollar AS (USD/IDR)'}</h5>
              <p className="display-6 fw-bold">
                {harga.dollar
                  ? `Rp ${harga.dollar.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : 'Tidak tersedia'}
              </p>
              <small className="text-success">{t.api_exchange_from || 'Data real-time dari ExchangeRate-API'}</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
          <div
            className="card h-100"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
            }}
          >
            <div className="card-body text-center text-white d-flex flex-column justify-content-center">
              <h5 className="card-title">{t.api_gold || '🥇 Harga Emas (per gram)'}</h5>
              <p className="display-6 fw-bold">
                {harga.emas
                  ? `Rp ${harga.emas.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : 'Tidak tersedia'}
              </p>
              <small className="text-warning">
                {apiStatus.gold === 'missing'
                  ? t.api_gold_missing || 'Token API tidak dikonfigurasi'
                  : apiStatus.gold === 'error'
                  ? t.api_gold_error || 'Gagal mengambil data emas'
                  : t.api_gold_from || 'Data real-time dari GoldAPI.io (per gram)'}
              </small>
              <a
                href="https://www.goldapi.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning btn-sm mt-3"
                style={{ borderRadius: '30px', fontWeight: 600 }}
              >
                {t.api_gold_link || 'Lihat Harga di GoldAPI.io →'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center text-white mb-4">{t.api_news_title || '📰 Berita Teknologi Global Terkini'}</h3>
      {apiStatus.news === 'fallback' && (
        <div className="alert alert-info text-center">{t.api_news_fallback || '⚠️ Menggunakan Hacker News sebagai sumber berita.'}</div>
      )}
      {error && <div className="alert alert-warning text-center">{error}</div>}
      {berita.length === 0 ? (
        <div className="text-center text-white-50 py-4">{t.api_news_empty || 'Tidak ada berita tersedia.'}</div>
      ) : (
        <div className="row g-4">
          {berita.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div
                className="card h-100"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
                }}
              >
                <div className="card-body d-flex flex-column text-white">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text small flex-grow-1">{item.description || t.api_news_click || 'Klik untuk baca selengkapnya...'}</p>
                  {item.source && (
                    <small className="text-muted d-block mb-2">Sumber: {item.source}</small>
                  )}
                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm mt-2 align-self-start"
                    >
                      {t.api_news_readmore || 'Baca Selengkapnya'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiData;