import React, { useEffect, useState } from "react";
import { fetchTopCharts } from "../api/shazam"; // ✅ Ensure this points to your correct API utility
import SongCard from "../components/SongCard";

const Home = () => {
  const [songs, setSongs] = useState([]);

useEffect(() => {
  const load = async () => {
    const result = await fetchTopCharts(); 
    setSongs(result);
  };
  load();
}, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🎵 Top Charts</h2>

      {songs.length === 0 ? (
        <p className="text-red-500">No songs loaded</p>
      ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
  {songs.map((song) => (
    <SongCard key={song.id} song={song} />
  ))}
</div>

      )}
    </div>
  );
};

export default Home;
