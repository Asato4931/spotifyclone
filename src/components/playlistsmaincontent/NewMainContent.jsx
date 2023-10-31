import AlbumGrid from "../AlbumGrid";
import MainHeader from "../MainHeader";
import MadeForYouBoxes from "../MadeForYouBoxes";
import RecentFavorites from "../RecentFavorites";

import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function NewMainContent() {
  return (
    <Container maxWidth="false">
      <MainHeader />
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          fontSize: "8.5vh",
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        New
      </Typography>
      <AlbumGrid />
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          fontSize: "7vh",
          pt: 10,
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        Favorites
      </Typography>

      <MadeForYouBoxes />

      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          fontSize: "6.5vh",
          pt: 10,
          pb: 5,
          fontFamily: "Avenir2, Arial, sans-serif",
        }}
      >
        Favorites
      </Typography>
      <RecentFavorites />
    </Container>
  );
}
