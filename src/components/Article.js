import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardContent } from "@material-ui/core";

const Article = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <img
            style={{ width: "160px", height: "120px" }}
            src="https://cdn.pixabay.com/photo/2016/07/27/01/27/basketball-1544366_960_720.jpg"
          />
        </Grid>
        <Grid item xs={10}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                NBA Execs Tell Us Why Trade Machines Might Be More Fun Than Real
                Life
              </Typography>
              <Typography>
                We talked to a current and former NBA general manager about the
                proliferation of trade machines and why they're way more fun
                than making a real life deal. Including the story of
                TradeNBA.com and their trade machine.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Article;
