import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import dog2 from "../img/dog2.jpg";

import heart from "../img/heart.jpg";
import cherokee from "../img/cherokee.jpg";
import xi from "../img/Xi.jpg";

import rollercoaster from "../img/rollercoaster.jpg";

import bf1 from "../img/bf1.jpg";

const albums = [
  { name: "お気に入りの曲", image: heart },
  { name: "XI", image: xi },
  { name: "Battlefield 1 (Original Soundtrack)", image: bf1 },
  { name: "New", image: cherokee },
  { name: "NMIXX", image: rollercoaster },
  { name: "水星の魔女 OP ED", image: dog2 },

  // ... rest of your albums here
];

export default function AlbumGrid() {
  return (
    <Grid container spacing={2}>
      {albums.map((albums, index) => (
        <Grid item xs={4} key={index}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              backgroundColor: "transparent",
              borderRadius: "10px",
            }}
          >
            <Avatar
              src={albums.image}
              variant="square"
              sx={{ width: 150, height: 150, borderRadius: 0 }}
            />

            <CardContent
              sx={{
                flex: "1 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "rgba(128, 128, 128,0.2)",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "2em",
                  fontFamily: "Avenir2, Arial, sans-serif",
                }}
              >
                {albums.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
