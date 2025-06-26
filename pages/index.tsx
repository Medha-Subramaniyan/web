import { FaGithub, FaLinkedin, FaRegNewspaper, FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FlowFieldBackground from '../components/FlowFieldBackground';
import Navbar from '../components/Navbar';

// Optionally, use a dynamic import for a lightweight animated background
// For now, let's use a simple animated SVG background as a placeholder

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-500">
      <FlowFieldBackground />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center mb-4 drop-shadow-lg">
          Medha Subramaniyan
        </h1>
        <h2 className="text-white text-2xl md:text-3xl font-medium text-center mb-16 drop-shadow">
          Data Analyst
        </h2>

        {/* Icons spread out across an 800px container */}
        <div className="flex justify-around w-full max-w-[800px] mt-[50px] mb-40">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://github.com/Medha-Subramaniyan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border-2 border-white p-3 hover:bg-white hover:text-indigo-600 transition-all"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <span className="text-white text-sm">GitHub</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://www.linkedin.com/in/medhasubramaniyan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border-2 border-white p-3 hover:bg-white hover:text-blue-700 transition-all"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <span className="text-white text-sm">LinkedIn</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://substack.com/@medhasubrastack?utm_source=user-menu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
              className="rounded-full border-2 border-white p-3 hover:bg-white hover:text-orange-600 transition-all"
            >
              <FaRegNewspaper className="w-8 h-8" />
            </a>
            <span className="text-white text-sm">Substack</span>
          </div>
        </div>

        {/* Shared Navbar component for navigation, hide Home link */}
        <div className="w-full flex justify-center mt-[100px] mb-40">
          <Navbar hideHomeLink />
        </div>
      </div>
      {/* Bouncing Arrow to About Page */}
      <Link href="/about" aria-label="Go to About Me">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20">
          <FaChevronDown className="w-10 h-10 text-white opacity-80" />
        </div>
      </Link>
    </div>
  );
}
