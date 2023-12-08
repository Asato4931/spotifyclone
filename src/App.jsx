import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerProvider from "./components/PlayerContext";

import FavoritesPlaylistPage from "./pages/playlistpages/FavoritesPlaylistPage";
import HarenchiPlaylistPage from "./pages/playlistpages/HarenchiPlaylistPage";
import NewPlaylistPage from "./pages/playlistpages/NewPlaylistPage";
import Playlist2PlaylistPage from "./pages/playlistpages/Playlist2PlaylistPage";
import RebornPlaylistPage from "./pages/playlistpages/RebornPlaylistPage";
import VibrationsPlaylistPage from "./pages/playlistpages/VibrationsPlaylistPage";
import WeeklyPlaylistPage from "./pages/playlistpages/WeeklyPlaylistPage";
import XiPlaylistPage from "./pages/playlistpages/XiPlaylistPage";
import Bf1PlaylistPage from "./pages/playlistpages/Bf1PlaylistPage";
import NmixxPlaylistPage from "./pages/playlistpages/NmixxPlaylistPage";
import HomePage from "./pages/HomePage";
import PlayerBar from "./components/PlayerBar";

// Componentのimport

export default function App() {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route
            path="/playlists/お気に入りの曲"
            element={<FavoritesPlaylistPage />}
          />
          <Route
            path="/playlists/ハレンチ"
            element={<HarenchiPlaylistPage />}
          />
          <Route path="/playlists/new" element={<NewPlaylistPage />} />
          <Route
            path="/playlists/プレイリスト2"
            element={<Playlist2PlaylistPage />}
          />
          <Route
            path="/playlists/家庭教師ヒットマンreborn!"
            element={<RebornPlaylistPage />}
          />
          <Route
            path="/playlists/vibrations-radio"
            element={<VibrationsPlaylistPage />}
          />
          <Route
            path="/playlists/discover-weekly"
            element={<WeeklyPlaylistPage />}
          />
          <Route path="/playlists/xi" element={<XiPlaylistPage />} />
          <Route
            path="/playlists/battlefield-1-(original-soundtrack)"
            element={<Bf1PlaylistPage />}
          />

          <Route path="/playlists/nmixx" element={<NmixxPlaylistPage />} />

          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
      <PlayerBar />
    </PlayerProvider>
  );
}
