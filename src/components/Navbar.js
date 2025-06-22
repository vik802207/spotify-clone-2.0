import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const { setQuery } = useContext(SearchContext);
  const [input, setInput] = useState('');
  const [darkMode,setDarkMode]=useState(false)
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(input);
      navigate('/search');
    }
  };

 const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-gray-100 dark:bg-gray-900 dark:text-white sticky top-0 z-10">
      {/* App Name */}
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">SonicBloom</h1>

      {/* Search Bar */}
      <div className="flex-grow flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center ">
        <button
          onClick={toggleDarkMode}
          className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        <button className="px-4 py-1 rounded-full border border-transparent hover:border-blue-500 hover:bg-blue-50 text-sm font-medium text-blue-600 dark:hover:bg-gray-800 transition-all duration-200"
       onClick={() => navigate('/login')}

        >
          Log In
        </button>

        <button className="px-4 py-1 rounded-full border border-transparent hover:border-blue-500 hover:bg-blue-50 text-sm font-medium dark:text-white dark:hover:bg-gray-800 transition-all duration-200"
         onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
