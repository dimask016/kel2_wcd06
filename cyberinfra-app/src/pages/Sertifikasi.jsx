import React from 'react';
import ciscoLogo from '../assets/cisco-logo.svg'; // Import logo Cisco

const Sertifikasi = ({ t }) => {
  const certsData = [
    { 
      icon: "fa-certificate", 
      iconType: "icon",
      titleKey: "cert1_title", 
      descKey: "cert1_desc", 
      reg: "REG: ISO-27001-99824X" 
    },
    { 
      icon: "fa-shield-halved", 
      iconType: "icon",
      titleKey: "cert2_title", 
      descKey: "cert2_desc", 
      reg: "REG: BCMS-22301-8871" 
    },
    { 
      icon: "fa-user-shield", 
      iconType: "icon",
      titleKey: "cert3_title", 
      descKey: "cert3_desc", 
      reg: "REG: QMS-9001-00293B" 
    },
    { 
      icon: "fa-aws", 
      iconType: "brand",
      titleKey: "cert4_title", 
      descKey: "cert4_desc", 
      reg: "PARTNER ID: AWS-SEA-2024" 
    },
    { 
      icon: ciscoLogo,        // ← Logo Cisco dari file SVG
      iconType: "image",
      titleKey: "cert5_title", 
      descKey: "cert5_desc", 
      reg: "ID: CISCO-PREM-77410" 
    },
    { 
      icon: "fa-cloud-lock", 
      iconType: "icon",
      titleKey: "cert6_title", 
      descKey: "cert6_desc", 
      reg: "SN: CCSP-CLOUD-88390" 
    }
  ];

  const handleCardClick = (title, desc, reg) => {
    alert(`🏅 Kepatuhan Resmi: ${title}\n\n${desc}\n(${reg})\n\nSeluruh operasional jaminan layanan kami tunduk pada regulasi standar akreditasi ini.`);
  };

  // Render icon berdasarkan tipe
  const renderIcon = (cert) => {
    if (cert.iconType === "image") {
      return (
        <img 
          src={cert.icon} 
          alt={t[cert.titleKey]} 
          style={{ 
            width: '60px', 
            height: '60px', 
            objectFit: 'contain',
            filter: 'brightness(1)'
          }} 
        />
      );
    } else if (cert.iconType === "brand") {
      return <i className={`fab ${cert.icon}`}></i>;
    } else {
      return <i className={`fas ${cert.icon}`}></i>;
    }
  };

  return (
    <section>
      <h2 className="section-title">{t.certs_title}</h2>
      <p className="section-subtitle">{t.certs_subtitle}</p>

      <div className="certs-grid">
        {certsData.map((cert, idx) => (
          <div
            key={idx}
            className="cert-card"
            onClick={() => handleCardClick(t[cert.titleKey], t[cert.descKey], cert.reg)}
          >
            <div className="cert-inner">
              <div className="cert-front">
                {renderIcon(cert)}
                <h4>{t[cert.titleKey]}</h4>
              </div>
              <div className="cert-back">
                <p>{t[cert.descKey]}</p>
                <small>{cert.reg}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sertifikasi;