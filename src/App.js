import React from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom'
// import logo from "./logo.svg";
// import "./App.css";
// import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//import { makeStyles } from "@material-ui/core/styles";
import {
  //AppBar,
  //Badge,
  Box,
  //List,
  //Toolbar,
  Typography
  //Button,
  //IconButton
} from "@material-ui/core";
//import MenuIcon from "@material-ui/icons/Menu";

import Appbar from "./Components/appbar";
import Home from './Components/paginas/Home'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

function App() {
  //const classes = useStyles(useStyles);
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
          <Appbar />
        </Typography>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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
          <Box sm={12} p={1} mt={0} style={{ width: "100%" }} bgcolor="#ef744c">
            <Typography variant="h3" display="block" gutterBottom>
              Primer Seccion
            </Typography>
          </Box>
          <Box p={1} mt={0} style={{ width: "100%" }} bgcolor="#cf5636">
            <Typography variant="caption" display="block" gutterBottom>
              Segunda Seccion
            </Typography>
            <Link to="/">Home</Link>              <Link to="/about">About</Link>
            <Link to="/users">Users</Link>

          </Box>
          <Box p={1} mt={"3px"} style={{ width: "100%" }} bgcolor="#4f4947">
            <Typography variant="caption" display="block" gutterBottom>
              Tercer Seccion
            </Typography>
          </Box>
        </Box>
      </Container>
    </Router>
  );
}
// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
