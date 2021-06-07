import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Card, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} alignContent="center" justify="center">
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="Travis Howard"
          src="https://lh3.googleusercontent.com/a-/AOh14GirPqACFDMD2mjKYt9sFWc6kBBxxWYGVcZvtp-7=s96-c"
        />
      </Grid>
    </Grid>
  );
}
