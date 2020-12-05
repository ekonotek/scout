import React from "react";
import { Route } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Box,
  List,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";

import Base3x3 from "../Paginas/Base3x3";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


const Routes = () => {
  const classes = useStyles(useStyles);
  return (
    <React.Fragment>
      <Route exact path="/test">
        <Base3x3 />
      </Route>
    </React.Fragment>
  )

}

export default Routes