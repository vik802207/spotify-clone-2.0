// Full Dashboard Page with Carousel, Artist of the Week, More News and Popular Genres
// Required: npm install react-slick slick-carousel react-icons

import React from "react";
import Slider from "react-slick";
import { FaSearch, FaPlay, FaMicrophone } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {
  const trendingSlides = [
    { id: 1, img: "/1.jpg", title: "Red Snapper: Performance Review", artist: "Kamelia" },
    { id: 2, img: "/2.jpg", title: "Summer Hits in 2024", artist: "DJ Nova" },
    { id: 3, img: "/3.jpg", title: "Festival Night Highlights", artist: "Live Nation" },
  ];

  const moreNews = ["8.jpg", "9.jpg", "4.jpg", "5.jpg", "12.jpg", "13.jpg"];

  const genres = ["Blues", "Classical", "Country", "Dance", "Electronic", "Hip-Hop", "Jazz", "Latin", "Metal", "Party", "R&B / Soul", "Reggae", "Soundtracks", "World"];

  const artists = [
    { name: "Will Moon", img: "/14.jpg" },
    { name: "Moose", img: "/13.jpg" },
    { name: "Ios", img: "/12.jpg" },
    { name: "Wosle", img: "/9.jpg" },
    { name: "Sasse", img: "/7.jpg" },
    { name: "Tom Krugg", img: "/8.jpg" },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="min-h-screen bg-[#f7fafd] text-gray-800 px-6 py-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">🎧 8 people listening with you</p>
          <div className="flex items-center gap-3">
            <p className="text-sm">Carlos López</p>
            <img src="/6.jpg" alt="profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>


        {/* Trending & Artist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trending */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-2">📈 Trending</h2>
            <Slider {...carouselSettings}>
              {trendingSlides.map((item) => (
                <div key={item.id} className="relative group rounded-xl overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-96 object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-sm">- {item.artist}</p>
                    <button className="mt-2 px-4 py-1 text-xs font-semibold bg-white text-black rounded-full flex items-center gap-2 hover:scale-105 transition">
                      <FaPlay className="text-xs" /> PLAY
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Artist of the Week */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FaMicrophone /> Artist of the Week
            </h2>
            <img src="/14.jpg" className="w-full h-48 object-cover rounded-xl mb-4" alt="Artist" />
            <h3 className="text-lg font-bold">Always Authentic</h3>
            <p className="text-sm text-gray-500 mb-3">Monica Lee</p>
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-1">Track</th>
                  <th className="text-left py-1">Listeners</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">Love Again</td>
                  <td className="py-1">42.6K</td>
                </tr>
                <tr>
                  <td className="py-1">Golden Sky</td>
                  <td className="py-1">36.2K</td>
                </tr>
                <tr>
                  <td className="py-1">Echo</td>
                  <td className="py-1">28.7K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* More News */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">📰 More News</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moreNews.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow bg-white">
                <img
                  src={`/${src}`}
                  alt="News"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-sm truncate">Music Headline {idx + 1}</h4>
                  <p className="text-xs text-gray-500">Click to read more</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Genres */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">🎧 Popular genres</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((g, idx) => (
              <button
                key={idx}
                className="px-4 py-2 rounded-full border text-sm hover:bg-blue-100 border-gray-300 text-gray-700"
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Artist Bubbles */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {artists.map((a, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={a.img}
                alt={a.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
              />
              <span className="text-sm mt-2 text-gray-700 font-medium text-center">{a.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;