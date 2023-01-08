import React, { useEffect, useRef, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../components/Card";
import { timerData } from "../utils/timerMockups";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*Welcome back
1. the timer resets when paused, make the play pause of the timers more efficient, my last thought process 
was to store in session storage, and safely modify the object there +

2. + fix the replay of the timer which causes it to hide the accent color when replayed, also the time can't be deducted by 25 it's slowr than reality. increasing this value makes the time accurate and ring jerky while reducing. initialTime - currentTime/100 * 620 +

3. do the timer expand thing

4. create the modal form for add and edit ensure cards do that too.

5. add the fixed app buttons at the bottom right and hookup delete and add func

6. go to stopwatch and make a wbs for this
*/

function Timer() {
  const [active, setActive] = useState([]);

  let timerdata = {
    "Hold Breath": {
      label: "Hold Breath",
      //00:30:00
      initialTime: 1800000,
      liveTime: 1800000,
    },
    "Skip Rope": {
      label: "Skip Rope",
      //01:00:00
      initialTime: 45000,
      liveTime: 45000,
    },
    clap: {
      label: "clap",
      //01:00:00
      initialTime: 5000,
      liveTime: 5000,
    },
    "clean up": {
      label: "clean up",
      //01:00:00
      initialTime: 10000,
      liveTime: 10000,
    },
  };
  const data = useRef(timerdata);

  const [timers, setTimers] = useState(timerdata);
  // console.log(
  //   ...active.map((key) => {
  //     return {
  //       key: {
  //         ...timers[key],
  //         liveTime: timers[key].liveTime - 1000,
  //       },
  //     };
  //   })
  // );
  useEffect(() => {
    const Timer = setInterval(() => {
      if (active.length !== 0) {
        for (let i of active) {
          console.log(data);
          data.current[i].liveTime = data.current[i].liveTime - 1000;
          // if (data.current[i].liveTime === -1000) {
          //   data.current[i].liveTime = data.current[i].initialTime - 1000;
          // }
        }
        setTimers({
          ...timers,
          ...data.current,
          // ...merge,
          // ...updatedObject.map((item) => {
          //   return ...item
          // }),
        });
      }

      // set;
      // let oldObj = timers
      // let updatedObject = active.map((key) => {
      //   return {
      //     timer: {
      //       ...timers[key],
      //       liveTime: timers[key].liveTime - 1000,
      //     },
      //   };
      // });
      // let merge = updatedObject.reduce(function (acc, x) {
      //   for (var key in x) acc[key] = x[key];
      //   return acc;
      // }, {});
      // console.log(merge);

      // console.log("frozen data", timers);
    }, 1000);
    // console.log(timers);
    if (active.length === 0) {
      clearInterval(Timer);
    }
    return () => {
      clearInterval(Timer);
    };
  }, [active]);

  return (
    <AnimatedPage>
      <ToastContainer autoClose={12000} />
      {/* gg */}
      <Grid container spacing={2}>
        {Object.keys(timers).map((timer, idx) => {
          return (
            <>
              <Grid key={idx} xs={12} sm={6} md={12} lg={6} xl={4}>
                {/* {console.log(timers[timer])} */}
                <Card
                  timer={timers[timer]}
                  time={timers[timer].liveTime}
                  setActive={setActive}
                  active={active}
                  setTimers={setTimers}
                  timers={timers}
                  data={data.current}
                  id={timer}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </AnimatedPage>
  );
}

export default Timer;
