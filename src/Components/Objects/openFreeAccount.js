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

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  }
})) 

export default function OpenFreeAccount(props) {
  const classes = useStyles();

  const { memberRoles } = props

return(
  // <pre> ListItem-List memberRoles: {JSON.stringify(memberRoles,null,2)}</pre>
<Box>
      <Typography variant="h6" align="center">
          Open a Free Account
      </Typography>
  

</Box>
      )
}