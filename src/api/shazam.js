const BASE_URL = "https://shazam-core.p.rapidapi.com/v1";
// const RAPID_API_KEY = "546fc4ef81msh95b0696d56415e4p1678abjsn52da33cf5c44";
const token=process.env.REACT_APP_SHAZAM_API_KEY;
const HEADERS = {
  "X-RapidAPI-Key": token,
  "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
};

// 🔥 Universal Fetch Wrapper
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: HEADERS,
    });

    const data = await response.json();
    console.log(`✅ [${endpoint}]`, data);

    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.tracks)) return data.tracks;

    return [];
  } catch (error) {
    console.error(`❌ Error in ${endpoint}:`, error);
    return [];
  }
};

export const fetchTopCharts = (countryCode = "IN") =>
  fetchData(`/charts/world?country_code=${countryCode}`);

// 🆕 New Releases (if supported)
export const fetchNewReleases = () =>
  fetchData(`/charts/new-releases?locale=en-US`);

// 🔍 Search by keyword
export const searchSongs = (query) =>
  fetchData(`/search/multi?query=${encodeURIComponent(query)}&search_type=SONGS_ARTISTS`);

// 🎧 Get Songs by Genre
export const fetchSongsByGenre = (genreCode = "POP") =>
  fetchData(`/charts/genre-world?genre_code=${genreCode}`);

// 💿 Get Song Details (by ID)
export const fetchSongDetails = (songId) =>
  fetchData(`/tracks/details?track_id=${songId}`);
