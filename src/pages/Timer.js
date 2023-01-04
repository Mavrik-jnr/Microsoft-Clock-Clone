import React, { useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../components/Card";
import { timerData } from "../utils/timerMockups";

/*Welcome back
1. the timer resets when paused, make the play pause of the timers more efficient, my last thought process 
was to store in session storage, and safely modify the object there

2. make the ring match with the reducing live time. initialTime - currentTime/100 * 620

3. do the timer expand thing

4. create the modal form for add and edit ensure cards do that too.

5. add the fixed app buttons at the bottom right and hookup delete and add func

6. go to stopwatch and make a wbs for this
*/

function Timer() {
  const [active, setActive] = useState([]);
  const data = {
    Burpees: {
      label: "Burpees",
      //00:24:00
      initialTime: 1440000,
      liveTime: 1440000,
    },
    Plank: {
      label: "Plank",
      //00:15:00
      initialTime: 900000,
      liveTime: 900000,
    },
    "Hold Breath": {
      label: "Hold Breath",
      //00:30:00
      initialTime: 1800000,
      liveTime: 1800000,
    },
    "Skip Rope": {
      label: "Skip Rope",
      //01:00:00
      initialTime: 3600000,
      liveTime: 3600000,
    },
  };
  const [timers, setTimers] = useState(timerData);
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
      for (const i of active) {
        console.log(active);
        data[i].liveTime = data[i].liveTime - 1000;
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

      setTimers({
        ...timers,
        ...data,
        // ...merge,
        // ...updatedObject.map((item) => {
        //   return ...item
        // }),
      });
      // console.log(timers.active[0]);
    }, 1000);
    // console.log(timers);
    return () => {
      clearInterval(Timer);
    };
  }, [active, timers]);

  return (
    <AnimatedPage>
      {/* gg */}
      <Grid container spacing={2}>
        {Object.keys(data).map((timer, idx) => {
          return (
            <>
              <Grid key={idx} xs={12} sm={6} md={12} lg={6} xl={4}>
                {/* {console.log(timers[timer])} */}
                <Card
                  timer={data[timer]}
                  time={data[timer].liveTime}
                  setActive={setActive}
                  active={active}
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
