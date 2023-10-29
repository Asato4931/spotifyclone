import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";

export default function MainHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "left",

        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "left" }}>
        <IconButton>
          <ArrowBackIcon
            sx={{
              color: "#FFFFFF",
              width: "4.5vw",
              height: "4.5vh",
              mt: 2,
              ml: -5,
            }}
          />
        </IconButton>
        <IconButton>
          <ArrowForwardIcon
            sx={{
              color: "#FFFFFF",
              width: "4.5vw",
              height: "4.5vh",
              mt: 2,
              ml: -8,
            }}
          />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", alignItems: "right" }}>
        <IconButton>
          <NotificationsIcon
            sx={{ color: "#FFFFFF", width: "4.5vw", height: "4.5vh", mt: 2 }}
          />
        </IconButton>
        <IconButton>
          <AccountCircleIcon
            sx={{ color: "#FFFFFF", width: "4.5vw", height: "4.5vh", mt: 2 }}
          />
        </IconButton>
        <IconButton>
          <PersonIcon
            sx={{ color: "#FFFFFF", width: "4.5vw", height: "4.5vh", mt: 2 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
