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
import memberRoles from '../Data/memberRoles'
import RoleList from './roleList'
export default function RoleListItem(props) {

return(
<Box container>
{/* <pre>memberRoles: {JSON.stringify(memberRoles,null,2)}</pre> */}

{/* <Box> */}
<RoleList memberRoles={memberRoles} />
{/* </Box> */}
<Box align="center" >
  <Button size="small" variant="contained" 
          color="secondary" >
            Membership Details
  </Button>

</Box>

</Box>

)

}