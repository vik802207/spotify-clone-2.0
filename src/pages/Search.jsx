import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { FaPlay, FaHeart, FaEllipsisH, FaCheckCircle } from "react-icons/fa";
import FooterPlayer from "../components/FooterPlayer";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const TABS = ["Overview", "songs", "albums", "biography"];

const SearchPage = () => {
  const { query, setQuery } = useContext(SearchContext);
  const [activeTab, setActiveTab] = useState("songs");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [artistname, setArtistname] = useState("");
  const [artistimg, setArtistimg] = useState("");
  const [playingInfo, setPlayingInfo] = useState(null);
  const [artistid, setArtistid] = useState("");
  const [biographyData, setBiographyData] = useState(null);
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (!query) return;

    const fetchArtistInfo = async () => {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=1&numberOfTopResults=1`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "bf1e0fd8f8msh530d6d7cc63cd2dp19d766jsnd412afd91a49",
          "x-rapidapi-host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        const profileArtist = result?.artists?.items?.[0]?.data;
        const ArtistId = result?.artists?.items[0]?.data?.uri.split(":")[2];
        const ArtistName = profileArtist?.profile?.name;
        const ArtistImg =
          profileArtist?.visuals?.avatarImage?.sources?.[0]?.url;

        if (ArtistName) setArtistname(ArtistName);
        if (ArtistImg) setArtistimg(ArtistImg);
        if (ArtistId) setArtistid(ArtistId);
      } catch (err) {
        console.error("Error fetching artist info", err);
      }
    };

    fetchArtistInfo();
  }, [query]);
  useEffect(() => {
    if (!query) return;

    const fetchArtistStats = async () => {
      const url2 = `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistid}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "bf1e0fd8f8msh530d6d7cc63cd2dp19d766jsnd412afd91a49",
          "x-rapidapi-host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url2, options);
        const result = await response.json();
        setStats(result?.data?.artist);
      } catch (err) {
        console.error("Error fetching artist info", err);
      }
    };

    fetchArtistStats();
  }, [query, artistid]);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      let url = "";

      if (activeTab === "songs") {
        url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=${limit}&numberOfTopResults=5`;
      } else if (activeTab === "albums") {
        url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=${limit}`;
      } else if (activeTab === "biography") {
        url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${artistid}`;
      }

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "bf1e0fd8f8msh530d6d7cc63cd2dp19d766jsnd412afd91a49",
          "x-rapidapi-host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (activeTab === "songs") {
          setData(result.tracks.items.map((i) => i.data));
        } else if (activeTab === "albums") {
          setData(result?.albums?.items.map((i) => i.data));
        } else if (activeTab === "biography") {
          setData([]);
          setBiographyData(result?.data?.artist);
        }
      } catch (err) {
        console.error("Error fetching", err);
        setData([]);
      }
    };

    fetchData();
  }, [query, activeTab, limit, artistid]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8 overflow-y-auto scrollbar-hidden">
        {/* Artist Header */}
        <div className="flex items-center gap-6">
          <img
            src={artistimg}
            alt="Artist"
            className="w-40 h-40 rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-2">
              {artistname} <FaCheckCircle className="text-teal-500" />
            </h1>
            <p className="text-gray-600">Artist · {stats?.stats?.followers} followers</p>
            <div className="flex items-center gap-2 mt-4">
              <button className="px-6 py-2 bg-teal-500 text-white rounded-full font-semibold">
                <FaPlay className="inline mr-2" /> Play
              </button>
              <a
                href={stats?.profile?.externalLinks?.items[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-100"
              >
                <FaFacebookSquare className="text-[#1877F2] text-[22px]" />
              </a>

              <a
                href={stats?.profile?.externalLinks?.items[1]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-pink-100"
              >
                <FaInstagram className="text-[#E1306C] text-[22px]" />
              </a>

              <button className="px-4 py-2 border rounded-full text-gray-700">
                <FaHeart />
              </button>
              <button className="px-4 py-2 border rounded-full text-gray-700">
                <FaEllipsisH />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-8 text-gray-700 border-b pb-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`capitalize pb-2 ${
                activeTab === tab
                  ? "font-semibold border-b-2 border-teal-500"
                  : "text-gray-500"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setLimit(10);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "biography" ? (
            <div className="mt-6 space-y-4">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {biographyData?.profile?.biography?.text ||
                  "No biography available"}
              </p>

              <div className="flex items-center gap-4 mt-4">
               <h2 className="text-xl font-semibold mb-0">Social Media</h2>
 {biographyData?.profile?.externalLinks?.items?.map((link, index) => {
        const name = link?.name?.toLowerCase();
        if (name === "facebook" || name === "instagram") {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              {name === "facebook" && (
                <FaFacebookSquare className="text-blue-600 text-2xl hover:text-blue-800" />
              )}
              {name === "instagram" && (
                <FaInstagram className="text-pink-500 text-2xl hover:text-pink-600" />
              )}
            </a>
          );
        }
        return null;
      })}
              </div>
              {/* Artist Stats */}
<div className="mt-6">
  <h2 className="text-xl font-semibold mb-3">Artist Stats</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">Followers</p>
      <p className="text-lg font-semibold">{biographyData?.stats?.followers?.toLocaleString() || 'N/A'}</p>
    </div>
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">Monthly Listeners</p>
      <p className="text-lg font-semibold">{biographyData?.stats?.monthlyListeners?.toLocaleString() || 'N/A'}</p>
    </div>
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">World Rank</p>
      <p className="text-lg font-semibold">#{biographyData?.stats?.worldRank || 'N/A'}</p>
    </div>
  </div>
</div>
<div className="mt-8">
  <h2 className="text-xl font-semibold mb-3">Top Listener Cities</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {biographyData?.stats?.topCities?.items?.map((location, index) => (
      <div
        key={index}
        className="bg-gray-50 rounded-xl shadow p-4"
      >
        <p className="font-medium text-gray-800">{location.city}, {location.country}</p>
        <p className="text-sm text-gray-600">{location.numberOfListeners.toLocaleString()} listeners</p>
      </div>
    ))}
  </div>
</div>



              <div>
                <h2 className="text-xl font-semibold mb-3">Related Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {biographyData?.relatedContent?.relatedArtists?.items?.map(
                    (artist) => (
                      <div
                        key={artist.id}
                        className="text-center cursor-pointer"
                      >
                        <img
                          src={
                            artist.visuals?.avatarImage?.sources?.[0]?.url ||
                            "/fallback.jpg"
                          }
                          alt={artist.profile?.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />
                        <button
                          className="mt-2 text-sm font-medium text-teal-600 hover:underline"
                          onClick={() => {
                            setQuery(artist.profile?.name);
                            setActiveTab("songs");
                          }}
                        >
                          {artist.profile?.name}
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : activeTab === "albums" ? (
            <>
              {" "}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                {data.map((song, index) => (
                  <div
                    key={song.uri}
                    className="relative group bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.01] transition overflow-hidden"
                  >
                    <img
                      src={song?.coverArt?.sources[2]?.url || "/fallback.jpg"}
                      alt={song.name}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() =>
                          setPlayingInfo({
                            previewUrl: "/dummy.mp3",
                            trackName: song.name,
                            artist: artistname,
                            image: song?.coverArt?.sources[2]?.url,
                          })
                        }
                        className="text-white text-xl p-3 bg-teal-500 rounded-full hover:scale-110 transition"
                      >
                        <FaPlay />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="text-base font-semibold truncate">
                        {song.name}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">
                        {song.artists?.items
                          ?.map((artist) => artist?.profile?.name)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
                <FooterPlayer
                  previewUrl={playingInfo?.previewUrl}
                  trackName={playingInfo?.trackName}
                  artist={playingInfo?.artist}
                  image={playingInfo?.image}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => {
                    setLimit((prev) => prev + 10);
                    setTimeout(
                      () =>
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        }),
                      200
                    );
                  }}
                  className="px-6 py-2 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600 transition"
                >
                  Load More
                </button>
              </div>
            </>
          ) : (
            <>
              {data.map((song, index) => (
                <div
                  key={song.id}
                  className="grid grid-cols-12 gap-4 items-center px-4 py-3 mb-2 
                    rounded-xl bg-transparent transition-all duration-200
                    hover:bg-white hover:shadow-lg hover:scale-[1.01] hover:ring-1 hover:ring-gray-200"
                >
                  <span className="col-span-1 text-sm text-gray-600">
                    {index + 1}
                  </span>

                  <div className="col-span-4 flex items-center gap-4 group relative">
                    <div className="relative">
                      <img
                        src={
                          song.albumOfTrack?.coverArt?.sources[2]?.url ||
                          song.coverArt?.sources[2]?.url ||
                          "/fallback.jpg"
                        }
                        alt={song.name}
                        className="w-12 h-12 rounded-lg object-cover shadow"
                      />
                      {/* Play on Hover */}
                      <button
                        className="absolute inset-0 flex items-center justify-center 
                          bg-black bg-opacity-50 text-white rounded-lg opacity-0
                          group-hover:opacity-100 transition"
                        onClick={() =>
                          setPlayingInfo({
                            previewUrl: "/dummy.mp3",
                            trackName: song.name,
                            artist: artistname,
                            image: song.albumOfTrack?.coverArt?.sources[2]?.url,
                          })
                        }
                      >
                        <FaPlay className="w-4 h-4 group-hover:scale-125 transition-transform" />
                      </button>
                    </div>
                    <span className="text-teal-600 font-medium truncate">
                      {song.name}
                    </span>
                  </div>

                  <span className="col-span-3 text-sm text-gray-700 truncate">
                    {song.artists?.items
                      ?.map((artist) => artist?.profile?.name)
                      .join(", ")}
                  </span>

                  <span className="col-span-2 text-sm text-gray-600 truncate">
                    {song.albumOfTrack?.name || song.name || "Unknown"}
                  </span>

                  <div className="col-span-1 text-center">
                    <FaHeart className="text-gray-400 hover:text-pink-500 transition" />
                  </div>

                  <span className="col-span-1 text-sm text-gray-600 text-right">
                    {song.duration?.totalMilliseconds
                      ? `${Math.floor(
                          song.duration.totalMilliseconds / 60000
                        )}:${String(
                          Math.floor(
                            (song.duration.totalMilliseconds % 60000) / 1000
                          )
                        ).padStart(2, "0")}`
                      : "N/A"}
                  </span>
                </div>
              ))}
              <FooterPlayer
                previewUrl={playingInfo?.previewUrl}
                trackName={playingInfo?.trackName}
                artist={playingInfo?.artist}
                image={playingInfo?.image}
              />
              <div className="text-center mt-6">
                <button
                  onClick={() => {
                    setLimit((prev) => prev + 10);
                    setTimeout(
                      () =>
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        }),
                      200
                    );
                  }}
                  className="px-6 py-2 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600 transition"
                >
                  Load More
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
