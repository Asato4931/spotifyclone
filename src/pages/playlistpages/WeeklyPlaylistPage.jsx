import { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

// Componentのimport

import HomeSearch from "../../components/HomeSearch";
import PlaylistBar from "../../components/PlaylistBar";

import FavSongsMainContent from "../../components/playlistsmaincontent/FavSongsMainContent";

export default function WeeklyPlaylistPage() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#000000",
      },
    },
  });

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
                  flexShrink: 0,
                  background:
                    "linear-gradient(to bottom, #28004d, #000000 20% )",
                  borderRadius: "30px",
                  marginLeft: "5vw",
                  overflowY: "auto",
                }}
              >
                <Stack direction="column" spacing={3}>
                  <FavSongsMainContent />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </CssBaseline>
      </Fragment>
    </ThemeProvider>
  );
}
