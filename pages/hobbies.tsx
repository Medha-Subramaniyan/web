import Navbar from '../components/Navbar';

export default function HobbiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Hobbies & Interests</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          🎨 Generative art with p5.js<br/>
          🎵 3D Spotify-powered music room<br/>
          🌌 Fractals, Lorenz attractors, audio-reactive visuals
        </p>
      </main>
    </>
  );
} 