import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

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
        <Stack direction="row" sx={{ mt: -2 }}>
          <IconButton>
            <HomeIcon sx={{ color: "#FFFFFF" }} />
            <Typography
              sx={{
                pl: 2,
                color: "#FFFFFF",
                fontSize: "1.3em",
                fontFamily: "Avenir2, Arial, sans-serif",
              }}
            >
              ホーム
            </Typography>
          </IconButton>
        </Stack>

        <Stack direction="row">
          <IconButton>
            <SearchIcon sx={{ color: "#FFFFFF" }} />
            <Typography
              sx={{
                pl: 2,
                color: "#FFFFFF",
                fontSize: "1.3em",
                fontFamily: "Avenir2, Arial, sans-serif",
              }}
            >
              検索
            </Typography>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
