import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Box,
  List,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import Izquierda from "../Objects/Izquierda";
import Derecha from "../Objects/Derecha";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles(useStyles);
  return (
    <React.Fragment>
      <Box
        display="flex"
        // flexDirection="row"
        flexDirection="row"
        p={0}
        m={0}
        bgcolor="transparent"
        // color="white"
        sm={12}
      >
        <Box
          sm={8}
          p={1}
          mt={0}
          style={{ width: "65%", minHeight: "40rem" }}
          bgcolor="transparent"
          // border={1}
          // borderColor="green"
        >
          <Izquierda />
          {/* <Typography variant="h3" display="block" gutterBottom>
    Seccion Izq
  </Typography> */}
        </Box>
        <Box
          sm={4}
          p={1}
          mt={0}
          style={{ width: "35%" }}
          bgcolor="transparent"
          // border={1}
          // borderColor="green"
        >
          <Derecha />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
