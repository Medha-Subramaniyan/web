'use client'

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ArtPiece {
  id: string;
  title: string;
  type: 'p5js' | 'video' | 'image';
  src?: string;
  component?: React.ComponentType;
  thumbnail?: string;
}

interface ThreeJSMuseumProps {
  artPieces: ArtPiece[];
  onArtPieceClick: (piece: ArtPiece) => void;
}

export default function ThreeJSMuseum({ artPieces, onArtPieceClick }: ThreeJSMuseumProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const framesRef = useRef<THREE.Group | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const [hoveredFrame, setHoveredFrame] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create frames group
    const framesGroup = new THREE.Group();
    framesRef.current = framesGroup;
    scene.add(framesGroup);

    // Create picture frames
    artPieces.forEach((piece, index) => {
      const frameGeometry = new THREE.PlaneGeometry(2, 1.5);
      const frameMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x8B4513,
        transparent: true,
        opacity: 0.9
      });
      const frame = new THREE.Mesh(frameGeometry, frameMaterial);
      
      // Create frame border
      const borderGeometry = new THREE.PlaneGeometry(2.2, 1.7);
      const borderMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
      const border = new THREE.Mesh(borderGeometry, borderMaterial);
      border.position.z = -0.01;
      
      // Create art content placeholder
      const contentGeometry = new THREE.PlaneGeometry(1.8, 1.3);
      const contentMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x2a2a2a,
        transparent: true,
        opacity: 0.8
      });
      const content = new THREE.Mesh(contentGeometry, contentMaterial);
      content.position.z = 0.01;
      
      // Group frame elements
      const frameGroup = new THREE.Group();
      frameGroup.add(border);
      frameGroup.add(frame);
      frameGroup.add(content);
      
      // Position frames in a circle
      const angle = (index / artPieces.length) * Math.PI * 2;
      const radius = 4;
      frameGroup.position.x = Math.cos(angle) * radius;
      frameGroup.position.y = Math.sin(angle) * radius;
      frameGroup.position.z = 0;
      
      // Add user data for identification
      frameGroup.userData = { pieceId: piece.id, piece };
      
      framesGroup.add(frameGroup);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate frames around the center
      if (framesGroup) {
        framesGroup.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Handle mouse events
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Raycasting for hover effects
      if (camera && framesGroup) {
        raycasterRef.current.setFromCamera(mouseRef.current, camera);
        const intersects = raycasterRef.current.intersectObjects(framesGroup.children, true);
        
        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          const frameGroup = intersectedObject.parent;
          if (frameGroup && frameGroup.userData.pieceId) {
            setHoveredFrame(frameGroup.userData.pieceId);
            document.body.style.cursor = 'pointer';
          }
        } else {
          setHoveredFrame(null);
          document.body.style.cursor = 'default';
        }
      }
    };

    const handleClick = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      if (camera && framesGroup) {
        raycasterRef.current.setFromCamera(mouseRef.current, camera);
        const intersects = raycasterRef.current.intersectObjects(framesGroup.children, true);
        
        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          const frameGroup = intersectedObject.parent;
          if (frameGroup && frameGroup.userData.piece) {
            onArtPieceClick(frameGroup.userData.piece);
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [artPieces, onArtPieceClick]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-screen relative"
      style={{ cursor: hoveredFrame ? 'pointer' : 'default' }}
    >
      {hoveredFrame && (
        <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg z-10">
          Click to enter exhibit
        </div>
      )}
    </div>
  );
} 