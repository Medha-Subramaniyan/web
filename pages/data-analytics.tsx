import Navbar from '../components/Navbar';

export default function DataAnalytics() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-16 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8">Data Analytics</h1>
      </main>
    </div>
  );
} 