import React from "react";
import { usePlayer } from "./PlayerContext";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import ButtonBase from "@mui/material/ButtonBase";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SongList() {
  const [Songs, setSongs] = useState([]);
  const { playSong } = usePlayer();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/お気に入りの曲/songs/")
      .then((response) => {
        console.log(response.data);
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the Songs!", error);
      });
  }, []);

  return (
    <Box
      sx={{
        overflowY: "auto",
        maxHeight: "70vh",
        width: "100%",

        "&::-webkit-scrollbar": {
          width: "12px",
          display: "none", // This hides the scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#FFFFFF",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#121212",
        },

        // Hover state: scrollbar displayed on hover for Webkit browsers
        "&:hover": {
          "&::-webkit-scrollbar": {
            display: "block", // This displays the scrollbar on hover
          },
        },

        scrollbarWidth: "thin",
        scrollbarColor: "#121212 #000000",
      }}
    >
      <List>
        {Songs.map((songs, index) => (
          <ButtonBase
            key={index}
            onClick={() => playSong(songs)}
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "left",
              borderRadius: "10px",
              transition: "background-color 0.3s",

              "&:hover": {
                backgroundColor: "#666666",
              },
            }}
          >
            <ListItem
              key={index}
              sx={{
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                color="#FFFFFF"
                sx={{
                  fontSize: "4.5vh",
                  fontFamily: "Avenir, Arial, sans-serif",
                }}
              >
                {index + 1}
              </Typography>
              <ListItemAvatar>
                <Avatar
                  src={`http://127.0.0.1:8000${songs.song_logo}`}
                  variant="square"
                  sx={{ width: 100, height: 100, borderRadius: 1, ml: "5vh" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    color="#FFFFFF"
                    sx={{
                      fontSize: "4.5vh",
                      fontFamily: "Avenir, Arial, sans-serif",
                    }}
                  >
                    {songs.song_title}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="#808080"
                    sx={{
                      fontSize: "4vh",
                      fontFamily: "Avenir, Arial, sans-serif",
                    }}
                  >
                    {songs.artist}
                  </Typography>
                }
                sx={{ paddingLeft: "1vh" }}
              />

              <Typography
                variant="body2"
                color="#FFFFFF"
                sx={{
                  fontSize: "4.5vh",
                  fontFamily: "Avenir, Arial, sans-serif",
                }}
              >
                {songs.album_title}
              </Typography>
              <Typography
                variant="body2"
                color="#FFFFFF"
                sx={{
                  fontSize: "4.5vh",
                  fontFamily: "Avenir, Arial, sans-serif",
                }}
              >
                {songs.added_data}
              </Typography>
              <Typography
                variant="body2"
                color="#FFFFFF"
                sx={{
                  fontSize: "4.5vh",
                  fontFamily: "Avenir, Arial, sans-serif",
                }}
              >
                {songs.duration}
              </Typography>
            </ListItem>
          </ButtonBase>
        ))}
      </List>
    </Box>
  );
}
