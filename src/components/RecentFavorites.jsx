import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import happymix from "../img/happymix.jpg";
import thisisiri from "../img/thisisiri.jpg";
import rollercoaster from "../img/rollercoaster.jpg";
import gundamz from "../img/gundamz.jpg";
import party from "../img/party.jpg";

const madealbums = [
  {
    title: "ハッピーMix",
    desc: "JO1やiri、Official髭男ismほか多数",
    image: happymix,
  },
  {
    title: "This Is Iri",
    desc: "Hip Hop的なリリックとソウルフルな歌声",
    image: thisisiri,
  },
  {
    title: "摩天楼",
    desc: "iri",
    image: rollercoaster,
  },
  {
    title: "機動戦士Zガンダム",
    desc: "三枝成影",
    image: gundamz,
  },
  {
    title: "A Midsummer NMIXX",
    desc: "NMIXX",
    image: party,
  },

  // ... rest of your albums here
];

export default function RecentFavorites() {
  return (
    <Grid container spacing={7}>
      {madealbums.map((madealbums, index) => (
        <Grid item xs={2.4} key={index}>
          <Box
            sx={{
              width: 350,
              height: 500,
              borderRadius: 5,
              backgroundColor: "rgba(128, 128, 128,0.1)",
              borderRadius: 8,
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "transparent",
              }}
            >
              <Avatar
                src={madealbums.image}
                variant="square"
                sx={{ width: 300, height: 300, borderRadius: 5, ml: 3, mt: 3 }}
              />

              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "rgba(128, 128, 128,0)",
                }}
              >
                <Stack direction="column">
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "2.5em",
                      fontFamily: "Avenir2, Arial, sans-serif",
                    }}
                  >
                    {madealbums.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#808080",
                      fontSize: "1.5em",
                      fontFamily: "Avenir2, Arial, sans-serif",
                    }}
                  >
                    {madealbums.desc}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
