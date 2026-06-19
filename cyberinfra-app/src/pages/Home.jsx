import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ t }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #fff, #4285F4 50%, #34A853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {t.hero_name}
      </h1>
      <p
        style={{
          fontSize: 'clamp(1rem, 3vw, 1.4rem)',
          maxWidth: '600px',
          marginBottom: '2rem',
          opacity: 0.9,
          fontWeight: 400,
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.85)'
        }}
      >
        {t.hero_title}
      </p>
      <button
        onClick={() => navigate('/keahlian')}
        style={{
          background: 'linear-gradient(135deg, #4285F4, #34A853)',
          color: '#fff',
          padding: '0.8rem 2rem',
          borderRadius: '30px',
          fontWeight: 600,
          fontSize: '1rem',
          transition: '0.3s',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.2)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(66,133,244,0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        }}
      >
        {t.hero_btn}
      </button>
    </div>
  );
};

export default Home;