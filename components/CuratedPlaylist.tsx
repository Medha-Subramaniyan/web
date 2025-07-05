import React, { useMemo, useEffect, useState } from "react";
import albumData from "../data/ROOM_playlist_album_image_mapping_ordered.json";

interface CuratedPlaylistProps {
  selectedGenres: string[];
  selectedMoods: string[];
  onBack: () => void;
}

export default function CuratedPlaylist({ selectedGenres, selectedMoods, onBack }: CuratedPlaylistProps) {
  // Filter albums by selected genres/moods with fallback strategy
  const matchingAlbums = useMemo(() => {
    // First try: exact matches for both genres and moods
    let filtered = albumData.filter(album => {
      const hasMatchingGenres = selectedGenres.length === 0 || 
        selectedGenres.some((genre: string) => album.genres?.includes(genre));
      const hasMatchingMoods = selectedMoods.length === 0 || 
        selectedMoods.some((mood: string) => album.moods?.includes(mood));
      return hasMatchingGenres && hasMatchingMoods;
    });

    // If no exact matches, try genre-only matches
    if (filtered.length === 0 && selectedGenres.length > 0) {
      filtered = albumData.filter(album => 
        selectedGenres.some((genre: string) => album.genres?.includes(genre))
      );
    }

    // If still no matches, try mood-only matches
    if (filtered.length === 0 && selectedMoods.length > 0) {
      filtered = albumData.filter(album => 
        selectedMoods.some((mood: string) => album.moods?.includes(mood))
      );
    }

    // If still no matches, return all albums
    if (filtered.length === 0) {
      filtered = albumData;
    }

    return filtered;
  }, [selectedGenres, selectedMoods]);

  // Generate playlist from matching albums
  const playlist = useMemo(() => {
    const tracksByAlbum = matchingAlbums.map(album => {
      if (album.top_tracks && album.top_tracks.length > 0) {
        return album.top_tracks.slice(0, 4).map(track => ({
          name: track,
          albumName: album.name,
          albumArtist: album.artist,
          albumImage: album.local_image,
          albumSpotify: album.spotify_url,
          spotifyImageUrl: album.spotify_image_url
        }));
      }
      return [];
    }).filter(arr => arr.length > 0);

    // Interleave tracks from different albums for variety
    const interleaved = [];
    const maxSongs = 20;
    const minSongs = 8;
    let round = 0;
    let added = 0;

    while (interleaved.length < maxSongs && added < tracksByAlbum.length * 4) {
      let anyAddedThisRound = false;
      
      for (let i = 0; i < tracksByAlbum.length; i++) {
        const albumTracks = tracksByAlbum[i];
        if (round < albumTracks.length && interleaved.length < maxSongs) {
          interleaved.push(albumTracks[round]);
          anyAddedThisRound = true;
        }
      }
      
      if (!anyAddedThisRound) break;
      round++;
      added += tracksByAlbum.length;
    }

    // Ensure we have at least minSongs
    if (interleaved.length < minSongs) {
      const remainingTracks = tracksByAlbum.flat().slice(interleaved.length, minSongs - interleaved.length);
      interleaved.push(...remainingTracks);
    }

    return interleaved;
  }, [matchingAlbums]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            ← Back to Selection
          </button>
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Your Curated Soundscape
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Based on your selected genres ({selectedGenres.join(", ")}) and your vibe ({selectedMoods.join(", ")}), 
            I've curated the following playlist for you based on my taste. 
            <br />
            <span className="text-amber-700">I hope you find something you enjoy!</span>
          </p>
        </div>

        {/* Playlist */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-amber-900 mb-6">
            Curated Playlist ({playlist.length} tracks)
          </h2>
          
          <div className="space-y-4">
            {playlist.map((track, index) => (
              <div
                key={`${track.albumArtist}-${track.name}-${index}`}
                className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200 hover:shadow-md transition-shadow"
              >
                {/* Track Number */}
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                  {index + 1}
                </div>

                {/* Album Cover */}
                <div className="w-20 h-20 rounded-lg mr-4 border border-amber-200 overflow-hidden bg-amber-100 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={track.spotifyImageUrl}
                    alt={`${track.albumName} by ${track.albumArtist}`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      console.log('Failed to load Spotify image:', track.spotifyImageUrl);
                      const target = e.currentTarget;
                      target.src = track.albumImage;
                      target.onerror = () => {
                        console.log('Failed to load local image:', track.albumImage);
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      };
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-amber-600 bg-amber-50">
                    <i className="fa-solid fa-music text-xl"></i>
                  </div>
                </div>

                {/* Track Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">
                    {track.name}
                  </h3>
                  <p className="text-amber-700 font-medium">
                    {track.albumArtist}
                  </p>
                  <p className="text-amber-600 text-sm">
                    {track.albumName}
                  </p>
                </div>

                {/* Spotify Link */}
                <a
                  href={track.albumSpotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <i className="fab fa-spotify mr-2"></i>
                  Listen
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-amber-700">
          <p className="text-sm">
            All album covers and track information are sourced from Spotify.
          </p>
        </div>
      </div>
    </div>
  );
} 