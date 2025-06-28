import React from 'react';
import Navbar from '../../components/Navbar';
import LorenzAttractorSketch from '../../components/LorenzAttractorSketch';
import Link from 'next/link';

export default function LorenzViewer() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Lorenz Attractor</h1>
          <p className="text-gray-300 max-w-2xl">
            The Lorenz attractor is a set of chaotic solutions of the Lorenz system, a system of three ordinary differential equations. 
            This mathematical model describes the behavior of a two-dimensional fluid layer heated from below, which is a simplified model for atmospheric convection.
          </p>
        </div>
        
        <div className="bg-black rounded-lg p-4 shadow-2xl">
          <LorenzAttractorSketch />
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/art">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all">
              ← Back to Gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 