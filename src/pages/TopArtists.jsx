import React, { useEffect, useState } from "react";


const TopArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(
      "https://v1.nocodeapi.com/vik80220/spotify/sLOXJKQzsHWIfQuV/me/top/artists?time_range=short_term&limit=12"
    )
      .then((res) => res.json())
      .then((data) => {
        setArtists(data.items || []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative">
              <img
                src={artist.images[0]?.url}
                alt={artist.name}
                className="w-28 h-28 rounded-full object-cover shadow-lg transition-transform group-hover:scale-105"
              />
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                Open in Spotify
              </a>
            </div>
            <p className="mt-2 font-medium text-gray-800">{artist.name}</p>
            <p className="text-sm text-gray-600">
              {Number(artist.followers?.total).toLocaleString()} Fans
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
