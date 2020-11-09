import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
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
import MenuIcon from "@material-ui/icons/Menu";

import Derecha from './Components/derecha'
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

function App() {
  const classes = useStyles(useStyles);
  return (
    // <div className="App">
    //   <header className="App-header">ART SCOUTERS</header>

    //   <footer>ABOUT | EVENTS</footer>
    // </div>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          // style={{ backgroundColor: "#f7f7f7", height: "100vh" }}
          style={{ backgroundColor: "#e1e2e1", height: "10vh" }}
        >
          <AppBar position="static" style={{ backgroundColor: "#cf5636" }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                ART SCOUTERS
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Typography>
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
            sm={6}
            p={1}
            mt={0}
            style={{ width: "100%", minHeight: "40rem" }}
            bgcolor="transparent"
            border={1}
            borderColor="green"
          >
            <Typography variant="h3" display="block" gutterBottom>
              Seccion Izq
            </Typography>
          </Box>
          <Box
            sm={6}
            p={1}
            mt={0}
            style={{ width: "100%" }}
            bgcolor="transparent"
            border={1}
            borderColor="green"
          >
            <Derecha />
          </Box>
        </Box>
        <Box
          display="flex"
          // flexDirection="row"
          flexDirection="column"
          p={0}
          m={0}
          bgcolor="white"
          color="white"
          sm={12}
        >
          <Box sm={12} p={1} mt={0} style={{ width: "100%" }} bgcolor="#ef744c">
            <Typography variant="h3" display="block" gutterBottom>
              Primer Seccion
            </Typography>
          </Box>
          <Box p={1} mt={0} style={{ width: "100%" }} bgcolor="#cf5636">
            <Typography variant="caption" display="block" gutterBottom>
              Segunda Seccion
            </Typography>
          </Box>
          <Box p={1} mt={"3px"} style={{ width: "100%" }} bgcolor="#4f4947">
            <Typography variant="caption" display="block" gutterBottom>
              Tercer Seccion
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
