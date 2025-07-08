'use client'

import Link from 'next/link';

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "About Me", href: "/about" },
  { label: "Data Analytics", href: "/data-analytics" },
  { label: "Art Gallery", href: "/art" },
  { label: "Hobbies", href: "/hobbies" },
];

export default function Navbar() {
  return (
    <div className="w-full flex justify-center items-start pt-6">
      <nav className="w-[800px] h-[70px] flex items-center justify-center bg-[#4a4a4a]/60 border border-[#5a5a5a]/40 rounded-[50px] px-12">
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
  );
}
