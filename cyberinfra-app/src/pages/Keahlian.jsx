import React, { useState, useRef, useEffect, useCallback } from 'react';

const Keahlian = ({ t }) => {
  const skillsData = [
    { icon: "fa-server", titleKey: "skill1_title", descKey: "skill1_desc" },
    { icon: "fa-shield-alt", titleKey: "skill2_title", descKey: "skill2_desc" },
    { icon: "fa-network-wired", titleKey: "skill3_title", descKey: "skill3_desc" },
    { icon: "fa-user-shield", titleKey: "skill4_title", descKey: "skill4_desc" },
    { icon: "fa-search-minus", titleKey: "skill5_title", descKey: "skill5_desc" },
    { icon: "fa-history", titleKey: "skill6_title", descKey: "skill6_desc" }
  ];

  const cardCount = skillsData.length;
  const radius = 280;
  const [rotationY, setRotationY] = useState(0);
  const [targetRotationY, setTargetRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const animFrameRef = useRef(null);
  const autoRotateTimerRef = useRef(null);

  const updateRotation = useCallback(() => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    const angleStep = (Math.PI * 2) / cardCount;
    let maxZ = -999;
    let activeIdx = 0;

    Array.from(cards).forEach((card, index) => {
      const angle = index * angleStep + rotationY;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      card.style.transform = `translateX(${x}px) translateZ(${z}px)`;

      if (z > maxZ) {
        maxZ = z;
        activeIdx = index;
      }
    });

    setActiveIndex(activeIdx);
  }, [rotationY, cardCount, radius]);

  useEffect(() => {
    const animateRotation = () => {
      const diff = targetRotationY - rotationY;
      if (Math.abs(diff) > 0.001) {
        setRotationY(prev => prev + diff * 0.1);
      }
      animFrameRef.current = requestAnimationFrame(animateRotation);
    };
    animateRotation();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [targetRotationY, rotationY]);

  useEffect(() => {
    updateRotation();
  }, [updateRotation]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);
      setLastX(e.clientX);
      setAutoRotate(false);
      if (autoRotateTimerRef.current) clearTimeout(autoRotateTimerRef.current);
      if (carouselRef.current) carouselRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastX;
      if (deltaX !== 0) {
        const rotateStep = deltaX * 0.008;
        setTargetRotationY(prev => prev + rotateStep);
        setLastX(e.clientX);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (carouselRef.current) carouselRef.current.style.cursor = 'grab';
        autoRotateTimerRef.current = setTimeout(() => {
          setAutoRotate(true);
        }, 3000);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mousedown', handleMouseDown);
      carousel.addEventListener('dragstart', (e) => e.preventDefault());
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (carousel) {
        carousel.removeEventListener('mousedown', handleMouseDown);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (autoRotateTimerRef.current) clearTimeout(autoRotateTimerRef.current);
    };
  }, [isDragging, lastX]);

  useEffect(() => {
    if (autoRotate && !isDragging) {
      const interval = setInterval(() => {
        setTargetRotationY(prev => prev + 0.02);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isDragging]);

  const handleCardClick = (index) => {
    const title = t[skillsData[index].titleKey];
    const desc = t[skillsData[index].descKey];
    alert(`💼 Solusi: ${title}\n\n${desc}\n\nDidukung oleh ahli bersertifikasi internasional untuk performa bisnis yang aman dan stabil.`);
  };

  const handleDotClick = (index) => {
    const delta = index - activeIndex;
    const angleStep = (Math.PI * 2) / cardCount;
    setTargetRotationY(prev => prev + delta * angleStep);
  };

  const renderCards = () => {
    return skillsData.map((skill, index) => {
      return (
        <div
          key={index}
          className={`carousel-card ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <i className={`fas ${skill.icon}`}></i>
          <h3>{t[skill.titleKey]}</h3>
          <p>{t[skill.descKey]}</p>
        </div>
      );
    });
  };

  return (
    <section className="container py-5">
      <h2 className="section-title">{t.skills_title}</h2>
      <p className="text-center text-white-50 mb-4">
        {t.skills_subtitle || 'Geser kiri/kanan untuk memutar | Klik kartu untuk detail solusi'}
      </p>

      <div className="carousel-container">
        <div className="carousel-3d" ref={carouselRef}>
          {renderCards()}
        </div>
      </div>

      <div className="carousel-indicators">
        {skillsData.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="active-info">
        <i className="fas fa-star"></i> {t[skillsData[activeIndex].titleKey]} | Geser kiri/kanan untuk memutar | Klik kartu untuk detail
      </div>
    </section>
  );
};

export default Keahlian;