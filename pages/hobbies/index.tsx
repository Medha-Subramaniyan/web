import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Navbar position="top" />
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-24 z-10 px-4 font-outfit text-white">
        <h1 className="text-5xl font-bold mb-6 text-white font-outfit">Hobbies</h1>
        <p className="text-2xl mb-12 text-white font-outfit text-center max-w-2xl">
          These are the three main passions that drive my creativity and keep me inspired. Click on each card to learn more!
        </p>
        <div className="w-full flex justify-center">
          <div className="flex flex-row justify-center items-stretch gap-[32px]">
            {/* Music Card */}
            <Link href="/hobbies/music" className="block no-underline text-inherit hover:no-underline">
              <div className="w-[370px] h-[370px] bg-[#363B44] border border-[#5a5a5a]/40 rounded-[24px] font-outfit text-white p-0 text-center flex flex-col items-center justify-center hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">
                  <img src="/SVG/music.svg" alt="Music Icon" className="w-20 h-20 mx-auto" />
                </div>
                <h2 className="text-2xl font-outfit font-semibold mb-4 text-white">Music</h2>
                <p className="text-lg font-outfit text-[#d1d5db] px-6">
                  I love exploring new genres, artists, and fresh sounds from around the world and curating playlists. Click here to see my 3D data visualization of my favorite albums and get your own curated playlist!
                </p>
              </div>
            </Link>
            {/* Learning Card */}
            <Link href="/hobbies/learning" className="block no-underline text-inherit hover:no-underline">
              <div className="w-[370px] h-[370px] bg-[#363B44] border border-[#5a5a5a]/40 rounded-[24px] font-outfit text-white p-0 text-center flex flex-col items-center justify-center hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">
                  <img src="/SVG/learning.svg" alt="Learning Icon" className="w-20 h-20 mx-auto" />
                </div>
                <h2 className="text-2xl font-outfit font-semibold mb-4 text-white">Learning</h2>
                <p className="text-lg font-outfit text-[#d1d5db] px-6">
                  I'm constantly diving into topics—from architecture and design, to biomimicry and ethics to neuroscience and geopolitics. Doing so helps me spark new ideas and stay inspired.
                </p>
              </div>
            </Link>
            {/* Nature Card */}
            <div className="w-[370px] h-[370px] bg-[#363B44] border border-[#5a5a5a]/40 rounded-[24px] font-outfit text-white p-0 text-center flex flex-col items-center justify-center hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className="mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">
                <img src="/SVG/nature.svg" alt="Nature Icon" className="w-20 h-20 mx-auto" />
              </div>
              <h2 className="text-2xl font-outfit font-semibold mb-4 text-white">Nature</h2>
              <p className="text-lg font-outfit text-[#d1d5db] px-6">
                Whether I'm out fishing, hiking, surfing, or just enjoying a nice Floridian sunset, spending time outdoors helps me disconnect, recharge, and keep my mind fresh.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 