import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    fontSize: "80px",
    width: "auto",
    height: "auto",
  },
}));

export default function MyWork(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <pre>==={JSON.stringify(props, null, 2)}===</pre>
      <Avatar className={classes.avatar} alt={props.alto} src={props.srce} />
    </div>
  );
}
