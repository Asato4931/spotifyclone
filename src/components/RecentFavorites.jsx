import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import ButtonBase from "@mui/material/ButtonBase";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RecentFavorites() {
  const [recentplaylists, setrecentPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recentplaylists/")
      .then((response) => {
        console.log(response.data);
        setrecentPlaylists(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the playlists!", error);
      });
  }, []);

  return (
    <Grid container spacing={7}>
      {recentplaylists.map((recentplaylist, index) => (
        <Grid item xs={2.4} key={index}>
          <ButtonBase
            onClick={() =>
              console.log(`${recentplaylist.playlist_title} clicked!`)
            }
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
                  src={`http://127.0.0.1:8000${recentplaylist.playlist_logo}`}
                  variant="square"
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: 5,
                    ml: 3,
                    mt: 3,
                  }}
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
                        fontSize: "4.5vh",
                        fontFamily: "Avenir2, Arial, sans-serif",
                        textAlign: "left",
                        pl: 1,
                      }}
                    >
                      {recentplaylist.playlist_title}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#808080",
                        fontSize: "3.5vh",
                        fontFamily: "Avenir2, Arial, sans-serif",
                        textAlign: "left",
                        pl: 1,
                      }}
                    >
                      {recentplaylist.playlist_subtitle}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
}
