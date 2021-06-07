import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
const Card = () => {
  return (
    <Grid container spacing={2} justify="space-around">
      <Grid item sx={3}>
        <Cards />
      </Grid>
      <Grid item sx={3}>
        <Cards />
      </Grid>
      <Grid item sx={3}>
        <Cards />
      </Grid>
      <Grid item sx={3}>
        <Cards />
      </Grid>
      <Grid item sx={3}>
        <Cards />
      </Grid>
      <Grid item sx={3}>
        <Cards />
      </Grid>
    </Grid>
  );
};
export default Card;
