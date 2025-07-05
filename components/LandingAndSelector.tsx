import React, { useState } from 'react';

interface LandingAndSelectorProps {
  onCurate: (genres: string[], moods: string[]) => void;
}

const availableGenres = [
  "Hip-Hop", "R&B", "Soul", "Trap", "Alternative Hip-Hop", 
  "Conscious Rap", "Pop Rap", "Southern Hip-Hop", "Neo-Soul",
  "Electronic", "House", "Jazz", "Modal Jazz", "Cool Jazz",
  "Alternative R&B", "Soundtrack"
];

const availableMoods = [
  "Energetic", "Chill", "Smooth", "Reflective", "Thoughtful",
  "Confident", "Nostalgic", "Hype", "Playful", "Experimental",
  "Melancholic", "Atmospheric", "Dark", "Groovy", "Sensual",
  "Empowering", "Serious"
];

export default function LandingAndSelector({ onCurate }: LandingAndSelectorProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const toggleMood = (mood: string) => {
    setSelectedMoods(prev => 
      prev.includes(mood) ? prev.filter(m => m !== mood) : [...prev, mood]
    );
  };

  const handleCurate = () => {
    onCurate(selectedGenres, selectedMoods);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">
            Curate Your Soundscape
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Select your favorite genres and current mood to discover a personalized playlist 
            that matches your vibe perfectly.
          </p>
        </div>

        {/* Genre Selection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-amber-900 mb-6">
            What genres do you love? ({selectedGenres.length} selected)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableGenres.map(genre => (
              <button
                key={genre}
                onClick={() => toggleGenre(genre)}
                className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  selectedGenres.includes(genre)
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                    : 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Mood Selection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-amber-900 mb-6">
            What's your current vibe? ({selectedMoods.length} selected)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableMoods.map(mood => (
              <button
                key={mood}
                onClick={() => toggleMood(mood)}
                className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  selectedMoods.includes(mood)
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                    : 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Curate Button */}
        <div className="text-center">
          <button
            onClick={handleCurate}
            disabled={selectedGenres.length === 0 && selectedMoods.length === 0}
            className={`px-8 py-4 rounded-lg text-xl font-semibold transition-all ${
              selectedGenres.length === 0 && selectedMoods.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            🎵 Curate My Soundscape
          </button>
          {(selectedGenres.length === 0 && selectedMoods.length === 0) && (
            <p className="text-amber-600 mt-4">
              Please select at least one genre or mood to continue
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-amber-700">
          <p className="text-sm">
            Discover music that matches your taste and current mood
          </p>
        </div>
      </div>
    </div>
  );
} 