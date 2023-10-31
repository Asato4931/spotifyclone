import React from "react";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function DividerHeader() {
  return (
    <Box
      sx={{
        overflowY: "auto",
        display: "flex",

        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="body2"
        color="#FFFFFF"
        sx={{
          fontSize: "4.5vh",
          fontFamily: "Avenir, Arial, sans-serif",
          ml: 3,
        }}
      >
        #
      </Typography>
      <Typography
        variant="body2"
        color="#FFFFFF"
        sx={{
          fontSize: "4.5vh",
          fontFamily: "Avenir, Arial, sans-serif",
        }}
      >
        タイトル
      </Typography>
      <Typography
        variant="body2"
        color="#FFFFFF"
        sx={{
          fontSize: "4.5vh",
          fontFamily: "Avenir, Arial, sans-serif",
        }}
      >
        アルバム
      </Typography>
      <Typography
        variant="body2"
        color="#FFFFFF"
        sx={{
          fontSize: "4.5vh",
          fontFamily: "Avenir, Arial, sans-serif",
        }}
      >
        追加日
      </Typography>
      <AccessTimeIcon
        sx={{
          color: "#FFFFFF",
          fontSize: "4vh",
          fontFamily: "Avenir, Arial, sans-serif",
          mr: 3,
        }}
      />
    </Box>
  );
}
