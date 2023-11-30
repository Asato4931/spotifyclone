import React, { useRef, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import {
  PlayArrow,
  SkipNext,
  SkipPrevious,
  Pause as PauseIcon,
} from "@mui/icons-material";

import { usePlayer } from "./PlayerContext";

export default function PlayerBar() {
  const { currentSong, isPlaying, setIsPlaying } = usePlayer();
  const audioRef = useRef(null);

  useEffect(() => {
    // When the isPlaying state changes, play or pause the audio
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    // When the currentSong changes, update the source and play the audio
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.song_mp3;
      audioRef.current.play().catch((e) => console.error("Error playing:", e));
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle the isPlaying state
  };

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
      <IconButton color="inherit" onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrow />}
      </IconButton>
      <IconButton color="inherit">
        <SkipNext />
      </IconButton>
      {/* Add more elements like song title, artist, and other controls as needed */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)} // Stop playing when the audio has ended
        onError={(e) => console.error("Audio error:", e)}
      />
    </Box>
  );
}
