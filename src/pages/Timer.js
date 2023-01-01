import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "../components/Card";

function Timer() {
  return (
    <AnimatedPage>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
        <Grid xs={12} sm={6} md={12} lg={6} xl={4}>
          <Card />
        </Grid>
      </Grid>
    </AnimatedPage>
  );
}

export default Timer;
