import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const currentBgColor = new THREE.Color(0x1a2a6c);
    scene.background = currentBgColor;
    scene.fog = new THREE.FogExp2(currentBgColor, 0.002);

    const targetColors = [
      new THREE.Color(0x1a2a6c),
      new THREE.Color(0x2d68c4),
      new THREE.Color(0xb03a2e),
      new THREE.Color(0xd35400),
      new THREE.Color(0x6c3483),
    ];
    let currentColorIndex = 0,
      nextColorIndex = 1,
      colorProgress = 0;

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // batasi pixel ratio
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x505070);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 5, 3);
    scene.add(dirLight);

    const backLight = new THREE.PointLight(0x4285F4, 0.5);
    backLight.position.set(0, 2, -4);
    scene.add(backLight);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const centerGeo = new THREE.SphereGeometry(0.9, 64, 64);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'Bold 400px "Segoe UI"';
    ctx.fillStyle = '#4285F4';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('G', canvas.width / 2, canvas.height / 2);
    const texture = new THREE.CanvasTexture(canvas);
    const centerMat = new THREE.MeshStandardMaterial({
      map: texture,
      color: 0xffffff,
      emissive: 0x2244aa,
    });
    const centerSphere = new THREE.Mesh(centerGeo, centerMat);
    mainGroup.add(centerSphere);

    const colors = [0x4285F4, 0xEA4335, 0xFBBC05, 0x34A853];
    const orbits = [];
    const orbGeo = new THREE.SphereGeometry(0.45, 48, 48);
    for (let i = 0; i < 4; i++) {
      const orbMat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.3,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      mainGroup.add(orb);
      orbits.push(orb);
    }

    const ringGeo = new THREE.TorusGeometry(1.4, 0.05, 64, 200);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x4285F4, emissive: 0x4285F4 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    mainGroup.add(ring);

    // Kurangi partikel dari 1200 ke 600
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 30;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x88aaff,
      size: 0.06,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const starCount = 500; // kurangi
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 200;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.04, transparent: true })
    );
    scene.add(stars);

    let time = 0,
      mouseX = 0,
      mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      colorProgress += 0.002;
      if (colorProgress >= 1) {
        colorProgress = 0;
        currentColorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % targetColors.length;
      }

      currentBgColor.copy(targetColors[currentColorIndex]).lerp(targetColors[nextColorIndex], colorProgress);
      scene.background = currentBgColor;
      scene.fog.color = currentBgColor;

      mainGroup.rotation.y = time * 0.4;
      mainGroup.rotation.x = Math.sin(time * 0.2) * 0.2;

      orbits.forEach((orb, idx) => {
        const angle = time * 0.8 + idx * Math.PI / 2;
        orb.position.x = Math.cos(angle) * 1.8;
        orb.position.z = Math.sin(angle) * 1.8;
        orb.position.y = Math.sin(time * 1.5 + idx) * 0.4;
      });

      ring.rotation.x = time * 0.5;
      ring.rotation.y = time * 0.7;
      particles.rotation.y = time * 0.03;
      stars.rotation.x = time * 0.01;

      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      // Dispose (opsional, untuk memory)
      renderer.dispose();
    };
  }, []);

  return <div id="canvas-container" ref={mountRef} />;
};

export default ThreeBackground;