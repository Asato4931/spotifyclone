import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";

import { PlayCircleOutline, Search, AddBox } from "@mui/icons-material";

export default function PlaylistSearch() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2, height: "4.2vh" }}>
      <IconButton color="#FFFFFF">
        <Search />
      </IconButton>
      <Typography
        variant="body1"
        sx={{ pl: 2, color: "#FFFFFF", fontSize: "2em" }}
      >
        最近追加・再生した順
      </Typography>
    </Box>
  );
}
