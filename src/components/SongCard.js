import React from "react";
import { FaPlay } from "react-icons/fa";

const SongCard = ({ song }) => {
  const attributes = song.attributes || {};
  const imageUrl = attributes.artwork?.url || "https://via.placeholder.com/150";
  const title = attributes.name || "Untitled";
  const artist = attributes.composerName || "Unknown Artist";
  const album = attributes.albumName || "Unknown Album";
  const genres = attributes.genreNames?.join(", ") || "Unknown Genre";
  const releaseDate = attributes.releaseDate || "Unknown";
  const duration = Math.floor((attributes.durationInMillis || 0) / 1000); // seconds
  const songUrl = attributes.url || "#";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group border border-gray-100">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg"
          >
            <FaPlay />
          </a>
        </div>
      </div>
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-600 truncate">🎤 {artist}</p>
        <p className="text-xs text-gray-500 truncate">🎵 Album: {album}</p>
        <p className="text-xs text-gray-400 truncate">🎧 Genre: {genres}</p>
        <p className="text-xs text-gray-400">📅 Released: {releaseDate}</p>
        <p className="text-xs text-gray-400">⏱️ Duration: {duration}s</p>
      </div>
    </div>
  );
};

export default SongCard;
