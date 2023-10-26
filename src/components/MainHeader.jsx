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
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton>
          <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <NotificationsIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton>
          <AccountCircleIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton>
          <PersonIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
