import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

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

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/playlists/")
      .then((response) => {
        console.log(response.data);
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the playlists!", error);
      });
  }, []);

  return (
    <Box
      sx={{
        overflowY: "auto",
        maxHeight: "62vh",
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
        {playlists.map((playlist, index) => (
          <Link
            to={`/playlists/${playlist.playlist_title
              .replace(/ /g, "-")
              .toLowerCase()}`} // Convert playlist names to lowercase hyphenated strings for URL paths
            key={index}
            style={{ textDecoration: "none", color: "inherit" }} // To keep the look consistent
          >
            <ButtonBase
              key={index}
              onClick={() => console.log(`${playlist.playlist_title} clicked!`)}
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
                    src={`http://127.0.0.1:8000${playlist.playlist_logo}`}
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
                      {playlist.playlist_title}
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
                      {playlist.playlist_subtitle}
                    </Typography>
                  }
                  sx={{ paddingLeft: "1em" }}
                />
              </ListItem>
            </ButtonBase>
          </Link>
        ))}
      </List>
    </Box>
  );
}
