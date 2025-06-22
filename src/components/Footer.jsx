/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
   <footer className="bg-gray-50 text-gray-800 text-sm mt-12 border-t m-[20px] p-[50px]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div>
          <h3 className="font-semibold mb-2">TOP ARTISTS</h3>
          <ul>
            {["Neha Kakkar", "Arijit Singh", "Badshah", "Justin Bieber", "Himesh Reshammiya", "Lata Mangeshkar", "Diljit Dosanjh", "Ed Sheeran", "Shreya Ghoshal", "Sanam Puri", "Armaan Malik"].map((artist) => (
              <li key={artist} className="mb-1 hover:underline cursor-pointer">{artist}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">TOP ACTORS</h3>
          <ul>
            {["Salman Khan", "Allu Arjun", "Sunny Leone", "Amitabh Bachchan", "Varun Dhawan"].map((actor) => (
              <li key={actor} className="mb-1 hover:underline cursor-pointer">{actor}</li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4 mb-2">BROWSE</h3>
          <ul>
            {["New Releases", "Featured Playlists", "Weekly Top Songs", "Top Artists", "Top Charts", "Top Radios"].map((item) => (
              <li key={item} className="mb-1 hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">DEVOTIONAL SONGS</h3>
          <ul>
            {["Krishna Bhajan", "Mahamrityunjaya Mantra", "Deva Shree Ganesha", "Hanuman Chalisa", "Gayatri Mantra", "Mata Ke Bhajan", "Durga Chalisa", "Maiya Yashoda", "Bhakti Geet"].map((song) => (
              <li key={song} className="mb-1 hover:underline cursor-pointer">{song}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">LANGUAGE</h3>
          <ul>
            {["Hindi Songs", "Punjabi Songs", "Bhojpuri Songs", "Tamil Songs", "Telugu Songs", "Kannada Songs", "Gujarati Songs", "Marathi Songs", "Odia Songs", "Rajasthani Songs", "Haryanvi Songs", "Assamese Songs", "Malayalam Songs", "Bengali Songs"].map((lang) => (
              <li key={lang} className="mb-1 hover:underline cursor-pointer">{lang}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">ARTIST ORIGINALS</h3>
          <ul>
            {["Zaeden - Dooriyan", "Raghav - Sufi", "SIXX - Dansa", "Siri - My Jam", `Lost Stories, "Mai Ni Meriye"`].map((o) => (
              <li key={o} className="mb-1 hover:underline cursor-pointer">{o}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">COMPANY</h3>
          <ul>
            {["About Us", "Culture", "Blog", "Jobs", "Press", "Advertise", "Terms & Privacy", "Help & Support", "Grievances", "SonicBloom Artist Insights", "SonicBloom YourCast"].map((link) => (
              <li key={link} className="mb-1 hover:underline cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t py-4 px-4 text-center text-gray-600 text-xs">
        <div className="mb-2 space-x-4">
          <a href="#" className="hover:underline">SonicBloom Pro</a>
          <a href="#" className="hover:underline">SonicBloom for iOS</a>
          <a href="#" className="hover:underline">SonicBloom for Android</a>
          <a href="#" className="hover:underline">New Releases</a>
        </div>
        <div className="mb-2">© 2025 SonicBloom Media Limited. All rights reserved.</div>
        <div className="flex justify-center space-x-4 mt-2 text-gray-700">
          <a href="#" className="hover:text-blue-600 text-lg"><FaFacebookF /></a>
          <a href="#" className="hover:text-pink-500 text-lg"><FaInstagram /></a>
          <a href="#" className="hover:text-red-600 text-lg"><FaYoutube /></a>
          <a href="#" className="hover:text-black text-lg"><FaXTwitter /></a>
          <a href="#" className="hover:text-blue-800 text-lg"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
