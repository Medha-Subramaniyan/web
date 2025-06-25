import { FaGithub, FaLinkedin, FaRegNewspaper, FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Optionally, use a dynamic import for a lightweight animated background
// For now, let's use a simple animated SVG background as a placeholder

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-500">
      {/* Animated SVG geometric background */}
      <svg className="absolute inset-0 w-full h-full opacity-30 z-0" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="2" fill="none">
          <animate attributeName="r" values="80;100;80" dur="6s" repeatCount="indefinite" />
        </circle>
        <rect x="500" y="100" width="120" height="120" rx="30" stroke="white" strokeWidth="2" fill="none">
          <animate attributeName="x" values="500;520;500" dur="7s" repeatCount="indefinite" />
        </rect>
        <polygon points="600,400 700,500 500,500" stroke="white" strokeWidth="2" fill="none">
          <animate attributeName="points" values="600,400 700,500 500,500;620,420 720,520 520,520;600,400 700,500 500,500" dur="8s" repeatCount="indefinite" />
        </polygon>
      </svg>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center mb-4 drop-shadow-lg">Medha Subramaniyan</h1>
        <h2 className="text-white text-2xl md:text-3xl font-medium text-center mb-10 drop-shadow">Artist & Data Analyst</h2>
        <div className="flex space-x-12 mb-12">
          <div className="flex flex-col items-center">
            <a href="https://github.com/Medha-Subramaniyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border-2 border-white p-3 hover:bg-white hover:text-indigo-600 transition-all">
              <FaGithub className="w-8 h-8" />
            </a>
            <span className="text-white text-sm mt-2">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/medhasubramaniyan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border-2 border-white p-3 hover:bg-white hover:text-blue-700 transition-all">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <span className="text-white text-sm mt-2">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://substack.com/@medhasubrastack?utm_source=user-menu" target="_blank" rel="noopener noreferrer" aria-label="Substack" className="rounded-full border-2 border-white p-3 hover:bg-white hover:text-orange-600 transition-all">
              <FaRegNewspaper className="w-8 h-8" />
            </a>
            <span className="text-white text-sm mt-2">Substack</span>
          </div>
        </div>
        <nav className="flex space-x-12 mb-20">
          <Link href="#about" className="text-white text-lg font-medium hover:underline">About Me</Link>
          <Link href="#resume" className="text-white text-lg font-medium hover:underline">Resume</Link>
          <Link href="#projects" className="text-white text-lg font-medium hover:underline">Projects</Link>
        </nav>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <FaChevronDown className="w-10 h-10 text-white opacity-80" />
        </div>
      </div>
    </div>
  );
}
