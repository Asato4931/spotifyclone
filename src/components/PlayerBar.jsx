import React from "react";
import { Box, IconButton } from "@mui/material";
import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";

export default function PlayerBar() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,

        width: "100vw",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1DB954",
        color: "white",
        padding: 2,
        zIndex: 1000,
      }}
    >
      <IconButton color="inherit">
        <SkipPrevious />
      </IconButton>
      <IconButton color="inherit">
        <PlayArrow />
      </IconButton>
      <IconButton color="inherit">
        <SkipNext />
      </IconButton>
      {/* Add more elements like song title, artist, and other controls as needed */}
    </Box>
  );
}
