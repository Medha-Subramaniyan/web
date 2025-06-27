import Navbar from '../components/Navbar';
import ThreeJSMuseum from '../components/ThreeJSMuseum';
import InteractiveArtPiece from '../components/InteractiveArtPiece';
import { useState } from 'react';

// Sample art pieces data
const artPieces = [
  {
    id: 'flow-field',
    title: 'Flow Field',
    type: 'p5js' as const,
    thumbnail: '/flow-field-thumb.jpg',
  },
  {
    id: 'particle-system',
    title: 'Particle System',
    type: 'p5js' as const,
    thumbnail: '/particle-thumb.jpg',
  },
  {
    id: 'generative-patterns',
    title: 'Generative Patterns',
    type: 'video' as const,
    src: '/touchdesigner-export.mp4',
    thumbnail: '/td-thumb.jpg',
  },
  {
    id: 'fractal-art',
    title: 'Fractal Art',
    type: 'p5js' as const,
    thumbnail: '/fractal-thumb.jpg',
  },
];

export default function Art() {
  const [selectedPiece, setSelectedPiece] = useState<any>(null);

  const handleArtPieceClick = (piece: any) => {
    setSelectedPiece(piece);
  };

  const handleBackToMuseum = () => {
    setSelectedPiece(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      
      {selectedPiece ? (
        <InteractiveArtPiece 
          piece={selectedPiece} 
          onBack={handleBackToMuseum} 
        />
      ) : (
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 z-10 text-white bg-black bg-opacity-75 px-4 py-2 rounded-lg">
            <h1 className="text-2xl font-bold">My art</h1>
            <p className="text-sm opacity-75">Click on frames to enter interactive exhibits</p>
          </div>
          <ThreeJSMuseum 
            artPieces={artPieces} 
            onArtPieceClick={handleArtPieceClick} 
          />
        </div>
      )}
    </div>
  );
} 