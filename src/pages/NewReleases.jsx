// NewReleases.jsx

import React, { useEffect, useState } from "react";
import FooterPlayer from "../components/FooterPlayer";
// require('dotenv').config()
const token = process.env.REACT_APP_SPOTIFY_TOKEN;
const LANGUAGES = [
  "Hindi", "Punjabi", "Gujarati", "Tamil", "Telugu",
  "Bhojpuri", "Malayalam", "Urdu", "Haryanvi", "Rajasthani", "Odia", "Assamese"
];

const langToId = {
  Hindi: "bollywood",
  Punjabi: "punjabi",
  Gujarati: "gujarati",
  Tamil: "tamil",
  Telugu: "telugu",
  Bhojpuri: "bhojpuri",
  Malayalam: "malayalam",
  Urdu: "urdu",
  Haryanvi: "haryanvi",
  Rajasthani: "rajasthani",
  Odia: "odia",
  Assamese: "assamese"
};

const NewReleases = () => {
  const [items, setItems] = useState([]);
  const [selectedLang, setSelectedLang] = useState(null);
  const [loading, setLoading] = useState(false);
  const [playingInfo, setPlayingInfo] = useState(null);

  const fetchDefaultReleases = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20&locale=en-US,en;q%3D0.9",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const data = await res.json();
      setItems(data.albums?.items || []);
    } catch (err) {
      console.error("❌ Default fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLanguagePlaylists = async (langId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://v1.nocodeapi.com/vik80220/spotify/qaYibumhrzsOXPhD/browse/categoryPlaylist?category_id=${langId}`
      );
      const data = await res.json();
      setItems(data.playlists?.items || []);
    } catch (err) {
      console.error("❌ Language fetch failed", err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefaultReleases();
  }, []);

  const handleLangClick = (lang) => {
    const langId = langToId[lang];
    setSelectedLang(langId);
    fetchLanguagePlaylists(langId);
  };

  return (
    <div className="p-4 pb-24">
      <h2 className="text-2xl font-bold mb-4">🎧 New Songs</h2>

      {/* Tabs */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 border-b border-gray-300 pb-2 mb-6">
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => handleLangClick(lang)}
            className={`px-4 py-2 rounded-full min-w-fit text-sm ${
              selectedLang === langToId[lang]
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Cards */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
  <div
  key={item.id}
  className="bg-white rounded-xl p-3 shadow-md"
>
  <div className="relative group">
    <img
      src={item.images[0]?.url}
      alt={item.name}
      className="w-full h-40 object-cover rounded"
    />

    {/* ▶ Hover Button only on image */}
    <button
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition rounded"
      onClick={() =>
        setPlayingInfo({
          previewUrl: "/dummy.mp3",
          trackName: item.name,
          artist: item.artists
            ? item.artists.map((a) => a.name).join(", ")
            : item.owner?.display_name,
          image: item.images[0]?.url
        })
      }
    >
      ▶ Play
    </button>
  </div>

  {/* Text Content Below Image */}
  <h3 className="font-semibold mt-2 text-black">{item.name}</h3>
  <p className="text-sm text-gray-600 mb-1">
    {item.artists
      ? item.artists.map((a) => a.name).join(", ")
      : item.owner?.display_name}
  </p>
  <a
    href={item.external_urls.spotify}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-sm text-green-600 font-medium hover:underline"
  >
    🎵 Open in Spotify
  </a>
</div>

          ))}
        </div>
      )}

      {/* Footer Player */}
      {playingInfo && (
        <FooterPlayer
          trackName={playingInfo.trackName}
          artist={playingInfo.artist}
          image={playingInfo.image}
          previewUrl={playingInfo.previewUrl}
        />
      )}
    </div>
  );
};

export default NewReleases;
