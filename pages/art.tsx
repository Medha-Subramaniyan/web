import Navbar from '../components/Navbar';

export default function Art() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-16 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">Art</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">My art</h2>
      </main>
    </div>
  );
} 