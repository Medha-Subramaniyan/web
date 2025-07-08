import { FaGithub, FaLinkedin, FaRegNewspaper, FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FlowFieldBackground from '../components/FlowFieldBackground';

export default function Home() {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume.pdf", external: true },
    { label: "About Me", href: "/about" },
    { label: "Data Analytics", href: "/data-analytics" },
    { label: "Art Gallery", href: "/art" },
    { label: "Hobbies", href: "/hobbies" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <FlowFieldBackground />
      <div className="relative z-10 flex flex-col items-center w-full pt-24 pb-16 -translate-y-[20px]">
        {/* Name Heading */}
        <h1 className="font-outfit font-normal text-[80px] text-white mb-1 tracking-tight">
    Medha Subramaniyan
  </h1>
        <p className="font-jetbrains font-normal text-[40px] leading-[44px] text-[#BFDBFE] tracking-normal mb-2 -translate-y-[85px]">Data Analyst</p>
        {/* Bubbles Placeholders */}
        <div className="flex flex-row justify-evenly items-center gap-[32px] mb-10 -translate-y-[80px]">
          {/* LinkedIn Icon */}
          <div className="w-[64px] h-[76px] rounded-[38px] bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 hover:opacity-80 transition-opacity duration-200 cursor-pointer flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.212V9.359c0-.216.016-.432.08-.586.175-.432.574-.88 1.243-.88.877 0 1.228.664 1.228 1.635v3.866h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.6 5.6 0 0 1 .016-.025V6.169h-2.4c.03.7 0 7.225 0 7.225h2.4z"/>
            </svg>
          </div>
          {/* GitHub Icon */}
          <div className="w-[64px] h-[76px] rounded-[38px] bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 hover:opacity-80 transition-opacity duration-200 cursor-pointer flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </div>
          {/* Substack Icon */}
          <div className="w-[64px] h-[76px] rounded-[38px] bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 hover:opacity-80 transition-opacity duration-200 cursor-pointer flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
          </svg>
          </div>
        </div>

       

        
      {/* Icon Placeholders */}
        {/* Centered pill-shaped Navbar */}
        <nav className="w-[800px] h-[70px] flex items-center justify-center bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 rounded-[50px] px-12 mb-8 mt-4">
          <div className="flex justify-evenly w-full text-lg font-outfit font-medium">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white no-underline hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              )
            ))}
        </div>
        </nav>
      </div>
    </div>
  );
}

