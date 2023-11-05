import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AlbumGrid() {
  const [welcomeplaylists, setwelcomePlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/welcomeplaylists/")
      .then((response) => {
        console.log(response.data);
        setwelcomePlaylists(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the playlists!", error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {welcomeplaylists.map((welcomeplaylist, index) => (
        <Grid item xs={4} key={index}>
          <Link
            to={`/playlists/${welcomeplaylist.playlist_title
              .replace(/ /g, "-")
              .toLowerCase()}`} // Convert playlist names to lowercase hyphenated strings for URL paths
            key={index}
            style={{ textDecoration: "none", color: "inherit" }} // To keep the look consistent
          >
            <ButtonBase
              onClick={() =>
                console.log(`${welcomeplaylist.playlist_title} clicked!`)
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
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                  width: "100%",
                  flexGrow: 1,
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                }}
              >
                <Avatar
                  src={`http://127.0.0.1:8000${welcomeplaylist.playlist_logo}`}
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

                      fontSize: "4.5vh",
                      fontFamily: "Avenir2, Arial, sans-serif",
                    }}
                  >
                    {welcomeplaylist.playlist_title}
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
