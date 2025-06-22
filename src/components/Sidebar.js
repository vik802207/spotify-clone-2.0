import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHistory,
  FaHeart,
  FaCompactDisc,
  FaPodcast,
  FaUser,
  FaPlus,
  FaBars,
  FaHome 
} from "react-icons/fa";
import {
  MdTrendingUp,
  MdExplore,
  MdRadio,
  MdBarChart,
  MdPlaylistPlay
} from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menu = [
    {name:"Home", icon:<FaHome/> ,path:"/"},
    { name: "New Releases", icon: <MdExplore />, path: "/new-release" },
    { name: "Top Charts", icon: <MdBarChart />, path: "/top-chart" },
    { name: "Top Playlists", icon: <MdPlaylistPlay />, path: "/top-playlists" },
    { name: "Top Most Played", icon: <MdTrendingUp />, path: "/top-most-played" },
    { name: "Podcasts", icon: <FaPodcast />, path: "/episode" },
    { name: "Top Artists", icon: <FaUser />, path: "/top-artists" },
    { name: "Radio", icon: <MdRadio />, path: "/radio" },
  ];

  const library = [
    { name: "History", icon: <FaHistory /> },
    { name: "Liked Songs", icon: <FaHeart /> },
    { name: "Albums", icon: <FaCompactDisc /> },
    { name: "Podcasts", icon: <FaPodcast /> },
    { name: "Artists", icon: <FaUser /> },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white shadow-lg border-r px-4 py-6 flex flex-col gap-6 transition-all duration-300 ease-in-out overflow-hidden`}
        style={{ overflow: "auto",overflowY:"auto" ,scrollbarWidth: "none", msOverflowStyle: "none"}}
    >
    <style>
     {`
      aside::-webkit-scrollbar {
        display: none;
      }
    `}</style>
      {/* Hamburger Toggle */}
      <div className="flex justify-between items-center">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-gray-700 ml-1">Menu</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-xl text-gray-600 hover:text-black transition"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu Section */}
      <div>
        {!isCollapsed && (
          <h3 className="text-xs text-gray-500 font-semibold mb-3 tracking-widest">BROWSE</h3>
        )}
        <div className="space-y-2">
          {menu.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 text-sm text-gray-700 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* Library Section */}
      <div>
        {!isCollapsed && (
          <h3 className="text-xs text-gray-500 font-semibold mb-3 tracking-widest">LIBRARY</h3>
        )}
        <div className="space-y-2">
          {library.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm text-gray-700 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button className={`mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition ${
        isCollapsed ? "w-10 h-10 p-2 justify-center" : "w-full"
      }`}>
        <FaPlus className="text-sm" />
        {!isCollapsed && <span>New Playlist</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
