import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/djcqmdgda/image/upload/f_auto,o_40/h_60,l_teams:logos:primary:9/fl_layer_apply,g_north_west,o_80,x_16/h_60,l_teams:logos:primary:5/fl_layer_apply,g_north_west,o_80,x_120/h_60,l_teams:logos:primary:21/fl_layer_apply,g_north_east,o_80,x_120/h_60,l_teams:logos:primary:25/fl_layer_apply,g_north_east,o_80,x_16/e_trim,l_players:silos:201937/c_thumb,co_rgb:006BB690,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_west/e_trim,l_players:silos:200768/c_thumb,co_rgb:00000090,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_west,x_102/e_trim,l_players:silos:2546/c_thumb,co_rgb:00000090,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_east/e_trim,l_players:silos:201567/c_thumb,co_rgb:EF3B2490,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_east,x_102/co_rgb:C8102E,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_94/co_rgb:CE1141,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_196/co_rgb:007AC1,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_298/co_rgb:C8102E,e_colorize,g_west,h_200,u_machine:background_white,w_94,x_0/co_rgb:CE1141,e_colorize,g_west,h_200,u_machine:background_white,w_94,x_102/co_rgb:007AC1,e_colorize,g_east,h_200,u_machine:background_white,w_94,x_102/co_rgb:E03A3E,e_colorize,g_east,h_200,u_machine:background_white,w_94,x_0/v1/machine/background_pixels"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Popular Trades
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Popular creation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
