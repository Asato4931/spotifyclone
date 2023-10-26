import React, { useState, Fragment, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import CollectionsIcon from "@mui/icons-material/Collections";

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

import { PlayCircleOutline, Search, AddBox } from "@mui/icons-material";

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
  { name: "XI", author: "asato4931", image: xi },
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
      }}
    >
      <List>
        {playlists1.map((playlists1, index) => (
          <ListItem key={index} sx={{ py: 2 }}>
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
                    fontSize: "2em",
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
                    fontSize: "1.75em",
                    fontFamily: "Avenir, Arial, sans-serif",
                  }}
                >
                  {playlists1.author}
                </Typography>
              }
              sx={{ paddingLeft: "1em" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
