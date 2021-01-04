import React from "react";
import {
  // Avatar,
  // Box,
  Button,
  Grid,
  // List,
  // ListItem,
  // Divider,
  // ListItemText,
  // ListItemAvatar,
  Paper,
  Typography,
} from "@material-ui/core";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// import ImageTemplate from "../nav/ImageTemplate";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function OpenFreeAccount(props) {
  const classes = useStyles();
  const { openRegisterDialog, openLoginDialog } = props;

  const menuItems = [
    {
      name: "Sign Up",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />,
    },
    {
      name: "Login",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />,
    },
  ];

  return (
    // <pre> ListItem-List memberRoles: {JSON.stringify(memberRoles,null,2)}</pre>
    <Grid container>
      <Typography variant="h6" align="center">
        Open a Free Account
      </Typography>
      <Grid container justify="center" spacing={3}>
        {menuItems.map((value) => (
          <Grid key={value.name} item>
            {/* <Paper className={classes.paper} /> */}
            <Button
              color="secondary"
              size="large"
              onClick={value.onClick}
              classes={{ text: classes.menuButtonText }}
              // key={element.name}
            >
              {value.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
