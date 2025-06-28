import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaMusic, FaGraduationCap, FaTree } from 'react-icons/fa';

export default function Hobbies() {
  const hobbies = [
    {
      id: 'music',
      title: 'Music',
      description: 'Exploring diverse musical landscapes and discovering new sounds that resonate with my soul.',
      icon: FaMusic,
      href: '/hobbies/music',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'learning',
      title: 'Learning',
      description: 'Diving deep into different topics, visual artists, mediums, and creators who experiment across various artistic boundaries.',
      icon: FaGraduationCap,
      href: '/hobbies/learning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'nature',
      title: 'Nature',
      description: 'Finding peace in the outdoors through fishing, surfing, and simply enjoying beautiful sunsets that inspire my art.',
      icon: FaTree,
      href: '/hobbies/nature',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-blue-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-16 pb-24 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">My Hobbies</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
          These are the three main passions that drive my creativity and keep me inspired
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {hobbies.map((hobby) => (
            <Link key={hobby.id} href={hobby.href}>
              <div className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${hobby.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
                  <div className="flex flex-col items-center text-center text-white">
                    <hobby.icon className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h2 className="text-2xl font-bold mb-4">{hobby.title}</h2>
                    <p className="text-white/90 leading-relaxed">{hobby.description}</p>
                    <div className="mt-6 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      Click to explore →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 