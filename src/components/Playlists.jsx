import React, { useState, Fragment, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import ButtonBase from "@mui/material/ButtonBase";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import heart from "../img/heart.jpg";
import cherokee from "../img/cherokee.jpg";
import xi from "../img/Xi.jpg";
import vibrations from "../img/vibrations.jpg";
import harenchi from "../img/harenchi.jpg";
import senkou from "../img/senkou.jpg";
import weekly from "../img/discover.jpg";
import reborn from "../img/reborn.jpg";

const playlists1 = [
  { name: "お気に入りの曲", author: "プレイリスト", image: heart },
  { name: "New", author: "プレイリスト・asato4931", image: cherokee },
  { name: "XI", author: "プレイリスト・asato4931", image: xi },
  {
    name: "Vibrations Radio",
    author: "プレイリスト・Spotify",
    image: vibrations,
  },
  { name: "ハレンチ", author: "アルバム・ちゃんみな", image: harenchi },
  { name: "プレイリスト #2", author: "プレイリスト・asato4931", image: senkou },
  { name: "XI", author: "プレイリスト・asato4931", image: xi },
  { name: "Discover Weekly", author: "プレイリスト・Spotify", image: weekly },
  {
    name: "家庭教師ヒットマンREBORN!",
    author: "アルバム・佐橋俊彦",
    image: reborn,
  },
  // ... add more playlists here
];

export default function Playlists() {
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
        {playlists1.map((playlists1, index) => (
          <ButtonBase
            key={index}
            onClick={() => console.log(`${playlists1.name} clicked!`)}
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
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={playlists1.image}
                  variant="square"
                  sx={{ width: 100, height: 100, borderRadius: 1 }}
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
                    {playlists1.name}
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
                    {playlists1.author}
                  </Typography>
                }
                sx={{ paddingLeft: "1em" }}
              />
            </ListItem>
          </ButtonBase>
        ))}
      </List>
    </Box>
  );
}
