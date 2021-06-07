import React from "react";
import {
  Container,
  AppBar,
  Grid,
  Typography,
  Toolbar,
  IconButton,
} from "@material-ui/core";
const Progress = () => {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap>
            Material-UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg">
        <Grid container spacing={7}>
          <Grid item lg={3} style={{ backgroundColor: `red` }}>
            1
          </Grid>
          <Grid
            item
            lg={3}
            style={{ backgroundColor: `blue`, border: `2px solid red` }}
          >
            2
          </Grid>
          <Grid item lg={3} style={{ backgroundColor: `orange` }}>
            3
          </Grid>
          <Grid item lg={3} style={{ backgroundColor: `green` }}>
            4
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
export default Progress;
