'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-sm">
      <ul className="container mx-auto flex justify-center space-x-8 py-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/data-analytics">Data Analytics</Link></li>
        <li><Link href="/art">Art</Link></li>
        <li><Link href="/hobbies">Hobbies</Link></li>
      </ul>
    </nav>
  )
}
