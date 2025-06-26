'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface NavbarProps {
  hideHomeLink?: boolean;
}

export default function Navbar({ hideHomeLink = false }: NavbarProps) {
  const router = useRouter()
  const navLinks: NavLink[] = [
    !hideHomeLink ? { href: '/', label: 'Home' } : null,
    { href: '/resume.pdf', label: 'Resume', external: true },
    { href: '/about', label: 'About Me' },
    { href: '/data-analytics', label: 'Data Analytics' },
    { href: '/art', label: 'Art' },
    { href: '/hobbies', label: 'Hobbies' }
  ].filter((link): link is NavLink => Boolean(link));

  return (
    <nav className="flex justify-center py-8 bg-transparent">
      <ul className="flex px-8 py-2 rounded-full border border-gray-300 bg-white/80 backdrop-blur-md shadow-sm" style={{ gap: '100px' }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg px-2 transition-colors duration-200 font-medium text-gray-500 hover:text-gray-900`}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>
                <span
                  className={
                    `text-lg px-2 transition-colors duration-200 ` +
                    (router.pathname === link.href
                      ? 'font-bold text-gray-900'
                      : 'font-medium text-gray-500 hover:text-gray-900')
                  }
                >
                  {link.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
