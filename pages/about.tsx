import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Navbar position="top" />
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-24 z-10 px-4 font-outfit text-white">
        <h1 className="text-5xl font-bold mb-8 text-white font-outfit">About Me</h1>
        <p className="text-3xl mb-8 text-white font-outfit text-center">
          Hello! I'm Medha Subramaniyan, a data analyst specializing in Python, SQL, R and Tableau. I'm currently studying Computer Engineering at the University of Central Florida in Orlando, and am expected to graduate in December 2026.
        </p>
        <p className="text-2xl mb-8 text-white font-outfit text-center">
          Click on the following cards to learn more about me!
        </p>
        <div className="w-full flex justify-center">
          <div className="flex flex-row justify-center items-center gap-[15px] mb-8">
            <Link href="/data-analytics" className="block no-underline text-inherit hover:no-underline">
              <div className="w-[380px] h-[440px] bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 rounded-[40px] font-outfit text-white p-0 text-left flex flex-col justify-center hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="w-full flex flex-col items-start px-[32px] pt-[32px] pb-[32px]">
                  <div className="mb-[28px] group-hover:scale-110 transition-transform duration-300">
                    <img src="/SVG/DA.svg" alt="Data Analytics Icon" className="w-16 h-16" />
                  </div>
                  <h2 className="text-3xl font-outfit font-semibold mb-[14px] text-white">Data Analytics</h2>
                  <p className="text-base font-outfit text-[#d1d5db] mb-[28px] leading-relaxed break-words">
                    Transforming complex datasets into actionable insights using advanced statistical methods and visualization techniques.
                  </p>
                  <ul className="space-y-[10px] text-lg font-outfit">
                    <li className="flex items-center text-[#60a5fa]">
                      <span className="mr-2">✔</span> Python & R
                    </li>
                    <li className="flex items-center text-[#60a5fa]">
                      <span className="mr-2">✔</span> SQL
                    </li>
                    <li className="flex items-center text-[#60a5fa]">
                      <span className="mr-2">✔</span> Tableau & Power BI
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <Link href="/hobbies" className="block no-underline text-inherit hover:no-underline">
              <div className="w-[400px] h-[440px] bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 rounded-[40px] font-outfit text-white p-0 text-left flex flex-col justify-center hover:bg-[#4a4a4a] hover:border-[#60a5fa]/60 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="w-full flex flex-col items-start px-[32px] pt-[32px] pb-[32px]">
                  <div className="mb-[28px] group-hover:scale-110 transition-transform duration-300">
                    <img src="/SVG/hobbies.svg" alt="Hobbies Icon" className="w-16 h-16" />
                  </div>
                  <h2 className="text-3xl font-outfit font-semibold mb-[14px] text-white">Hobbies</h2>
                  <p className="text-lg font-outfit text-[#d1d5db] mb-[28px] leading-relaxed">
                    Balancing analytical thinking with creative pursuits through music, continuous learning, and nature exploration.
                  </p>
                  <ul className="space-y-[10px] text-lg font-outfit">
                    <li className="flex items-center text-[#4ade80]">
                      <span className="mr-2">✔</span> Nature
                    </li>
                    <li className="flex items-center text-[#4ade80]">
                      <span className="mr-2">✔</span> Continuous Learning
                    </li>
                    <li className="flex items-center text-[#4ade80]">
                      <span className="mr-2">✔</span> Music
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Example of a link with no underline and white text */}
        {/* <a href="#" className="text-white no-underline font-outfit hover:opacity-80 transition-opacity duration-200">My Resume</a> */}
      </main>
    </div>
  );
}