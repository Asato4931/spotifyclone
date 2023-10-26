import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import daily1 from "../img/dailymix1.jpg";
import daily2 from "../img/dailymix2.jpg";
import daily3 from "../img/dailymix3.jpg";
import daily4 from "../img/dailymix4.jpg";
import discover from "../img/discover.jpg";

const madealbums = [
  {
    title: "Daily Mix 1",
    desc: "JO1やiri、Official髭男ismほか多数",
    image: daily1,
  },
  { title: "Daily Mix 2", desc: "tripleSやITZY、twiceほか多数", image: daily2 },
  {
    title: "Daily Mix 3",
    desc: "インシンクやGorgon City、ほか多数",
    image: daily3,
  },
  {
    title: "Daily Mix 4",
    desc: "JO1やiri、Official髭男ismほか多数",
    image: daily4,
  },
  {
    title: "Discover Weekly",
    desc: "今週のミックステープ。あなたのために選んだ新曲",
    image: discover,
  },

  // ... rest of your albums here
];

export default function MadeForYouBoxes() {
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
                      fontSize: "2em",
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
