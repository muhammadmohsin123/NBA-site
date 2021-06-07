import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    width: 40,
  },
  margin: {
    marginBottom: 120,
  },
});
const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item container xs={5} alignItems="center">
            <Grid item container xs={4} alignItems="center">
              <Grid item>
                <img
                  className={classes.logo}
                  src="https://tradenba.com/public/assets/images/tradenba-logo-orange.png"
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">TradeNBA </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography>TEAMS</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>POSTS</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>TOOLS</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>RESOURSES</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignItems="center"
            justify="flex-end"
            spacing={2}
          >
            <Grid item>
              <SearchIcon />
            </Grid>

            <Grid item>
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Grid>

            <Grid item>
              <Button variant="outlined" color="secondary">
                Default
              </Button>
            </Grid>
            <Grid item>
              <Typography>LOGIN</Typography>
            </Grid>
            <Grid item>
              <MoreVertIcon />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
