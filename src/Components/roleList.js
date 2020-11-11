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
import RoleListItem from './roleListItem'

export default function RoleList(props) {

  const { memberRoles } = props

return(
  // <pre> ListItem-List memberRoles: {JSON.stringify(memberRoles,null,2)}</pre>
<Box border={1}>
      <Typography variant="h6" align="center">
          Create Your Profile
      </Typography>
  
        <List 
              // display="flex" 
              // flexWrap="wrap" 
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