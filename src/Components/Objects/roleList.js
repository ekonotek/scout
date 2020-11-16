import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import { makeStyles } from "@material-ui/core/styles";

import RoleListItem from './roleListItem'

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  }
})) 

export default function RoleList(props) {
  const classes = useStyles();

  const { memberRoles } = props

return(
  // <pre> ListItem-List memberRoles: {JSON.stringify(memberRoles,null,2)}</pre>
<Box>
      <Typography variant="h6" align="center">
          Create Your Profile
      </Typography>
  
      <List style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", overflow: "wrap" }}
  
  // flexDirection="row"
            // flexWrap={true} 
            // justifyContent="flex-start"
      >
        {memberRoles &&
          memberRoles.data.map((member, i) => (
            
            // <pre>{member.role}</pre>
            <RoleListItem
            // classes={classes}
            key={i}
            member={member}
            />
            ))
          }
      </List>
</Box>
      )
}