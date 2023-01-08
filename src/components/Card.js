import { Box, Button, Card as MUICARD, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import PauseIcon from "@mui/icons-material/Pause";
import { toast } from "react-toastify";

import song from "../assets/ybna.mp3";
// import { toast } from "react-toastify";
// import { timerData } from "../utils/timerMockups";
function Card({ timer, time, setActive, active, setTimers, timers, data, id }) {
  const theme = useTheme();
  const [play, setPlay] = useState(false);

  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (timer.liveTime === 0) {
      setActive(
        active.filter((item) => {
          return item !== timer.label;
        })
      );
      data[id].liveTime = data[id].initialTime;
      setTimers({
        ...timers,
        ...data,
        // ...merge,
        // ...updatedObject.map((item) => {
        //   return ...item
        // }),
      });
      setDone(true);
      setPlay(false);
      notify();
      setShow(false);
      playSound(song);

      // alert("Hello World");
    }
  }, [timer.liveTime]);

  // const nn = ().toFixed(1);
  // let od = new Date(timer.initialTime).toLocaleTimeString("en-US").slice(0, -2);
  // console.log
  // var clock = new Date("11/21/1987 00:30:00").getTime() to milliseconds
  // time = new Date(clock).toLocaleTimeString('en-US') to time
  const notify = () => toast.success("Time up", { toastId: timer.label });
  function playSound(song) {
    const audio = new Audio(song);

    audio.play();
  }
  function msToHMS(time) {
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // let ho = hours < 1 ? 0 : hours;
    // console.log(seconds);
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    return h + ":" + m + ":" + s;
  }

  const handleStartTimer = (label, done) => {
    setPlay(!play);
    // setDone(false);
    // setShow(true);
    if (!done) {
      setShow(true);
    } else {
      setShow(true);
    }
    // setRun(!run);
    // console.log(typeof label);
    // console.log("prevLine", active);
    if (!active.includes(label)) {
      setActive([...active, label]);
      console.log("nextLine", active);
    } else {
      setActive(
        active.filter((item) => {
          return item !== label;
        })
      );
    }
  };
  return (
    <>
      <MUICARD
        sx={{
          //   width: "461px",
          height: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          pt: "8px",
          cursor: "pointer",
          position: "relative",

          // justifyContent: "center",
          //   mb: "16px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px="16px"
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }} color="black">
            {timer.label}
          </Typography>
          <IconButton sx={{ margin: "0" }} size="small">
            <OpenInFullIcon sx={{ fontSize: "16px", color: "#1b1b1b" }} />
          </IconButton>
        </Box>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="8px"
        >
          <SVG
            theme={theme}
            play={show}
            p={play}
            done={done}
            duration={timer.initialTime / 1000}
            style={{
              zIndex: "10",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="225px"
              height="222px"

              // style={{ backgroundColor: "blue" }}

              // fill="none"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                id="Saku"
                cx="117.5"
                cy="114"
                r="100"
                strokeLinecap="round"
              />
            </svg>
          </SVG>
          {/* {background svg} */}
          <SVG theme={theme} play={play}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="225px"
              height="222px"
              // style={{ backgroundColor: "blue" }}

              // fill="none"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                className="bgSaku"
                cx="117.5"
                cy="114"
                r="100"
                stroke-linecap="round"
                style={{
                  strokeDasharray: "630",
                  // stroke: "#000",
                }}
              />
            </svg>
          </SVG>
          <Box
            height="218px"
            width="218px"
            borderRadius="50%"
            className="outerBorder"
            //   timeRingInactive: "#F4F4F4",
            //   timeRingBorder: "#EEEEEE",
            //   timerText: "#00000",
            //   timerIcons: "#1b1b1b",
            border="2px solid #eeee"
            // boxShadow="1px 1px 0px 2px #eeeee"
            display="flex"
            alignItems="center"
            position="relative"
            justifyContent="center"
          >
            <Box
              height="186px"
              width="186px"
              borderRadius="50%"
              border="2px solid #eeee"
              display="flex"
              alignItems="center"
              position="relative"
              justifyContent="center"
              className="outerBorder"
            >
              <Typography variant="h3" color="inactiveTime">
                {msToHMS(timer.liveTime)}
              </Typography>
            </Box>
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
              onClick={() => {
                handleStartTimer(timer.label, done);
              }}
            >
              {play ? (
                <PauseIcon
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              ) : (
                <PlayArrowIcon
                  sx={{
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              )}
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
    </>
  );
}

export default Card;

const SVG = styled.div`
  position: absolute;
  /* bottom: 0%; */
  transform: rotate(270deg);
  & circle {
    fill: none;

    stroke-width: 14px;
    //630 starting point
    stroke-dasharray: 630;
    stroke-dashoffset: 0;
  }
  #Saku {
    stroke: ${(props) => props.play && props.theme.palette.accent};
    /* stroke: ${(props) => props.theme.palette.accent}; */
    /* stroke-dashoffset: 500; */
    stroke-dashoffset: 0;
    animation-play-state: ${(props) => (props.p ? "running" : "paused")};
    animation-name: ${(props) => (!props.done ? "ring" : "zing")};
    /* animation:${(props) => (props.done ? "none" : "")} */
    /* style={{ animationPlayState: isPlaying ? "running" : "paused" }} */
    animation-duration: ${(props) => props.duration}s;
    animation-delay: 1s;
    /* transition: none; */
  }
  @keyframes ring {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: 630;
    }
  }
  @keyframes zing {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: 630;
    }
  }
  .bgSaku {
    stroke-dashoffset: 0;
    stroke: #f4f4f4;
  }
`;
