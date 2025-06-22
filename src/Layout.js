import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Player from "./components/Player";
import NewReleases from "./pages/NewReleases";
import TopPlaylists from "./pages/TopPlaylists";
import TopArtists from "./pages/TopArtists";
import TopMostPlayed from "./pages/TopMostPlayed";
import PodcastEpisodes from "./pages/PodcastEpisodes";
import Radio from "./pages/Radio";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import { useEffect } from "react";

// Create a wrapper to access `useLocation`
const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return isLoginPage ? (
    <LoginPage />
  ) : (
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full overflow-y-auto">
        <Navbar />
        <main className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-release" element={<NewReleases />} />
            <Route path="/top-playlists" element={<TopPlaylists />} />
            <Route path="/top-artist" element={<TopArtists />} />
            <Route path="/top-most-played" element={<TopMostPlayed />} />
            <Route path="/episode" element={<PodcastEpisodes />} />
            <Route path="/radio" element={<Radio />} />
          </Routes>
        </main>
        <Player />
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
