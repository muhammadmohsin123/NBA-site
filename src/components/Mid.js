import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  bg: {
    // backgroundImage: URL(
    //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Fw%2FPgQsUh&psig=AOvVaw0_HVNN6zfLKbu0zj9-lSjv&ust=1623089473508000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjTstLNg_ECFQAAAAAdAAAAABAJ"
    // ),
  },
});
const Mid = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={9}>
        <Grid item xs={12}>
          <Typography variant="h3"> Trade season is upon us</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            The NBA season is heating up, see what draft and trade scenarios are
            possible to better your team.
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="center">
          <Grid item xs={4}>
            <Button variant="contained" color="secondary">
              FIRE UP THE TRADE MACHINE
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="secondary">
              FIRE UP THE TRADE MACHINE
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="secondary">
              FIRE UP THE TRADE MACHINE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Mid;
