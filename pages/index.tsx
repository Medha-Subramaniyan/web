import { FaGithub, FaLinkedin, FaRegNewspaper, FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FlowFieldBackground from '../components/FlowFieldBackground';

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

        {/* Nav links spread out across a 600px container */}
        <nav className="flex justify-around w-full max-w-[600px] mt-[100px] mb-40">
          <Link href="#about" className="text-white text-lg font-medium hover:underline">
            About Me
          </Link>
          <Link href="#resume" className="text-white text-lg font-medium hover:underline">
            Resume
          </Link>
          <Link href="#projects" className="text-white text-lg font-medium hover:underline">
            Data Analytics
          </Link>
          <Link href="#projects" className="text-white text-lg font-medium hover:underline">
            Art
          </Link>
          <Link href="#projects" className="text-white text-lg font-medium hover:underline">
            Hobbies
          </Link>
        </nav>
      </div>
    </div>
  );
}
