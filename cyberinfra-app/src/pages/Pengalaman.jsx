import React, { useEffect, useRef } from 'react';

const Pengalaman = ({ t }) => {
  const expData = [
    { yearKey: "job1_year", titleKey: "job1_title", companyKey: "job1_comp", descKey: "job1_desc", position: "left" },
    { yearKey: "job2_year", titleKey: "job2_title", companyKey: "job2_comp", descKey: "job2_desc", position: "right" },
    { yearKey: "job3_year", titleKey: "job3_title", companyKey: "job3_comp", descKey: "job3_desc", position: "left" }
  ];

  const itemRefs = useRef([]);

  const handleCardClick = (title, company) => {
    alert(`🛡️ Hub Solusi: ${title}\n📍 Mitra: ${company}\n\nSolusi infrastruktur & siber ini dirancang kustom untuk keandalan jangka panjang korporasi.`);
  };

  // Scroll reveal effect (sama persis seperti pengalaman.html)
  useEffect(() => {
    const checkVisibility = () => {
      itemRefs.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible && !item.classList.contains('visible')) {
          item.classList.add('visible');
        }
      });
    };

    // Initial check
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return (
    <section>
      <h2 className="section-title">{t.exp_title}</h2>
      <div className="timeline">
        {expData.map((exp, idx) => (
          <div
            key={idx}
            className={`timeline-item ${exp.position}`}
            ref={(el) => (itemRefs.current[idx] = el)}
          >
            <div
              className="timeline-content"
              onClick={() => handleCardClick(t[exp.titleKey], t[exp.companyKey])}
            >
              <span className="date">{t[exp.yearKey]}</span>
              <h3>{t[exp.titleKey]}</h3>
              <span className="company">{t[exp.companyKey]}</span>
              <p>{t[exp.descKey]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pengalaman;