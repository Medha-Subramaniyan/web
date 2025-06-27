import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useState, useMemo } from 'react';
import * as THREE from 'three';

// Colors
const WALL_COLOR  = '#e7e3dc';
const FLOOR_COLOR = '#bdb6a3';
const FRAME_COLOR = '#6e5c4b';

// How close the camera must be (world units) to trigger description mode
const DESCRIPTION_DISTANCE = 4;

// Your exhibits, with position & text
const exhibits = [
  {
    position: [-4, 1.6, -6] as [number, number, number],
    name:        'Fractal Mandala',
    description: 'A swirling fractal pattern derived from recursive geometry.'
  },
  {
    position: [-2, 1.6, -6],
    name:        'Perlin Flow Field',
    description: 'Particles flowing in a noise-driven field, reacting to sound.'
  },
  {
    position: [ 0, 1.6, -6],
    name:        'Parametric Surface',
    description: 'A 3D surface sculpted from differential equations.'
  },
  {
    position: [ 2, 1.6, -6],
    name:        'Data Sculpture',
    description: 'A visual mapping of NBA win percentages as a 3D bar chart.'
  },
  {
    position: [ 4, 1.6, -6],
    name:        'Circuit Visualization',
    description: 'An animated representation of electrical circuit dynamics.'
  },
];

// Single frame + canvas geometry
function Frame({ position }: { position: [number, number, number] }) {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={[2.2, 2.8, 0.15]} />
        <meshStandardMaterial color={FRAME_COLOR} metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[position[0], position[1], position[2] + 0.09]}>
        <boxGeometry args={[1.8, 2.4, 0.05]} />
        <meshStandardMaterial color={WALL_COLOR} metalness={0.1} roughness={0.8} />
      </mesh>
    </>
  );
}

// The 3D scene: floor, wall, frames, lighting, and proximity check
function GalleryScene({ onEnterDescription }: { onEnterDescription: (i: number) => void }) {
  const { camera } = useThree();

  // Every frame, check camera distance to each exhibit
  useFrame(() => {
    for (let i = 0; i < exhibits.length; i++) {
      const target = new THREE.Vector3(...exhibits[i].position);
      if (camera.position.distanceTo(target) < DESCRIPTION_DISTANCE) {
        onEnterDescription(i);
        break;
      }
    }
  });

  return (
    <>
      {/* Background & Floor/Wall */}
      <color attach="background" args={[WALL_COLOR]} />
      <mesh receiveShadow position={[0, -0.01, -6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color={FLOOR_COLOR} roughness={0.7} />
      </mesh>
      <mesh receiveShadow position={[0, 2, -6.6]}>
        <planeGeometry args={[16, 6]} />
        <meshStandardMaterial color={WALL_COLOR} />
      </mesh>

      {/* All frames */}
      {exhibits.map((ex, i) => (
        <Frame key={i} position={ex.position} />
      ))}

      {/* Lights + Environment */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 8, 4]} intensity={1.2} castShadow />
      <Suspense fallback={null}>
        <Environment preset="city" background={false} />
      </Suspense>
    </>
  );
}

// Styles for the overlay nav buttons
const overlayButtonStyle: React.CSSProperties = {
  background:    'rgba(255,255,255,0.8)',
  border:        'none',
  borderRadius:  '50%',
  width:         48,
  height:        48,
  fontSize:      24,
  cursor:        'pointer',
  margin:        '0 1rem'
};

export default function ThreeJSArtGallery() {
  const [descIndex, setDescIndex] = useState<number | null>(null);

  const handleEnter = (i: number) => {
    if (descIndex === null) setDescIndex(i);
  };
  const handleClose = () => setDescIndex(null);
  const handlePrev  = () => setDescIndex((i) => (i! > 0 ? i! - 1 : i!));
  const handleNext  = () => setDescIndex((i) => (i! < exhibits.length - 1 ? i! + 1 : i!));

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Description Overlay */}
      {descIndex !== null && (
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.6)', color: '#fff', zIndex: 10
        }}>
          <button onClick={handlePrev} disabled={descIndex === 0} style={overlayButtonStyle}>
            ←
          </button>
          <div style={{ maxWidth: '60%', textAlign: 'center' }}>
            <h2>{exhibits[descIndex].name}</h2>
            <p>{exhibits[descIndex].description}</p>
            <button onClick={handleClose} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
              Close
            </button>
          </div>
          <button onClick={handleNext} disabled={descIndex === exhibits.length - 1} style={overlayButtonStyle}>
            →
          </button>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 1.6, 10], fov: 60 }}>
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.2}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minDistance={3}
          maxDistance={20}
        />
        <GalleryScene onEnterDescription={handleEnter} />
      </Canvas>
    </div>
  );
}
