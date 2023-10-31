import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

export default function HomeSearch() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        height: "12vh",
        borderRadius: "30px",
        pt: 2,
        width: "29vw",
        mt: 2.5,
        ml: -1,
      }}
    >
      <Stack direction="column">
        <Stack
          direction="row"
          sx={{
            mt: -1,
          }}
        >
          <ButtonBase onClick={() => console.log("Home clicked!")}>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "inherit" }} // To keep the look consistent
            >
              <IconButton>
                <HomeIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "4vw",
                    height: "4vh",
                  }}
                />
                <Typography
                  sx={{
                    pl: 2,
                    pt: 1,
                    color: "#FFFFFF",
                    fontSize: "4.5vh",
                    fontFamily: "Avenir2, Arial, sans-serif",
                  }}
                >
                  ホーム
                </Typography>
              </IconButton>
            </Link>
          </ButtonBase>
        </Stack>

        <Stack direction="row" sx={{ pt: 1 }}>
          <ButtonBase onClick={() => console.log("Home clicked!")}>
            <IconButton>
              <SearchIcon
                sx={{ color: "#FFFFFF", width: "4vw", height: "4vh" }}
              />
              <Typography
                sx={{
                  pl: 2,
                  color: "#FFFFFF",
                  fontSize: "4.5vh",
                  fontFamily: "Avenir2, Arial, sans-serif",
                }}
              >
                検索
              </Typography>
            </IconButton>
          </ButtonBase>
        </Stack>
      </Stack>
    </Box>
  );
}
