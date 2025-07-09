import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaArrowLeft, FaGraduationCap, FaLightbulb, FaPalette, FaFlask } from 'react-icons/fa';

export default function Learning() {
  const learningCategories = [
    {
      icon: FaPalette,
      title: 'Visual Arts',
      description: 'Exploring different mediums, techniques, and artists who push creative boundaries',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: FaFlask,
      title: 'Emerging Technologies',
      description: 'Staying current with the latest innovations and their impact on various fields',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: FaLightbulb,
      title: 'Creative Innovation',
      description: 'Discovering artists and creators who experiment across different mediums',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#111827]">
      <Navbar position="top" />
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-24 z-10 px-4 font-outfit text-white">
        <div className="w-full max-w-6xl">
          <div className="flex items-center mb-8">
            <Link href="/hobbies" className="flex items-center text-[#60a5fa] hover:opacity-80 transition-opacity duration-200">
              <FaArrowLeft className="mr-2" />
              Back to Hobbies
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-8 text-white font-outfit">Learning</h1>
          <p className="text-2xl mb-12 text-white font-outfit text-center max-w-3xl mx-auto">
            I'm constantly diving into topics—from architecture and design, to biomimicry and ethics to neuroscience and geopolitics. Doing so helps me spark new ideas and stay inspired.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {learningCategories.map((category, index) => (
              <div key={index} className="bg-[#363B44] border border-[#5a5a5a]/40 rounded-[24px] p-8 text-center hover:transform hover:scale-105 transition-transform duration-200">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                  <category.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{category.title}</h3>
                <p className="text-[#d1d5db] leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 