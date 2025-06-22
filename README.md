# 🎵 Spotify 2.0 Clone - Music Streaming Web App

A modern and responsive music streaming web application inspired by Spotify. This project fetches data from **Spotify23**, **Shazam**, and **Apple Music** via **RapidAPI** and **NocodeAPI** to provide real-time music, artist, playlist, and podcast data.

---

## 🚀 Features

- 🎧 Browse New Releases, Top Artists, Albums & Podcasts  
- 🔍 Smart Search (songs, albums, biography)  
- 🎵 Footer music player with preview, volume, and seek control  
- ❤️ Like/Favorite songs  
- 📻 Radio & Trending  
- 🧠 Artist biographies and verified badge  
- 🔊 Mobile responsive UI with sidebar & dashboard  
- 🔐 Auth-ready structure (login/signup UI)  
- 📊 Dashboard layout (Music Trends, Top 10, Now Playing)

---

## 🧪 Tech Stack

- **React.js** (Functional + Hooks)
- **CSS (Plain)** + Tailwind CSS (optional)
- **React Icons**
- **RapidAPI**:
  - Spotify23 API
  - Shazam Core API
  - Apple Music via NocodeAPI
- **Context API** for global search state
- **Responsive Design** using Flex/Grid

---

## 📁 Folder Structure
``` bash
src/
├── api/
│ ├── spotify.js
│ └── shazam.js
│
├── components/
│ ├── Footer.jsx
│ ├── FooterPlayer.jsx
│ ├── Navbar.js
│ ├── Sidebar.js
│ ├── Player.js
│ └── SongCard.js
│
├── context/
│ └── SearchContext.js
│
├── pages/
│ ├── Home.js
│ ├── Search.jsx
│ ├── Login.jsx / Signup.jsx
│ ├── NewReleases.jsx
│ ├── TopArtists.jsx
│ ├── TopMostPlayed.jsx
│ ├── PodcastEpisodes.jsx
│ ├── Radio.jsx
│ └── MusicDashboard.jsx
│
├── App.js
├── index.js
├── index.css
└── tailwind.config.js
```

---

## 📸 Screenshots

### 🎼 Dashboard (Music Trends, Genres, Popular Artists)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(536).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(537).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(538).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(539).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(540).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(541).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(542).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(543).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(544).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(545).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(546).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(547).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(548).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(549).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(550).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(551).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(552).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(553).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(554).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(555).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(556).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(557).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(559).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(560).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(561).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(562).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(563).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)
![Dashboard](https://github.com/vik802207/spotify-clone-2.0/blob/main/Screenshot%20(558).png)




### 🔍 Search & Song List with Play Button
![Search](./screenshots/search-2.png)

### 🎶 Footer Music Player with Progress
![Footer Player](./screenshots/player-3.png)

> _You can find all these under `src/pages/`, `components/`, and controlled via context and state._

---

## 🔑 APIs Used

| API | Source | Description |
|-----|--------|-------------|
| Spotify23 | [RapidAPI](https://rapidapi.com/Glavier/api/spotify23/) | Songs, Albums, Artist Profiles |
| Shazam Core | [RapidAPI](https://rapidapi.com/apidojo/api/shazam-core/) | Song previews |
| Apple Music | [NocodeAPI](https://nocodeapi.com/) | Additional metadata & fallback data |

---

## 🛠️ Installation

```bash
git clone https://github.com/vik802207/spotify-clone-2.0.git
cd spotify2-clone
npm install
npm start

## 📌 Notes
🔑 Add your API keys in .env for Spotify, Shazam, and NocodeAPI

🧪 The audio preview works with previewUrl from APIs (30 sec snippets)

⚙️ For authentication, you can integrate Firebase/Auth0 if needed

## 👨‍💻 Author
Built with ❤️ by Your Name

📃 License
This project is licensed under the MIT License.




