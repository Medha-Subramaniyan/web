import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState, Suspense } from 'react'
import { a, useSpring } from '@react-spring/three'
import * as THREE from 'three'

type AnimatedCameraProps = { angle: number, onRest: () => void }

function AnimatedCamera({ angle, onRest }: AnimatedCameraProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const { rotation } = useSpring({
    rotation: [0, angle, 0],
    config: { mass: 1, tension: 80, friction: 18 },
    onRest,
  })

  useFrame(({ camera }) => {
    if (cameraRef.current) {
      camera.position.set(0, 1.2, 0)
      camera.rotation.set(0, rotation.get()[1], 0)
      camera.lookAt(
        Math.sin(rotation.get()[1]),
        1.2,
        -Math.cos(rotation.get()[1])
      )
    }
  })

  return <perspectiveCamera ref={cameraRef} position={[0, 1.2, 0]} fov={60} />
}

// Frame component for artwork
function Frame({ position, rotation = [0, 0, 0] }: { position: [number, number, number], rotation?: [number, number, number] }) {
  return (
    <group>
      {/* Frame border */}
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[0.9, 1.4, 0.06]} />
        <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.5} />
      </mesh>
      {/* Frame inner (artwork area) */}
      <mesh position={[position[0], position[1], position[2] + 0.035]} rotation={rotation}>
        <boxGeometry args={[0.75, 1.25, 0.02]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
    </group>
  );
}

export default function ArtGallery() {
  const [angle, setAngle] = useState(0)

  // Load wood texture and maps for hardwood floor
  const woodColor = useLoader(
    THREE.TextureLoader,
    '/Wood004_4K-PNG/Wood004_4K-PNG_Color.png'
  )
  const woodNormal = useLoader(
    THREE.TextureLoader,
    '/Wood004_4K-PNG/Wood004_4K-PNG_NormalGL.png'
  )
  const woodRoughness = useLoader(
    THREE.TextureLoader,
    '/Wood004_4K-PNG/Wood004_4K-PNG_Roughness.png'
  )
  woodColor.wrapS = woodColor.wrapT = THREE.RepeatWrapping
  woodNormal.wrapS = woodNormal.wrapT = THREE.RepeatWrapping
  woodRoughness.wrapS = woodRoughness.wrapT = THREE.RepeatWrapping
  woodColor.repeat.set(3, 3)
  woodNormal.repeat.set(3, 3)
  woodRoughness.repeat.set(3, 3)

  const goLeft = () => {
    setAngle(prev => prev - Math.PI / 2)
  }
  const goRight = () => {
    setAngle(prev => prev + Math.PI / 2)
  }

  // Frame positions for the back wall (5 frames evenly spaced)
  const framePositions: [number, number, number][] = [
    [-2.8, 1.75, -3.95], // Left frame
    [-1.4, 1.75, -3.95], // Left center frame
    [0, 1.75, -3.95],    // Center frame
    [1.4, 1.75, -3.95],  // Right center frame
    [2.8, 1.75, -3.95],  // Right frame
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Left Arrow */}
      <button
        style={{
          position: 'absolute',
          left: 24,
          top: '50%',
          zIndex: 10,
          fontSize: 32,
          background: 'rgba(255,255,255,0.85)',
          border: 'none',
          borderRadius: '50%',
          width: 48,
          height: 48,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={goLeft}
        aria-label="Previous wall"
      >
        &#8592;
      </button>
      {/* Right Arrow */}
      <button
        style={{
          position: 'absolute',
          right: 24,
          top: '50%',
          zIndex: 10,
          fontSize: 32,
          background: 'rgba(255,255,255,0.85)',
          border: 'none',
          borderRadius: '50%',
          width: 48,
          height: 48,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={goRight}
        aria-label="Next wall"
      >
        &#8594;
      </button>
      <Canvas>
        <AnimatedCamera angle={angle} onRest={() => {}} />
        {/* Hardwood Floor */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial 
            map={woodColor}
            normalMap={woodNormal}
            roughnessMap={woodRoughness}
            normalScale={[0.5, 0.5]}
          />
        </mesh>
        {/* Ceiling */}
        <mesh position={[0, 3.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        {/* Back wall */}
        <mesh position={[0, 1.75, -4]} rotation={[0, 0, 0]}>
          <planeGeometry args={[8, 3.5]} />
          <meshStandardMaterial color="#fafafa" />
        </mesh>
        {/* Left wall */}
        <mesh position={[-4, 1.75, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[8, 3.5]} />
          <meshStandardMaterial color="#fafafa" />
        </mesh>
        {/* Right wall */}
        <mesh position={[4, 1.75, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[8, 3.5]} />
          <meshStandardMaterial color="#fafafa" />
        </mesh>
        {/* Front wall */}
        <mesh position={[0, 1.75, 4]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[8, 3.5]} />
          <meshStandardMaterial color="#fafafa" />
        </mesh>
        {/* Frames on the back wall */}
        {framePositions.map((position, index) => (
          <Frame key={`frame-${index}`} position={position} />
        ))}
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 3, 2]} intensity={0.8} />
        <pointLight position={[0, 3, -2]} intensity={0.6} />
      </Canvas>
    </div>
  )
} 