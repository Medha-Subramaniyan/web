import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState, Suspense, useMemo } from 'react'
import { a, useSpring } from '@react-spring/three'
import * as THREE from 'three'
import { useGLTF, Html } from '@react-three/drei'

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
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null)

  // Load carpet texture
  const carpetTexture = useLoader(
    THREE.TextureLoader,
    '/Carpet016_4K-PNG/Carpet016_4K-PNG_Color.png'
  )
  carpetTexture.wrapS = carpetTexture.wrapT = THREE.RepeatWrapping
  carpetTexture.repeat.set(2, 2)

  // Load wood texture and maps for bookshelf and shelves
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
  woodColor.repeat.set(1, 1)
  woodNormal.repeat.set(1, 1)
  woodRoughness.repeat.set(1, 1)

  // Album data
  const albums = [
    { texture: '/albums/GKMC.jpg', artist: 'Kendrick Lamar', title: 'Good Kid, M.A.A.D City' },
    { texture: '/albums/discovery.webp', artist: 'Daft Punk', title: 'Discovery' },
    { texture: '/albums/divine.jpg', artist: 'Mac Miller', title: 'The Divine Feminine' },
    { texture: '/albums/orange.jpg', artist: 'Frank Ocean', title: 'Channel Orange' },
    { texture: '/albums/laur.jpeg', artist: 'Lauryn Hill', title: 'The Miseducation of Lauryn Hill' },
    { texture: '/albums/TIMELESS.jpg', artist: 'Kaytranada', title: 'TIMELESS' },
    { texture: '/albums/HJJH.jpg', artist: 'Travis Scott & Quavo', title: 'Huncho Jack, Jack Huncho' },
    { texture: '/albums/BPL.jpeg', artist: 'D. Savage', title: 'BPL' },
    { texture: '/albums/1999.jpeg', artist: 'Joey Bada$$', title: '1999' },
    { texture: '/albums/cole.webp', artist: 'J. Cole', title: '4 Your Eyez Only' },
  ];
  const albumTextures = useLoader(THREE.TextureLoader, albums.map(a => a.texture));

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
        <mesh position={[0, 1.15, -1.85]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        <mesh position={[0, 1.65, -1.85]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        {/* Front wall shelves */}
        <mesh position={[0, 1.0, 1.85]} rotation={[0, Math.PI, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        <mesh position={[0, 1.5, 1.85]} rotation={[0, Math.PI, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        {/* Left wall shelves */}
        <mesh position={[-1.85, 1.0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        <mesh position={[-1.85, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        {/* Right wall shelves */}
        <mesh position={[1.85, 1.0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        <mesh position={[1.85, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.18]} />
          <meshStandardMaterial map={woodColor} normalMap={woodNormal} roughnessMap={woodRoughness} />
        </mesh>
        {/* Album placeholders for back wall shelves */}
        {[0, 1].map((row) => {
          const shelfY = row === 0 ? 1.15 : 1.65;
          const albumHeight = 0.32;
          const albumY = shelfY + albumHeight / 2 + 0.04;
          const z = -1.82;
          const leanAngle = 0;
          return Array.from({ length: 5 }).map((_, i) => {
            const x = -0.8 + i * 0.4;
            const albumIdx = row * 5 + i;
            let matProps = {};
            matProps = { map: albumTextures[albumIdx], color: 'white' };
            return (
              <mesh
                key={`album-back-${row}-${i}`}
                position={[x, albumY, z]}
                rotation={[leanAngle, 0, 0]}
                castShadow
                onPointerOver={() => setHoveredAlbum(albumIdx)}
                onPointerOut={() => setHoveredAlbum(null)}
              >
                <boxGeometry args={[0.32, 0.32, 0.03]} />
                <meshStandardMaterial {...matProps} />
                {hoveredAlbum === albumIdx && (
                  <Html position={[0, 0.25, 0]} center>
                    <div style={{
                      background: 'rgba(0,0,0,0.85)',
                      color: 'white',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                      pointerEvents: 'none',
                    }}>
                      <strong>{albums[albumIdx].artist}</strong><br />
                      {albums[albumIdx].title}
                    </div>
                  </Html>
                )}
              </mesh>
            );
          });
        })}
        {/* Album placeholders for front wall shelves */}
        {[0, 1].map((row) => {
          const shelfY = row === 0 ? 1.0 : 1.5;
          const albumHeight = 0.32;
          const albumY = shelfY + albumHeight / 2 + 0.04;
          const z = 1.82;
          const leanAngle = 0;
          return Array.from({ length: 5 }).map((_, i) => {
            const x = -0.8 + i * 0.4;
            return (
              <mesh
                key={`album-front-${row}-${i}`}
                position={[x, albumY, z]}
                rotation={[leanAngle, Math.PI, 0]}
                castShadow
              >
                <boxGeometry args={[0.32, 0.32, 0.03]} />
                <meshStandardMaterial color={row === 0 ? '#e0e0e0' : '#c0c0c0'} />
              </mesh>
            );
          });
        })}
        {/* Album placeholders for left wall shelves */}
        {[0, 1].map((row) => {
          const shelfY = row === 0 ? 1.0 : 1.5;
          const albumHeight = 0.32;
          const albumY = shelfY + albumHeight / 2 + 0.04;
          const x = -1.82;
          const leanAngle = 0;
          return Array.from({ length: 5 }).map((_, i) => {
            const z = -0.8 + i * 0.4;
            return (
              <mesh
                key={`album-left-${row}-${i}`}
                position={[x, albumY, z]}
                rotation={[leanAngle, Math.PI / 2, 0]}
                castShadow
              >
                <boxGeometry args={[0.32, 0.32, 0.03]} />
                <meshStandardMaterial color={row === 0 ? '#e0e0e0' : '#c0c0c0'} />
              </mesh>
            );
          });
        })}
        {/* Album placeholders for right wall shelves */}
        {[0, 1].map((row) => {
          const shelfY = row === 0 ? 1.0 : 1.5;
          const albumHeight = 0.32;
          const albumY = shelfY + albumHeight / 2 + 0.04;
          const x = 1.82;
          const leanAngle = 0;
          return Array.from({ length: 5 }).map((_, i) => {
            const z = -0.8 + i * 0.4;
            return (
              <mesh
                key={`album-right-${row}-${i}`}
                position={[x, albumY, z]}
                rotation={[leanAngle, -Math.PI / 2, 0]}
                castShadow
              >
                <boxGeometry args={[0.32, 0.32, 0.03]} />
                <meshStandardMaterial color={row === 0 ? '#e0e0e0' : '#c0c0c0'} />
              </mesh>
            );
          });
        })}
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 2, 2]} intensity={0.7} />
      </Canvas>
    </div>
  )
} 