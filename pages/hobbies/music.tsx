import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import MusicRoom to avoid SSR issues
const MusicRoom = dynamic(() => import('../../components/MusicRoom'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <div className="text-purple-600 text-lg">Loading 3D Music Room...</div>
    </div>
  )
});

export default function Music() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar position="top" />
      <div className="relative">
        <div className="absolute top-4 left-4 z-20">
          <Link href="/hobbies" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Hobbies
          </Link>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <Link href="/curated-soundscape" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
            Curated Soundscape
          </Link>
        </div>
        <MusicRoom />
      </div>
    </div>
  );
} 