import React from "react";

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

import aonosumika from "../img/aonosumika.jpg";
import specialz from "../img/specialz.jpg";
import meinichi from "../img/meinichi.jpg";

const songs = [
  {
    name: "青のすみか",
    author: "キタニテツヤ",
    added: "4週間前",
    length: "3:16",
    album: "青のすみか",
    image: aonosumika,
  },
  {
    name: "SPECIALZ",
    author: "King Gnu",
    added: "4週間前",
    length: "3:59",
    album: "SPECIALZ",
    image: specialz,
  },
  {
    name: "命日",
    author: "ちゃんみな",
    added: "2023年9月4日",
    length: "3:22",
    album: "ちゃんみな",
    image: meinichi,
  },

  // ... add more playlists here
];

export default function SongList() {
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
        {songs.map((songs, index) => (
          <ButtonBase
            key={index}
            onClick={() => console.log(`${songs.name} clicked!`)}
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
                  src={songs.image}
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
                    {songs.name}
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
                    {songs.author}
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
                {songs.album}
              </Typography>
              <Typography
                variant="body2"
                color="#FFFFFF"
                sx={{
                  fontSize: "4.5vh",
                  fontFamily: "Avenir, Arial, sans-serif",
                }}
              >
                {songs.added}
              </Typography>
              <Typography
                variant="body2"
                color="#FFFFFF"
                sx={{
                  fontSize: "4.5vh",
                  fontFamily: "Avenir, Arial, sans-serif",
                }}
              >
                {songs.length}
              </Typography>
            </ListItem>
          </ButtonBase>
        ))}
      </List>
    </Box>
  );
}
