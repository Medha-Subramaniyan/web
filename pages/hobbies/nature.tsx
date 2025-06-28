import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaArrowLeft, FaTree, FaFish, FaWater, FaSun } from 'react-icons/fa';

export default function Nature() {
  const natureActivities = [
    {
      icon: FaFish,
      title: 'Fishing',
      description: 'Finding tranquility by the water, connecting with nature through the art of fishing',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: FaWater,
      title: 'Surfing',
      description: 'Riding the waves and feeling the ocean\'s energy beneath me',
      color: 'from-teal-400 to-blue-400'
    },
    {
      icon: FaSun,
      title: 'Sunset Watching',
      description: 'Capturing the magic of golden hour and the beauty of natural light',
      color: 'from-orange-400 to-red-400'
    }
  ];

  const photoGallery = [
    { id: 1, title: 'Ocean Sunset', category: 'Sunset', description: 'Golden hour over the Pacific' },
    { id: 2, title: 'Mountain Lake', category: 'Landscape', description: 'Serene mountain reflections' },
    { id: 3, title: 'Forest Path', category: 'Nature', description: 'Peaceful woodland trail' },
    { id: 4, title: 'Beach Waves', category: 'Ocean', description: 'Powerful ocean energy' },
    { id: 5, title: 'Desert Dunes', category: 'Landscape', description: 'Vast desert beauty' },
    { id: 6, title: 'River Bend', category: 'Water', description: 'Meandering river flow' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-emerald-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-16 pb-24 px-4">
        <div className="max-w-6xl w-full">
          <Link href="/hobbies" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8 transition-colors">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Hobbies
          </Link>
          
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <FaTree className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Nature</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finding peace in the outdoors through fishing, surfing, and simply enjoying beautiful sunsets that inspire my art
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {natureActivities.map((activity, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-br ${activity.color} p-4 rounded-xl mb-6`}>
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nature Photo Gallery</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              A collection of moments captured in nature that inspire my artistic vision and creative process
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoGallery.map((photo) => (
                <div key={photo.id} className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-green-300 to-emerald-300 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-green-700">
                      <FaTree className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Photo Placeholder</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{photo.title}</h3>
                  <p className="text-sm text-green-600 mb-2">{photo.category}</p>
                  <p className="text-sm text-gray-600">{photo.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-500 italic mb-4">
                Coming soon: Real photos from my nature adventures and artistic inspirations
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <FaFish className="w-4 h-4 mr-2" />
                  Fishing spots
                </span>
                <span className="flex items-center">
                  <FaWater className="w-4 h-4 mr-2" />
                  Surf locations
                </span>
                <span className="flex items-center">
                  <FaSun className="w-4 h-4 mr-2" />
                  Sunset views
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 