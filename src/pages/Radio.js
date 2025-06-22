import React, { useEffect, useState } from 'react';
import { FaHeart, FaChevronDown, FaCheck } from 'react-icons/fa';
const token = process.env.REACT_APP_RADIO_API;
const COUNTRY_OPTIONS = [
  { name: 'India', id: '146' },
  { name: 'USA', id: '26' },
  { name: 'UK', id: '27' },
  { name: 'Pakistan', id: '86' },
];

const LIMIT = 10;
const Radio = () => {
  const [stations, setStations] = useState([]);
  const [countryId, setCountryId] = useState('26');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchStations = async (id, pageNum = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com/station_by_country.php?country_id=${id}&limit=${LIMIT}&page=${pageNum}&order=ASC`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': token,
            'x-rapidapi-host': 'radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com',
          },
        }
      );
      const data = await res.json();
      setStations(data.stations || []);
    } catch (error) {
      console.error('Error fetching stations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStations(countryId, page);
  }, [countryId, page]);

  return (
    <div className="p-6 relative">
      <div className="flex justify-between items-center mb-6 relative">
        <h1 className="text-3xl font-bold">🎧 Radio Stations</h1>

        <div className="relative w-40">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 flex justify-between items-center text-sm"
          >
            {COUNTRY_OPTIONS.find((c) => c.id === countryId)?.name}
            <FaChevronDown className="text-xs ml-2" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md z-10 border border-gray-200">
              {COUNTRY_OPTIONS.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setCountryId(c.id);
                    setPage(1);
                    setDropdownOpen(false);
                  }}
                  className={`px-3 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-sm ${
                    c.id === countryId ? 'text-teal-600 font-semibold' : 'text-gray-800'
                  }`}
                >
                  {c.name}
                  {c.id === countryId && <FaCheck className="text-xs" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {stations.map((station) => (
            <div
              key={station.radio_id}
              className="relative group rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#e9eefa] p-4 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-white/10"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={station.radio_image || "/fallback.jpg"}
                  alt={station.radio_name}
                  className="w-full h-44 object-cover rounded-xl group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-teal-500 transition" />
                {station.is_live === "1" && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md animate-pulse">
                    🔴 LIVE
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-white/20 text-pink-400 p-2 rounded-full backdrop-blur hover:scale-110 transition">
                  <FaHeart />
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-black truncate tracking-wide">
                  {station.radio_name}
                </h3>
                <span className="inline-block text-xs bg-pink-600/10 text-pink-400 px-3 py-1 rounded-full backdrop-blur-sm shadow">
                  🎙️ {station.genre || "Unknown Genre"}
                </span>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={station.country_flag}
                      alt={station.country_name}
                      className="w-6 h-6 rounded-full ring-2 ring-white"
                    />
                    <span className="text-black text-sm">{station.country_name}</span>
                  </div>
                  <a
                    href={station.radio_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow"
                  >
                    ▶ Play
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}


      <div className="mt-10 flex justify-center items-center gap-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-6 py-2 rounded-full font-semibold text-white shadow-sm transition-all duration-300 ${
            page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2fbdb9] hover:bg-[#1bb4ae]'
          }`}
        >
          ⬅ Prev
        </button>
        <span className="px-4 py-2 bg-white border border-gray-300 rounded-full shadow text-gray-700 font-medium text-sm">
          Page {page}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-6 py-2 rounded-full font-semibold text-white shadow-sm bg-[#25c6c1] hover:bg-[#1bb4ae] transition-all duration-300"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Radio;
