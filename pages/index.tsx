import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="flex space-x-6 p-4 bg-white shadow">
      <Link href="/">Home</Link>
      <Link href="/data-analytics">Data Analytics</Link>
      <Link href="/art">Art</Link>
      <Link href="/hobbies">Hobbies</Link>
    </nav>
  );
}
