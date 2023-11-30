import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // ... other state variables like volume, playlist, etc.

  // Function to play a new song
  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // Function to pause the song
  const pauseSong = () => {
    setIsPlaying(false);
  };

  // The value object contains the current context data and functions to manipulate it.
  const value = { currentSong, isPlaying, playSong, pauseSong, setIsPlaying };

  // The Provider component wraps the children in the PlayerContext.Provider.
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
