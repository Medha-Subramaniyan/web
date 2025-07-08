import Navbar from '../components/Navbar';

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Data Analytics Projects</h2>
        <ul className="text-lg text-gray-700 list-disc pl-6">
          <li>NBA shot-quality dashboard</li>
          <li>Event attendance forecasting</li>
          <li>Wins &amp; Wallets: BI impact study</li>
        </ul>
      </main>
    </>
  );
} 