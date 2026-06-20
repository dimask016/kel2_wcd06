import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiData from '../components/ApiData';

const Home = ({ t }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '100vh', padding: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        <h1 className="display-1 fw-bold" style={{
          background: 'linear-gradient(135deg, #fff, #4285F4 50%, #34A853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {t.hero_name}
        </h1>
        <p className="lead text-white-50" style={{ maxWidth: '600px' }}>
          {t.hero_title}
        </p>
        <button
          onClick={() => navigate('/keahlian')}
          className="btn btn-lg btn-primary"
          style={{
            background: 'linear-gradient(135deg, #4285F4, #34A853)',
            border: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          {t.hero_btn}
        </button>
      </div>
      {/* Kirim t ke ApiData */}
      <ApiData t={t} />
    </>
  );
};

export default Home;