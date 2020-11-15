import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import logo from "./logo.svg";
// import "./App.css";
// import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  // Badge,
  Box,
  // List,
MenuList,
MenuItem,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Home from './Components/Paginas/Home'

const useStyles = makeStyles( (theme) => ({
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

function App() {
  const classes = useStyles(useStyles);
  return (
    // <div className="App">
    //   <header className="App-header">ART SCOUTERS</header>

    //   <footer>ABOUT | EVENTS</footer>
    // </div>
    <Router>
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
        <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
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
          <MenuList style={{ display: "flex" }}>
              <MenuItem component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem component={Link} to="/about">
                About
              </MenuItem>
              <MenuItem component={Link} to="/dashboard">
                Dashboard
              </MenuItem>
            </MenuList>
          </Box>
        </Box>
      </Container>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default App;
