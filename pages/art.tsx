import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

const ThreeJSArtGallery = dynamic(() => import('../components/ThreeJSArtGallery'), { ssr: false });

export default function Art() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <ThreeJSArtGallery />
      </div>
    </div>
  );
} 