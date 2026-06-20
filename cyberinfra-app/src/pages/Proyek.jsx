import React from 'react';

const Proyek = ({ t }) => {
  const projectsData = [
    {
      icon: "fa-shield-alt",
      titleKey: "proj1_title",
      descKey: "proj1_desc",
      tags: ["SIEM", "SOAR", "AI Threat Intelligence"]
    },
    {
      icon: "fa-server",
      titleKey: "proj2_title",
      descKey: "proj2_desc",
      tags: ["SDDC", "Hyperconverged", "Tier IV"]
    },
    {
      icon: "fa-cloud-network",
      titleKey: "proj3_title",
      descKey: "proj3_desc",
      tags: ["Zero-Trust", "AWS / Azure", "Mesh VPN"]
    }
  ];

  const handleCardClick = (title) => {
    alert(`💼 Studi Kasus: ${title}\n\nProyek ini telah selesai dikerjakan secara sukses dan memenuhi standar jaminan keamanan (SLA) mitra bisnis kami.\n\nHubungi tim teknis kami untuk merancang cetak biru solusi serupa.`);
  };

  return (
    <section className="container py-5">
      <h2 className="section-title">{t.projects_title}</h2>
      <p className="section-subtitle">{t.projects_subtitle}</p>
      <div className="row g-4">
        {projectsData.map((proj, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="project-card h-100" onClick={() => handleCardClick(t[proj.titleKey])}>
              <div className="project-icon-wrapper">
                <i className={`fas ${proj.icon} main-icon`}></i>
                <a href="#" className="project-link" onClick={(e) => e.stopPropagation()}>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
              <div className="project-info">
                <h3>{t[proj.titleKey]}</h3>
                <p>{t[proj.descKey]}</p>
                <div className="tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyek;