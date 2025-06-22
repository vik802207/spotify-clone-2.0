/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

const PODCAST_ID = '4rOoJ6Egrf8K2IrywzwOMk';
const LIMIT = 10;

const PodcastEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); 
  const [hasMore, setHasMore] = useState(true);

  const fetchEpisodes = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://spotify-scraper3.p.rapidapi.com/api/podcasts/episodes?podcast_id=${PODCAST_ID}&offset=${page * LIMIT}&limit=${LIMIT}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '546fc4ef81msh95b0696d56415e4p1678abjsn52da33cf5c44',
            'x-rapidapi-host': 'spotify-scraper3.p.rapidapi.com',
          },
        }
      );
      const data = await res.json();
      const value=data?.data?.podcast?.episodes; 
      setEpisodes(value || []);
      setHasMore((value || []).length === LIMIT); // Disable next if less than LIMIT
    } catch (err) {
      console.error('Error fetching episodes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🎙️ Latest Podcast Episodes</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
            {episodes.map((ep, i) => (
              <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden">
                <img
                  src={ep.cover_images?.[2]?.url}
                  alt={ep.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold text-black">{ep.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {ep.description?.slice(0, 100)}...
                  </p>
                  <a
                    href={ep.share_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    ▶ Listen on Spotify
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4">
            <button
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              ⬅ Prev
            </button>
            <span className="text-sm mt-2">Page {page + 1}</span>
            <button
              disabled={!hasMore}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PodcastEpisodes;
