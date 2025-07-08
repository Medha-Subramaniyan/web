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
    { href: '/art', label: 'Art Gallery' },
    { href: '/hobbies', label: 'Hobbies' }
  ].filter((link): link is NavLink => Boolean(link));

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50 flex gap-6 px-8 py-4 rounded-b-2xl shadow">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className={
          'text-gray-800 font-medium hover:underline' +
          (router.pathname === link.href ? ' font-bold underline' : '')
        }>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
