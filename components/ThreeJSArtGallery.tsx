import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRouter } from 'next/router';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Constants
const FRAME_COLOR = '#8B4513';
const defaultZ = 8;

// Frame positions for 5 evenly spaced frames on the front wall
const frameCount = 5;
const frameSpacing = 7.5; // space between frames
const frameY = 2; // eye level
const frameZ = 11.8; // front wall
const frameXPositions = Array.from({ length: frameCount }, (_, i) => (i - Math.floor(frameCount / 2)) * frameSpacing);

// Simple Frame component
function Frame({ position }: { position: [number, number, number] }) {
  return (
    <group>
      <mesh position={[position[0], position[1], frameZ]}>
        <boxGeometry args={[2.2, 2.8, 0.15]} />
        <meshStandardMaterial color={FRAME_COLOR} metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[position[0], position[1], frameZ + 0.09]}>
        <boxGeometry args={[1.8, 2.4, 0.05]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  );
}

// Gallery Room component with walls and wood floor
function GalleryRoom({ children }: { children: React.ReactNode }) {
  const woodTexture = useLoader(THREE.TextureLoader, '/Wood004_4K-PNG/Wood004_4K-PNG_Color.png');
  const woodNormalMap = useLoader(THREE.TextureLoader, '/Wood004_4K-PNG/Wood004_4K-PNG_NormalGL.png');
  const woodRoughnessMap = useLoader(THREE.TextureLoader, '/Wood004_4K-PNG/Wood004_4K-PNG_Roughness.png');
  
  // Set texture repeat for wood floor
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.repeat.set(4, 4);
  woodNormalMap.wrapS = woodNormalMap.wrapT = THREE.RepeatWrapping;
  woodNormalMap.repeat.set(4, 4);
  woodRoughnessMap.wrapS = woodRoughnessMap.wrapT = THREE.RepeatWrapping;
  woodRoughnessMap.repeat.set(4, 4);

  return (
    <group>
      {/* Wood Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial 
          map={woodTexture}
          normalMap={woodNormalMap}
          roughnessMap={woodRoughnessMap}
          normalScale={[0.5, 0.5]}
        />
      </mesh>
      
      {/* Front Wall - Main wall with frames */}
      <mesh position={[0, 2, 12]} rotation={[0, Math.PI, 0]} receiveShadow>
        <planeGeometry args={[30, 14]} />
        <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 2, -12]} receiveShadow>
        <planeGeometry args={[30, 14]} />
        <meshStandardMaterial color="#eaeaea" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-15, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[24, 14]} />
        <meshStandardMaterial color="#f3f3f3" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[15, 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[24, 14]} />
        <meshStandardMaterial color="#f3f3f3" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Corner trim: vertical black boxes at wall intersections */}
      {/* Left-Front corner */}
      <mesh position={[-15, 2, 12]}>
        <boxGeometry args={[0.12, 14, 0.12]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Right-Front corner */}
      <mesh position={[15, 2, 12]}>
        <boxGeometry args={[0.12, 14, 0.12]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Left-Back corner */}
      <mesh position={[-15, 2, -12]}>
        <boxGeometry args={[0.12, 14, 0.12]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Right-Back corner */}
      <mesh position={[15, 2, -12]}>
        <boxGeometry args={[0.12, 14, 0.12]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* Ceiling - Light gray */}
      <mesh position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {children}
    </group>
  );
}

// Animated Camera component
function AnimatedCamera() {
  const { camera } = useThree();
  const [current, setCurrent] = useState(2); // Start at center frame

  useEffect(() => {
    camera.position.x = frameXPositions[current];
  }, [current, camera]);

  // Navigation handlers
  const goLeft = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const goRight = () => {
    if (current < frameXPositions.length - 1) setCurrent(current + 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goLeft();
      if (event.key === 'ArrowRight') goRight();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current]);

  return null;
}

// Main Gallery Scene
function GalleryScene() {
  // Downlight fixture positions (above each frame)
  const fixtureY = 4.7;
  const fixtureZ = 11.7;

  return (
    <GalleryRoom>
      {/* Downlighting fixtures and spotlights for each frame */}
      {frameXPositions.map((x, i) => (
        <group key={i}>
          {/* Visible fixture (small cylinder) */}
          <mesh position={[x, fixtureY, fixtureZ]}>
            <cylinderGeometry args={[0.10, 0.10, 0.18, 16]} />
            <meshStandardMaterial color="#cccccc" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Downlight (spotlight) */}
          <spotLight
            position={[x, fixtureY - 0.1, fixtureZ]}
            angle={0.32}
            penumbra={0.6}
            intensity={2.2}
            distance={10}
            castShadow
            color="#fffbe6"
            target-position={[x, frameY, frameZ]}
          />
        </group>
      ))}
      {/* All frames mounted on the front wall */}
      {frameXPositions.map((x, i) => (
        <Frame key={i} position={[x, frameY, 0]} />
      ))}
      {/* Room lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 8, -4]} intensity={0.4} castShadow />
      <directionalLight position={[0, 8, 4]} intensity={0.3} castShadow />
      <Suspense fallback={null}>
        <Environment preset="city" background={false} />
      </Suspense>
    </GalleryRoom>
  );
}

// Navigation Controls with large left/right arrows
function NavigationControls({ current, setCurrent }: { current: number, setCurrent: (i: number) => void }) {
  const goLeft = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const goRight = () => {
    if (current < frameXPositions.length - 1) setCurrent(current + 1);
  };
  return (
    <>
      <button
        onClick={goLeft}
        disabled={current === 0}
        style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 20, background: 'none', border: 'none', cursor: 'pointer', fontSize: 48, color: current === 0 ? '#ccc' : '#333' }}
        aria-label="Previous Frame"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goRight}
        disabled={current === frameXPositions.length - 1}
        style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 20, background: 'none', border: 'none', cursor: 'pointer', fontSize: 48, color: current === frameXPositions.length - 1 ? '#ccc' : '#333' }}
        aria-label="Next Frame"
      >
        <FaChevronRight />
      </button>
    </>
  );
}

// Main Gallery Component
export default function ThreeJSArtGallery() {
  const [current, setCurrent] = useState(2);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [frameXPositions[current], 1.5, 6], fov: 50 }}>
        <color attach="background" args={["#fff"]} />
        <AnimatedCamera />
        <GalleryScene />
      </Canvas>
      
      {/* Navigation Controls */}
      <NavigationControls current={current} setCurrent={setCurrent} />
    </div>
  );
}
