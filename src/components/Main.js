import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import { sizing } from "@material-ui/system";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  rootp: {
    width: 400,
    height: 400,
  },
  rootb: {
    marginBottom: 50,
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item container xs={8}>
          <Grid item xs={12}>
            <Typography variant="h4">
              2021 NBA Trade Deadline Challenge
            </Typography>
            <Typography>March 13th, 2020 by Chris @fanspo</Typography>
            <Typography>
              Who really knows their stuff? $100 gift card prize awarded to
              winner. On a 0-5 scale, predict how likely each of these trade
              candidates is to be dealt prior to the trade deadline on March
              25...
            </Typography>
            <Grid item container justify="flex-end">
              <Grid item>
                <Button variant="outlined">Read The Blog</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              2021 NBA Trade Deadline Challenge
            </Typography>
            <Typography>March 13th, 2020 by Chris @fanspo</Typography>
            <Typography>
              Who really knows their stuff? $100 gift card prize awarded to
              winner. On a 0-5 scale, predict how likely each of these trade
              candidates is to be dealt prior to the trade deadline on March
              25...
            </Typography>
            <Grid item container justify="flex-end">
              <Grid item>
                <Button variant="outlined">Read The Blog</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              2021 NBA Trade Deadline Challenge
            </Typography>
            <Typography>March 13th, 2020 by Chris @fanspo</Typography>
            <Typography>
              Who really knows their stuff? $100 gift card prize awarded to
              winner. On a 0-5 scale, predict how likely each of these trade
              candidates is to be dealt prior to the trade deadline on March
              25...
            </Typography>
            <Grid item container justify="flex-end">
              <Grid item>
                <Button variant="outlined">Read The Blog</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              2021 NBA Trade Deadline Challenge
            </Typography>
            <Typography>March 13th, 2020 by Chris @fanspo</Typography>
            <Typography>
              Who really knows their stuff? $100 gift card prize awarded to
              winner. On a 0-5 scale, predict how likely each of these trade
              candidates is to be dealt prior to the trade deadline on March
              25...
            </Typography>
            <Grid item container justify="flex-end">
              <Grid item>
                <Button variant="outlined">Read The Blog</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">
              2021 NBA Trade Deadline Challenge
            </Typography>
            <Typography>March 13th, 2020 by Chris @fanspo</Typography>
            <Typography>
              Who really knows their stuff? $100 gift card prize awarded to
              winner. On a 0-5 scale, predict how likely each of these trade
              candidates is to be dealt prior to the trade deadline on March
              25...
            </Typography>
            <Grid item container justify="flex-end">
              <Grid item>
                <Button variant="outlined">Read The Blog</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={4}>
          <Grid item className={classes.rootp}>
            <Box width="100%" height="50%">
              <Paper variant="elevation" className={classes.root}>
                <Typography variant="h6">Partners</Typography>
                <Divider variant="inset" className={classes.rootb} />
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item className={classes.rootp}>
            <Box width="100%" height="50%">
              <Paper variant="elevation" className={classes.root}>
                <Typography variant="h6">Partners</Typography>
                <Divider variant="inset" className={classes.rootb} />
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Grid item xs={2}>
                    <Avatar>
                      <img src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6} className={classes.rootb}>
                    <Typography>Becomes a partner</Typography>
                    <Typography variant="body2">Contact us</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Main;
