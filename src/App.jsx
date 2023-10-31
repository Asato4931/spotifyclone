import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FavoritesPlaylistPage from "./pages/playlistpages/FavoritesPlaylistPage";
import HarenchiPlaylistPage from "./pages/playlistpages/HarenchiPlaylistPage";
import NewPlaylistPage from "./pages/playlistpages/NewPlaylistPage";
import Playlist2PlaylistPage from "./pages/playlistpages/Playlist2PlaylistPage";
import RebornPlaylistPage from "./pages/playlistpages/RebornPlaylistPage";
import VibrationsPlaylistPage from "./pages/playlistpages/VibrationsPlaylistPage";
import WeeklyPlaylistPage from "./pages/playlistpages/WeeklyPlaylistPage";
import XiPlaylistPage from "./pages/playlistpages/XiPlaylistPage";
import HomePage from "./pages/HomePage";

// Componentのimport

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/playlists/favorites"
          element={<FavoritesPlaylistPage />}
        />
        <Route path="/playlists/harenchi" element={<HarenchiPlaylistPage />} />
        <Route path="/playlists/new" element={<NewPlaylistPage />} />
        <Route
          path="/playlists/playlist2"
          element={<Playlist2PlaylistPage />}
        />
        <Route path="/playlists/reborn" element={<RebornPlaylistPage />} />
        <Route
          path="/playlists/vibrations"
          element={<VibrationsPlaylistPage />}
        />
        <Route path="/playlists/weekly" element={<WeeklyPlaylistPage />} />
        <Route path="/playlists/xi" element={<XiPlaylistPage />} />

        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}
