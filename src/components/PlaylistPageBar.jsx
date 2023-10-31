import React from "react";
import IconButton from "@mui/material/IconButton";

import ShuffleIcon from "@mui/icons-material/Shuffle";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function PlaylistPageBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <IconButton>
          <PlayCircleIcon sx={{ color: "green", fontSize: "10vh" }} />
        </IconButton>

        {/* Shuffle Button */}
        <IconButton>
          <ShuffleIcon sx={{ color: "grey", fontSize: "5vh" }} />
        </IconButton>

        {/* Download Button */}
        <IconButton>
          <DownloadIcon sx={{ color: "grey", fontSize: "5vh" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        {/* Search Bar and Button */}
        <Box>
          <IconButton>
            <SearchIcon
              sx={{
                background: "none",
                color: "white",
                textTransform: "none",
                fontSize: "4vh",
                mr: "3vh",
              }}
            />
          </IconButton>

          {/* Drop Down Button */}
          <Button
            endIcon={<ArrowDropDownIcon />}
            sx={{
              background: "none",
              color: "white",
              textTransform: "none",
              fontSize: "4vh",
            }}
          >
            追加日
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
