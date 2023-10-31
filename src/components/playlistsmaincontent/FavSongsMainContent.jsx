import SongList from "../SongList";
import MainHeader from "../MainHeader";
import PlaylistPageBar from "../PlaylistPageBar";

import Container from "@mui/material/Container";
import { Divider, Grid, Typography } from "@mui/material";
import DividerHeader from "../../components/DividerHeader";

export default function FavSongsMainContent() {
  return (
    <Container maxWidth="false">
      <MainHeader />
      <Typography
        variant="h1"
        sx={{
          color: "#FFFFFF",
          fontSize: "25vh",
          pt: 5,
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        お気に入りの曲
      </Typography>
      <PlaylistPageBar />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DividerHeader />
          <Divider sx={{ background: "grey", mt: 2, mb: 2 }} />
          <SongList />
        </Grid>
      </Grid>
    </Container>
  );
}
