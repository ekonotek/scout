import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "typeface-roboto";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";

import {
  AppBar,
  // Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListIcon from "@material-ui/icons/List";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: fade(theme.palette.common.white, 0.95),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(100),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SearchAppbarr(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      // flexDirection="row"
      flexDirection="column"
      p={0}
      m={0}
      bgcolor="white"
      // color="white"
      sm={12}
    >
      {/* position="fixed" */}
      <AppBar
        position="static"
        style={{ backgroundColor: "#cf5636" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Art Scouters
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["List", "Trash", "Spam"].map((text, index) => (
            // <ListItem button key={text}>
            //   <ListItemText primary={text} />
            // </ListItem>
            <ListItemLink
              key={index}
              href={index % 2 === 0 ? "/viewArt_2" : "#"}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <ListIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemLink>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
        <div>
          <Box sm={12} p={1} mt={0} style={{ width: "100%" }} bgcolor="#ef744c">
            <Typography variant="h3" display="block" gutterBottom>
              Footer 1
            </Typography>
          </Box>
          <Box p={1} mt={0} style={{ width: "100%" }} bgcolor="#cf5636">
            <Typography variant="caption" display="block" gutterBottom>
              Footer 2
            </Typography>
          </Box>
          <Box p={1} mt={"3px"} style={{ width: "100%" }} bgcolor="#4f4947">
            <MenuList style={{ display: "flex" }}>
              <MenuItem component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem component={Link} to="test">
                Test
              </MenuItem>
              <MenuItem component={Link} to="/about">
                About
              </MenuItem>
              <MenuItem component={Link} to="/dashboard">
                Dashboard
              </MenuItem>
            </MenuList>
          </Box>
        </div>
      </main>
    </Box>
  );
}
