import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export default function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to play a new song
  function playSong(song) {
    setCurrentSong(song);
    setIsPlaying(true);
  }

  // Function to pause the song
  function pauseSong() {
    setIsPlaying(false);
  }

  // The value object contains the current context data and functions to manipulate it.
  const value = { currentSong, isPlaying, playSong, pauseSong, setIsPlaying };

  // The Provider component wraps the children in the PlayerContext.Provider.
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}
