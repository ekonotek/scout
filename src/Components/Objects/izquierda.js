import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345
  },
});

export default function Izquierda() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          ART SCOUTERS
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          component="iframe"
          title="VideoArtist"
          height="250"
          src="https://www.youtube.com/embed/ekogiCpNyFk"
        />
      </CardActionArea>
      <CardActions disablespacing="true">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardContent disablespacing="true">
        <Typography variant="body2" color="textSecondary" component="p">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis pratium voluptatum deleniti atque corrupti quos dolores et
          quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere. At vero
          eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          pratium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere.
        </Typography>
      </CardContent>
    </Card>
  );
}
