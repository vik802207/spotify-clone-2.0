import React, { useEffect, useState } from "react";
import "./TopPlaylists.css";
import FooterPlayer from "../components/FooterPlayer"; // 🔥 make sure this exists

const categories = [
  { label: "Pop", id: "pop" },
  { label: "Hip-Hop", id: "hiphop" },
  { label: "Bollywood", id: "bollywood" },
  { label: "Chill", id: "chill" },
  { label: "Workout", id: "workout" },
  { label: "Party", id: "party" },
  { label: "Romance", id: "romance" },
  { label: "Rock", id: "rock" },
  { label: "Jazz", id: "jazz" },
  { label: "Classical", id: "classical" },
];

const TopPlaylists = () => {
  const [selectedCategory, setSelectedCategory] = useState("pop");
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingInfo, setPlayingInfo] = useState(null); // 🟢 added for footer

  const fetchPlaylists = async (categoryId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://v1.nocodeapi.com/vik80220/spotify/qaYibumhrzsOXPhD/browse/categoryPlaylist?category_id=${categoryId}`
      );
      const data = await res.json();
      setPlaylists(data.playlists.items || []);
    } catch (err) {
      console.error("Error fetching playlists", err);
      setPlaylists([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="top-playlists-container">
      <div className="header-bar">
        <h2>🎧 Top Spotify Playlists</h2>
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="loading">Loading playlists...</p>
      ) : (
        <div className="playlist-grid">
          {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card group">
  <div className="image-container relative">
    <img
      src={playlist.images[0]?.url}
      alt={playlist.name}
      className="playlist-img"
    />
    <button
      className="hover-play-btn absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
      onClick={() =>
        setPlayingInfo({
          trackName: playlist.name,
          artist: playlist.owner.display_name,
          image: playlist.images[0]?.url,
          previewUrl: "/dummy.mp3",
        })
      }
    >
      ▶ Play
    </button>
  </div>

  <div className="card-content">
    <h4>{playlist.name}</h4>
    <p>{playlist.description || "No description"}</p>
    <a
      href={playlist.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      🎵 Open in Spotify
    </a>
  </div>
</div>

          ))}
        </div>
      )}

      {/* FooterPlayer */}
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

export default TopPlaylists;
