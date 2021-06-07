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

const BigCard = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item className={classes.rootp} xs={8}>
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
    </Container>
  );
};
export default BigCard;
