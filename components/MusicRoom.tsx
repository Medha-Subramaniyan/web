import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState, Suspense, useMemo } from 'react'
import { a, useSpring } from '@react-spring/three'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

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

function VintageStereo({ position }: { position: [number, number, number] }) {
  const { scene } = useGLTF('/models/vintage_stereo_hi-fi_stack_w_speakers/scene.gltf')
  return <primitive object={scene} position={position} scale={[0.0045, 0.0045, 0.0045]} />
}

function MonsteraPlant({ position }: { position: [number, number, number] }) {
  const { scene: original } = useGLTF(
    '/models/monstera_deliciosa_potted_mid-century_plant/scene.gltf'
  )

  // Deep‐clone so each instance has its own meshes/materials
  const scene = useMemo(() => {
    const clone = original.clone(true)
    clone.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.material = child.material.clone()
      }
    })
    return clone as THREE.Object3D
  }, [original])

  return (
    <primitive
      object={scene}
      position={position}
      scale={[0.7, 0.7, 0.7]}
    />
  )
}

export default function MusicRoom() {
  const [angle, setAngle] = useState(0)

  // Load carpet texture
  const carpetTexture = useLoader(THREE.TextureLoader, '/Carpet016_4K-PNG/Carpet016_4K-PNG_Color.png')
  carpetTexture.wrapS = carpetTexture.wrapT = THREE.RepeatWrapping
  carpetTexture.repeat.set(2, 2)

  // Load wood texture and maps for bookshelf and shelves
  const woodColor = useLoader(THREE.TextureLoader, '/Wood004_4K-PNG/Wood004_4K-PNG_Color.png')
  const woodNormal = useLoader(THREE.TextureLoader, '/Wood004_4K-PNG/Wood004_4K-PNG_NormalGL.png')
  const woodRoughness = useLoader(THREE.TextureLoader, '/Wood004_4K-PNG/Wood004_4K-PNG_Roughness.png')
  woodColor.wrapS = woodColor.wrapT = THREE.RepeatWrapping
  woodNormal.wrapS = woodNormal.wrapT = THREE.RepeatWrapping
  woodRoughness.wrapS = woodRoughness.wrapT = THREE.RepeatWrapping
  woodColor.repeat.set(1, 1)
  woodNormal.repeat.set(1, 1)
  woodRoughness.repeat.set(1, 1)

  const goLeft = () => {
    setAngle(prev => prev - Math.PI / 2)
  }
  const goRight = () => {
    setAngle(prev => prev + Math.PI / 2)
  }

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
        {/* Floor (carpet texture) */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4, 4]} />
          <meshStandardMaterial map={carpetTexture} />
        </mesh>
        {/* Ceiling */}
        <mesh position={[0, 2.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4, 4]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        {/* Back wall */}
        <mesh position={[0, 1.2, -2]} rotation={[0, 0, 0]}>
          <planeGeometry args={[4, 2.4]} />
          <meshStandardMaterial color="#8F9779" />
        </mesh>
        {/* Left wall */}
        <mesh position={[-2, 1.2, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[4, 2.4]} />
          <meshStandardMaterial color="#8F9779" />
        </mesh>
        {/* Right wall */}
        <mesh position={[2, 1.2, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[4, 2.4]} />
          <meshStandardMaterial color="#8F9779" />
        </mesh>
        {/* Front wall */}
        <mesh position={[0, 1.2, 2]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[4, 2.4]} />
          <meshStandardMaterial color="#8F9779" />
        </mesh>
        {/* Skirting Boards - more realistic, inspired by attached images */}
        {/* Back wall skirting */}
        <mesh position={[0, 0.07, -1.98]}>
          <boxGeometry args={[4, 0.14, 0.08]} />
          <meshStandardMaterial color="#f8f8f8" />
        </mesh>
        <mesh position={[0, 0.14, -1.93]}>
          <boxGeometry args={[4, 0.03, 0.02]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Front wall skirting */}
        <mesh position={[0, 0.07, 1.98]}>
          <boxGeometry args={[4, 0.14, 0.08]} />
          <meshStandardMaterial color="#f8f8f8" />
        </mesh>
        <mesh position={[0, 0.14, 1.93]}>
          <boxGeometry args={[4, 0.03, 0.02]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Left wall skirting */}
        <mesh position={[-1.98, 0.07, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[4, 0.14, 0.08]} />
          <meshStandardMaterial color="#f8f8f8" />
        </mesh>
        <mesh position={[-1.93, 0.14, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[4, 0.03, 0.02]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Right wall skirting */}
        <mesh position={[1.98, 0.07, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[4, 0.14, 0.08]} />
          <meshStandardMaterial color="#f8f8f8" />
        </mesh>
        <mesh position={[1.93, 0.14, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[4, 0.03, 0.02]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Vintage Stereo Hi-Fi Stack */}
        <Suspense fallback={null}>
          <VintageStereo position={[0.055, 0.1, -1.9]} />
        </Suspense>
        {/* Two cloned Monstera plants */}
        <Suspense fallback={null}>
          <MonsteraPlant position={[-1.2, 0.5, -1.7]} />
          <MonsteraPlant position={[1.2, 0.5, -1.7]} />
        </Suspense>
        {/* Wall-mounted album shelves (Wood004 texture) */}
        <mesh position={[0, 1.2, -1.85]}>
          <boxGeometry args={[1.6, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        <mesh position={[0, 1.6, -1.85]}>
          <boxGeometry args={[1.6, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 2, 2]} intensity={0.7} />
      </Canvas>
    </div>
  )
} 