import React, { useState } from 'react';
import LandingAndSelector from '../components/LandingAndSelector';
import CuratedPlaylist from '../components/CuratedPlaylist';

export default function CuratedSoundscapePage() {
  const [step, setStep] = useState<'selection' | 'playlist'>('selection');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

  const handleCurate = (genres: string[], moods: string[]) => {
    setSelectedGenres(genres);
    setSelectedMoods(moods);
    setStep('playlist');
  };

  const handleBack = () => {
    setStep('selection');
  };

  if (step === 'playlist') {
    return (
      <CuratedPlaylist 
        selectedGenres={selectedGenres}
        selectedMoods={selectedMoods}
        onBack={handleBack}
      />
    );
  }

  return (
    <LandingAndSelector onCurate={handleCurate} />
  );
} 