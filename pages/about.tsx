import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About Me</h1>
        <p className="text-lg text-gray-600 text-center">
          This is a blank About Me page. <br />
          (Replace this with your real content!)
        </p>
      </main>
    </div>
  );
}
