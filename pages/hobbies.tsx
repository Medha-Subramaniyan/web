import Navbar from '../components/Navbar';

export default function Hobbies() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-16 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-8">My hobbies</h1>
      </main>
    </div>
  );
} 