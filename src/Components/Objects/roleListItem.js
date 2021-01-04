import React from "react";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  RaisedButton,
  Typography,
} from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    margin: "auto",
    fontSize: 8,
    padding: 3,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
  shape: {
    backgroundColor: theme.palette.primary.dark,
    width: 80,
    height: 80,
  },
  shapeCircle: {
    borderRadius: "50%",
  },
}));
export default function RoleListItem(props) {
  const classes = useStyles();
  const { member } = props;
  // const urlFile = "http://localhost:3000/images/account.svg";
  const urlFile =
    window.location.protocol +
    "//" +
    window.location.host +
    "/images/account.svg";

  const rectangle = <div className={classes.shape} />;
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  return (
    <ListItem
      style={{ display: "inline-block", width: "50%", textAlign: "center" }}
    >
      <Box>
        <ListItemAvatar>
          <Avatar className={classes.large} alt="Remy Sharp" src={urlFile} />
        </ListItemAvatar>
        {/* {circle} */}
        <ListItemText
          // disableTypography={true}
          primary={member.role}
          // secondary={}
        />
        <Button
          className={classes.small}
          variant="contained"
          onClick={() => alert(`you clicked: ${member.role}`)}
          color="secondary"
        >
          Learn More
        </Button>
      </Box>
    </ListItem>
  );
}
