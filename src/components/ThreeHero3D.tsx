import { useRef, useEffect } from "react";
import * as THREE from "three";

// Simple 3D animated scene: rotating colored torus
const ThreeHero3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = mountRef.current?.clientWidth || 600;
    const height = mountRef.current?.clientHeight || 400;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617");

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x22d3ee, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 3D Object: Torus
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x5b5ef7,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.3,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Animation loop
    let frameId: number;
    const animate = () => {
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.015;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: 400, borderRadius: 24, overflow: "hidden", boxShadow: "0 0 40px #22D3EE44" }}
      aria-label="Animation 3D Hero"
    />
  );
};

export default ThreeHero3D;
