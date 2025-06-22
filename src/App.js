import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NewReleases from "./pages/NewReleases";
import TopPlaylists from "./pages/TopPlaylists";
import TopArtists from "./pages/TopArtists";
import TopMostPlayed from "./pages/TopMostPlayed";
import PodcastEpisodes from "./pages/PodcastEpisodes";
import Radio from "./pages/Radio";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import { useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import SearchPage from "./pages/Search";
import MusicDashboard from "./pages/MusicDashboard";
function Layout() {
    const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignPage = location.pathname === "/signup";
  if (isLoginPage) {
    return <LoginPage />;
  }
  if(isSignPage){
    return <Signup/>
  }
  return (
   <>
   
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-full overflow-y-auto">
        <Navbar />

        <main className="flex-grow overflow-y-auto" style={{overflow:"auto",scrollbarWidth:"none",msOverflowStyle:"none"}}>
        <style>
    {`
      main::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
          <Routes>
          <Route path="/" element={<MusicDashboard/>}/>
            <Route path="/top-chart" element={<Home />} /> 
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/new-release" element={<NewReleases/>} />
            <Route path="/top-playlists" element={<TopPlaylists/>} />
            <Route path="/top-artists" element={<TopArtists/>}/>
            <Route path="/top-most-played" element={<TopMostPlayed/>}/>
            <Route path="/episode" element={<PodcastEpisodes/>}/>
            <Route  path="/radio" element={<Radio/>}/>
          </Routes>
        </main>
      </div>
    </div>
     <Footer/>
   </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
