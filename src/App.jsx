import { useState, Fragment, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import dog1 from "./img/dog1.jpg";
import dog2 from "./img/dog2.jpg";

import { PlayCircleOutline, Search, AddBox } from "@mui/icons-material";

// Componentのimport

import HomeSearch from "./components/HomeSearch";
import PlaylistBar from "./components/PlaylistBar";

import MainContent from "./components/MainContent";

export default function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#000000",
      },
    },
  });

  // Sample data
  const playlists1 = [
    { name: "Vibrations Radio", author: "Spotify", image: dog1 },
    { name: "XI", author: "asato4931", image: dog2 },
    // ... add more playlists here
  ];

  const playlists2 = [
    { image: dog1, description: "Daily Mix 1" },
    { image: dog2, description: "Daily Mix 2" },

    // ... add more playlists here
  ];

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline>
          <Grid
            container
            spacing={0}
            style={{
              height: "200vh",
              paddingTop: "20px",
              color: "#000000",
            }}
          >
            <Grid item xs={3}>
              <Drawer
                sx={{
                  height: "200vh",
                  width: "30vw",
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: "30vw",
                    boxSizing: "border-box",
                    backgroundColor: "#000000",
                  },
                }}
                variant="permanent"
                anchor="left"
              >
                <Stack direction="column" spacing={3}>
                  <Container maxWidth="sm">
                    <HomeSearch />
                    <PlaylistBar />
                  </Container>
                </Stack>
              </Drawer>
            </Grid>
            <Grid item xs={9}>
              <Box
                sx={{
                  height: "200vh",
                  background:
                    "linear-gradient(to bottom, #28004d, #000000 20% )",
                  borderRadius: "30px",
                  marginLeft: "5vw",
                }}
              >
                <Stack direction="column" spacing={3}>
                  <MainContent />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </CssBaseline>
      </Fragment>
    </ThemeProvider>
  );
}
