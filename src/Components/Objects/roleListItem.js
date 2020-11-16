import React from "react";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: "auto"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto"
  },
}));
export default function RoleListItem(props) {
  const classes = useStyles() 
    const { 
    member } = props;
  const urlFile = "https://zl3yo.csb.app" + "/images/account.svg";
  
  return (
    <ListItem  style={{ display: "inline-block", width: "50%", textAlign: "center" }} >
    <Box>

      <ListItemAvatar>
        <Avatar  className={classes.large} alt="Remy Sharp" src={urlFile} />
      </ListItemAvatar>
      <ListItemText
        // disableTypography={true}
        primary={member.role}
        // secondary={}
        />
      <Button size="small" variant="contained" 
              onClick={ () => alert(`you clicked: ${member.role}`)} color="secondary" >Learn More</Button>
    </Box>
    </ListItem>
  );
}
