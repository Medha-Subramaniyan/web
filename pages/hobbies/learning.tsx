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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-16 pb-24 px-4">
        <div className="max-w-6xl w-full">
          {/* Back button */}
          <Link href="/hobbies" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Hobbies
          </Link>
          
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <FaGraduationCap className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Learning</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diving deep into different topics, visual artists, mediums, and creators who experiment across various artistic boundaries
            </p>
          </div>
          
          {/* Learning Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {learningCategories.map((category, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-br ${category.color} p-4 rounded-xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Placeholder content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Current Learning Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Topics I'm Exploring</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Digital Art & AI Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Sustainable Design Practices
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Cross-Medium Artistic Expression
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Emerging Creative Technologies
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Inspiring Artists</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Contemporary Digital Artists
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Mixed Media Innovators
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Experimental Creators
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Boundary-Pushing Designers
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-8 italic">
              Coming soon: Detailed explorations of topics and artists that inspire my creative journey
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 