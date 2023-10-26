import Box from "@mui/material/Box";

import { Divider } from "@mui/material";

// Component Import系

import PlaylistSearch from "./PlaylistSearch";
import Playlists from "./Playlists";
import TopControls from "./TopControls";

export default function PlaylistBar() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",

        borderRadius: "30px",
        pt: 2,
        width: "29vw",
        mt: 2,
        ml: -1,
      }}
    >
      <TopControls />

      <Divider sx={{ my: 1 }} />

      <PlaylistSearch />

      <Divider sx={{ my: 1 }} />

      <Playlists />
    </Box>
  );
}
