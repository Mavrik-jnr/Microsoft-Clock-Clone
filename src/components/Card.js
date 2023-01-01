import { Box, Button, Card as MUICARD, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
function Card() {
  return (
    <MUICARD
      sx={{
        //   width: "461px",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        pt: "8px",
        cursor: "pointer",
        // justifyContent: "center",
        //   mb: "16px",
      }}
    >
      {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="300px"
            height="300px"
            // fill="none"
            style={{ position: "absolute", bottom: "0%" }}
        >
            <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="150" cy="130" r="100" stroke-linecap="round" />
        </svg> */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="16px"
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }} color="black">
          Omo
        </Typography>
        <IconButton sx={{ margin: "0" }} size="small">
          <OpenInFullIcon sx={{ fontSize: "16px", color: "#1b1b1b" }} />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap="8px">
        <Box
          height="210px"
          width="210px"
          borderRadius="50%"
          //   timeRingInactive: "#F4F4F4",
          //   timeRingBorder: "#EEEEEE",
          //   timerText: "#00000",
          //   timerIcons: "#1b1b1b",
          border="12px solid #EEEEEE"
          display="flex"
          alignItems="center"
          position="relative"
          justifyContent="center"
        >
          <Typography variant="h3" color="inactiveTime">
            00:30:00
          </Typography>
        </Box>
        <Box display="flex" gap="16px" alignItems="center">
          <IconButton
            size="medium"
            sx={{
              backgroundColor: "accent",
              height: "30px",
              width: "30px",
              padding: "16px",
              //   .MuiIconButton-root
              //   .MuiButtonBase-root
              "&.MuiButtonBase-root": {
                "&:hover": { backgroundColor: "#A60311" },
              },
            }}
          >
            <PlayArrowIcon
              sx={{
                color: "white",
                fontSize: "20px",
              }}
            />
          </IconButton>
          <IconButton
            size="medium"
            sx={{
              backgroundColor: "#fcfcfc",
              height: "30px",
              width: "30px",
              border: "2px solid #f2f2f2",
              padding: "16px",
              "&.MuiButtonBase-root": {
                "&:hover": {
                  "& .MuiSvgIcon-root": { color: "#1b1b1b" },
                },
              },
            }}
          >
            <ReplayIcon
              sx={{
                color: "#aeaeae",
                fontSize: "24px",
                transition: "color .2s",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </MUICARD>
  );
}

export default Card;
