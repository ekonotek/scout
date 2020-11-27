import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import logo from "./logo.svg";
// import "./App.css";
// import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import "typeface-roboto";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { Box, MenuList, MenuItem, Typography } from "@material-ui/core";

import Home from "./Components/Paginas/Home";
import Appbar from "./Components/Objects/appbar";
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

// const defaultTheme = createMuiTheme({
//   cursor: {
//     cursor: "pointer",
//   },
//   typography: {
//     useNextVariants: true,
//   },
//   spacing: 4,
// });

// const purpleTheme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//   },
//   typography: {
//     useNextVariants: true,
//   },
// });

// const fontTheme = createMuiTheme({
//   palette: {
//     secondary: purple,
//     primary: green,
//   },
//   typography: {
//     fontFamily: ["Courier", "Helvetica"],
//     useNextVariants: true,
//   },
// });

const artScoutTheme = createMuiTheme({
  palette: {
    secondary: purple,
    primary: green
  },
  typography: {
    fontFamily: ["Courier", "Helvetica"],
    useNextVariants: true
  }
});

function App() {
  const classes = useStyles(useStyles);
  return (
    // <div className="App">
    //   <header className="App-header">ART SCOUTERS</header>

    //   <footer>ABOUT | EVENTS</footer>
    // </div>
    <MuiThemeProvider theme={artScoutTheme}>
      <Router>
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            // style={{ backgroundColor: "#f7f7f7", height: "100vh" }}
            style={{ backgroundColor: "#e1e2e1", height: "10vh" }}
          >
            <Appbar />
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
            <Box
              sm={12}
              p={1}
              mt={0}
              style={{ width: "100%" }}
              bgcolor="#ef744c"
            >
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
    </MuiThemeProvider>
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
