import React, { useMemo } from "react";
import albumData from "../public/spotify-analytics/data/ROOM_playlist_album_image_mapping_with_metadata.json";

interface CuratedPlaylistProps {
  selectedGenres: string[];
  selectedMoods: string[];
  onBack: () => void;
}

interface Album {
  rank: number;
  playlist_position: number;
  artist: string;
  name: string;
  local_image: string;
  spotify_url: string;
  spotify_image_url: string;
  track_count: number;
  avg_popularity: number;
  track_name: string;
  genres: string[];
  moods: string[];
  top_tracks: string[];
}

interface PlaylistTrack {
  name: string;
  albumName: string;
  albumArtist: string;
  albumImage: string;
  albumSpotify: string;
}

export default function CuratedPlaylist({ selectedGenres, selectedMoods, onBack }: CuratedPlaylistProps) {
  // Generate explanation
  const explanation = useMemo(() => {
    return (
      <>
        <span className="font-semibold text-amber-900">Why these songs?</span> <br />
        Based on your favorite genres ({selectedGenres.join(", ")}) and your vibe ({selectedMoods.join(", ")}), I've curated the following playlist for you based on my taste. <br />
        <span className="text-amber-700">I hope you find something you enjoy!</span>
      </>
    );
  }, [selectedGenres, selectedMoods]);

  // Generate playlist based on selected genres and moods
  const playlist = useMemo(() => {
    // Filter albums based on selected genres and moods
    const matchingAlbums = (albumData as Album[]).filter((album: Album) => {
      const genreMatch = selectedGenres.length === 0 || 
        selectedGenres.some(genre => 
          album.genres.some((g: string) => 
            g.toLowerCase().includes(genre.toLowerCase())
          )
        );
      
      const moodMatch = selectedMoods.length === 0 || 
        selectedMoods.some(mood => 
          album.moods.some((m: string) => 
            m.toLowerCase().includes(mood.toLowerCase())
          )
        );
      
      return genreMatch && moodMatch;
    });

    // Step 1: Build a list of lists (tracks per album)
    const tracksByAlbum = matchingAlbums.map(album => {
      if (album.top_tracks && album.top_tracks.length > 0) {
        return album.top_tracks.slice(0, 4).map(track => ({
          name: track,
          albumName: album.name,
          albumArtist: album.artist,
          albumImage: album.spotify_image_url,
          albumSpotify: album.spotify_url,
        }));
      }
      return [];
    }).filter(arr => arr.length > 0);

    // Shuffle and limit to 20 tracks
    const shuffled = tracksByAlbum.flat().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  }, [selectedGenres, selectedMoods]);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
          <button onClick={onBack} className="text-amber-700 hover:text-amber-900 font-medium">← Back</button>
        </div>
      </header>

      <main className="pt-28 max-w-3xl mx-auto px-4">
        <h2 className="serif text-3xl md:text-4xl font-semibold text-amber-900 mb-4 italic text-center">
          Your Curated Soundscape
        </h2>
        <div className="bg-white/70 rounded-xl p-6 mb-8 shadow vinyl-shadow text-center">
          {explanation}
        </div>
        <div className="space-y-6">
          {playlist.map((track: PlaylistTrack, idx: number) => (
              <div key={idx} className="flex items-center bg-white/80 rounded-lg p-4 shadow hover:bg-amber-100/60 transition">
                <div className="w-20 h-20 rounded-lg mr-4 border border-amber-200 overflow-hidden bg-amber-100 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={track.albumImage} 
                    alt={track.albumName} 
                    className="w-full h-full object-cover"
                    onLoad={() => console.log('Successfully loaded image:', track.albumImage)}
                    onError={(e) => {
                      console.log('Failed to load image:', track.albumImage);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-amber-600 bg-amber-50">
                    <i className="fa-solid fa-music text-xl"></i>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-amber-900 truncate">{track.name}</div>
                  <div className="text-amber-700 text-sm truncate">{track.albumArtist} — <span className="italic">{track.albumName}</span></div>
                </div>
                <a href={track.albumSpotify} target="_blank" rel="noopener noreferrer" className="ml-4 text-amber-600 hover:text-green-600">
                  <i className="fa-brands fa-spotify text-2xl"></i>
                </a>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
} 