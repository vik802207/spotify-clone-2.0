/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import FooterPlayer from '../components/FooterPlayer';
const musictoken=process.env.REACT_APP_SHAZAM_API_KEY;
const COUNTRY_OPTIONS = [
  { name: 'India', code: 'in' },
  { name: 'USA', code: 'us' },
  { name: 'UK', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'Japan', code: 'jp' },
];

const TopMostPlayed = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryCode, setCountryCode] = useState('in');
  const [limit] = useState(10);
  const [playingInfo, setPlayingInfo] = useState(null);

  const fetchTopSongs = async (code) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://apple-marketing-tools.p.rapidapi.com/api/v2/${code}/music/most-played/${limit}/songs.json`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': musictoken,
            'x-rapidapi-host': 'apple-marketing-tools.p.rapidapi.com',
          },
        }
      );
      const result = await response.json();
      setSongs(result.feed?.results || []);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopSongs(countryCode);
  }, [countryCode]);

  return (
    <div className="p-4 pb-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">🔥 Top Most Played Songs</h2>
        <select
          className="border px-3 py-1 rounded-md"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          {COUNTRY_OPTIONS.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {songs.map((song, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden relative group"
            >
              <div className="relative">
                <img
                  src={song.artworkUrl100.replace('100x100bb', '500x500bb')}
                  alt={song.name}
                  className="w-full h-52 object-cover"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm opacity-0 hover:opacity-100 transition"
                  onClick={() =>
                    setPlayingInfo({
                      previewUrl: song.previews?.[0]?.url || '/dummy.mp3',
                      trackName: song.name,
                      artist: song.artistName,
                      image: song.artworkUrl100.replace('100x100bb', '500x500bb'),
                    })
                  }
                >
                  ▶ Play
                </button>
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-lg text-black">{song.name}</h3>
                <p className="text-sm text-gray-700">{song.artistName}</p>
              </div>

              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                🎵 Apple Music
              </a>
            </div>
          ))}
        </div>
      )}

      <FooterPlayer
        previewUrl={playingInfo?.previewUrl}
        trackName={playingInfo?.trackName}
        artist={playingInfo?.artist}
        image={playingInfo?.image}
      />
    </div>
  );
};

export default TopMostPlayed;
