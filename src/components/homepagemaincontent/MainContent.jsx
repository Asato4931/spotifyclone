import AlbumGrid from "../AlbumGrid";
import MainHeader from "../MainHeader";
import MadeForYouBoxes from "../MadeForYouBoxes";
import RecentFavorites from "../RecentFavorites";

import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function MainContent() {
  return (
    <Container maxWidth="false">
      <Box>
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
          おはよう
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
          メイド・フォー・ユー
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
          ちょっと前のお気に入り
        </Typography>
        <RecentFavorites />
      </Box>
    </Container>
  );
}
