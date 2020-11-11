import React from "react";
import {
  Avatar,
  Button,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";

export default function RoleListItem(props) {
  const { 
    // classes, 
    member } = props;
  const urlFile =
    window.location.protocol +
    "//" +
    window.location.host +
    "/public/images/account.svg";
  
  return (
  <React.Fragment>

    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={urlFile} />
      </ListItemAvatar>
      <ListItemText
        disableTypography={true}
        primary={member.role}
        // secondary={}
        />
      <Button size="small" variant="contained" color="secondary" >Learn More</Button>
    </ListItem>
  </React.Fragment>
  );
}
