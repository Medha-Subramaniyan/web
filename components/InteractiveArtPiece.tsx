'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import p5.js to avoid SSR issues
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

interface ArtPiece {
  id: string;
  title: string;
  type: 'p5js' | 'video' | 'image';
  src?: string;
  component?: React.ComponentType;
  thumbnail?: string;
}

interface InteractiveArtPieceProps {
  piece: ArtPiece;
  onBack: () => void;
}

export default function InteractiveArtPiece({ piece, onBack }: InteractiveArtPieceProps) {
  const [controls, setControls] = useState({
    speed: 0.5,
    intensity: 0.7,
    color: '#ff6b6b',
  });

  // Sample p5.js sketch setup and draw functions
  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  };

  const draw = (p5: any) => {
    p5.background(20);
    
    // Create flowing particles based on controls
    for (let i = 0; i < 50; i++) {
      const x = p5.noise(i * 0.01 + p5.frameCount * 0.01 * controls.speed) * p5.width;
      const y = p5.noise(i * 0.01 + p5.frameCount * 0.01 * controls.speed + 100) * p5.height;
      
      p5.fill(controls.color);
      p5.noStroke();
      p5.circle(x, y, 10 * controls.intensity);
    }
  };

  const renderContent = () => {
    switch (piece.type) {
      case 'p5js':
        return (
          <div className="w-full h-full">
            <Sketch setup={setup} draw={draw} />
          </div>
        );
      case 'video':
        return (
          <video 
            src={piece.src} 
            controls 
            className="w-full h-full object-contain"
            autoPlay 
            loop 
            muted
          />
        );
      case 'image':
        return (
          <img 
            src={piece.src} 
            alt={piece.title}
            className="w-full h-full object-contain"
          />
        );
      default:
        return <div>Unsupported art type</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-75 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{piece.title}</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all"
          >
            ← Back to Museum
          </button>
        </div>
      </div>

      {/* Controls */}
      {piece.type === 'p5js' && (
        <div className="absolute top-20 left-4 z-10 bg-black bg-opacity-75 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Controls</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Speed</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={controls.speed}
                onChange={(e) => setControls(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Intensity</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={controls.intensity}
                onChange={(e) => setControls(prev => ({ ...prev, intensity: parseFloat(e.target.value) }))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Color</label>
              <input
                type="color"
                value={controls.color}
                onChange={(e) => setControls(prev => ({ ...prev, color: e.target.value }))}
                className="w-full h-8 rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* Art Content */}
      <div className="w-full h-full">
        {renderContent()}
      </div>
    </div>
  );
} 