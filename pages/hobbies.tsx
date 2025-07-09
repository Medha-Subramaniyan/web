import Navbar from '../components/Navbar';

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Navbar position="top" />
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-24 z-10 px-4 font-outfit text-white">
        <h2 className="text-3xl font-bold mb-4 text-white font-outfit">Hobbies & Interests</h2>
        <p className="text-lg text-[#d1d5db] leading-relaxed text-center">
          🎨 Generative art with p5.js<br/>
          🎵 3D Spotify-powered music room<br/>
          🌌 Fractals, Lorenz attractors, audio-reactive visuals
        </p>
      </main>
    </div>
  );
} 