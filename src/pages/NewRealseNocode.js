import React, { useEffect, useState } from "react";
import "./NewReleaseNocode.css"; // 💅 create it

const languages = [
  { label: "Hindi", id: "hindi" },
  { label: "Punjabi", id: "punjabi" },
  { label: "Gujarati", id: "gujarati" },
  { label: "Tamil", id: "tamil" },
  { label: "Telugu", id: "telugu" },
  { label: "Bhojpuri", id: "bhojpuri" }, // manual mapping
];

const NewReleaseNocode = () => {
  const [selectedLang, setSelectedLang] = useState("new");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlbums = async (lang) => {
    setLoading(true);
    let url = "";
    if (lang === "new") {
      url = `https://v1.nocodeapi.com/vik80220/spotify/qaYibumhrzsOXPhD/browse/new?country=IN`;
    } else {
      url = `https://v1.nocodeapi.com/vik80220/spotify/qaYibumhrzsOXPhD/browse/categoryPlaylist?category_id=${lang}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      const items =
        data.albums?.items || data.playlists?.items || []; // adjust for both endpoints

      setAlbums(items);
    } catch (err) {
      console.error("Error fetching albums", err);
      setAlbums([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums(selectedLang);
  }, [selectedLang]);

  return (
    <div className="new-release-container">
      <div className="lang-tabs">
        <button
          onClick={() => setSelectedLang("new")}
          className={selectedLang === "new" ? "active" : ""}
        >
          For You
        </button>
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedLang(lang.id)}
            className={selectedLang === lang.id ? "active" : ""}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading">Loading songs...</p>
      ) : (
        <div className="album-scroll">
          {albums.map((album, index) => {
            const img = album.images?.[0]?.url;
            const name = album.name;
            const artist = album.artists?.[0]?.name || album.owner?.display_name;
            const spotifyUrl = album.external_urls?.spotify;

            return (
              <div key={index} className="album-card">
                <img src={img} alt={name} />
                <h4>{name}</h4>
                <p>{artist}</p>
                <a href={spotifyUrl} target="_blank" rel="noreferrer">
                  ▶ Spotify
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewReleaseNocode;
