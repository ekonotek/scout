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

export default function RoleListItem(props) {
  const { 
    // classes, 
    member } = props;
  const urlFile = "https://zl3yo.csb.app" + "/images/account.svg";
  
  return (
    <ListItem alignItems="flex-start" >
    <Box>

      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={urlFile} />
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
