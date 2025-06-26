import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 relative pt-16 pb-24 z-10 px-4">
        <div className="max-w-3xl w-full">
          {/* About Me Header */}
          <Link href="/about" className="group inline-block mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 group-hover:underline transition-all">About Me</h1>
          </Link>
          <p className="text-lg text-gray-700 mb-10 mt-2">
            I'm Medha Subramaniyan, a data analyst who loves turning raw numbers into clear, compelling stories. With Python, SQL, R, and Tableau as my main tools, I build end-to-end data pipelines and interactive dashboards that drive strategic decisions.
          </p>

          {/* Data Analytics & Technical Expertise */}
          <Link href="/data" className="group inline-block mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 group-hover:underline transition-all">Data Analytics & Technical Expertise</h2>
          </Link>
          <ul className="list-disc pl-6 text-gray-700 mb-8">
            <li className="mb-2">
              <span className="font-semibold">CORE Entertainment (Oct 2023 – Present):</span>
              <ul className="list-disc pl-6">
                <li>Automated a centralized reporting system in Python & SQL to track ticket sales, attendance, and bar revenue across 15+ events.</li>
                <li>Designed Tableau dashboards that uncovered sales trends and peak traffic hours—boosting marketing ROI by 13%.</li>
                <li>Created a real-time check-in and bar-sales tracker, enabling live insights for operations.</li>
              </ul>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Infectious Disease Professionals (May 2023 – Aug 2023):</span>
              <ul className="list-disc pl-6">
                <li>Cleaned and validated patient datasets in Python and Excel, cutting data errors by 18%.</li>
                <li>Built Tableau reports that surfaced appointment-flow bottlenecks, leading to a 15% improvement in compliance.</li>
              </ul>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Projects:</span>
              <ul className="list-disc pl-6">
                <li>NBA Analytics Substack: Automated Python/SQL pipelines to scrape, clean, and analyze game data, then translated results into interactive Tableau visuals and narrative articles.</li>
                <li>Patient Appointment Flow Analysis: Processed 11,000+ records in SQL/Python, delivered insights that optimized scheduling policies and lifted satisfaction scores.</li>
              </ul>
            </li>
          </ul>

          {/* Art */}
          <Link href="/art" className="group inline-block mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-700 group-hover:underline transition-all">Art</h2>
          </Link>
          <p className="text-lg text-gray-700 mb-10">
            Outside of work, I dive into creative coding and generative art driven by my fascination with mathematics and engineering. I love to craft synergetic, emotionally resonant experiences through technology—melding aesthetics from art, design, architecture, mathematics, science, and physics. To me each project is an invitation to explore how sound, form, motion, and data converge. These experiments not only spark moments of wonder for viewers but also deepen my understanding of complex systems and sharpen my skills in algorithmic design, UI/UX interaction, and computational problem-solving.
          </p>

          {/* Hobbies */}
          <Link href="/hobbies" className="group inline-block mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 group-hover:underline transition-all">Hobbies</h2>
          </Link>
          <p className="text-lg text-gray-700">
            Beyond all else, I like to blend art, science, and adventure in everything I do. I'm an avid reader on topics from engineering biomimicry to ethics, sociology, history, and neuroscience, always asking how art informs these topics. And when I'm not coding or studying, you'll find me outside fishing, surfing, or just enjoying nature—activities that spark inspiration and remind me how seamlessly STEM is intertwined with art and the world around us.
          </p>
        </div>
      </main>
    </div>
  );
}