import React from "react";
import { Box, Button, Paper } from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import memberRoles from "../../Data/memberRoles";
import OpenFreeAccount from "./openFreeAccount";
import RoleList from "./roleList";

export default function Derecha(props) {
  return (
    <Paper>
      <RoleList memberRoles={memberRoles} />
      <Box align="center">
        <hr />
        <Button size="small" variant="contained" color="secondary">
          Membership Details
        </Button>
        <hr />
      </Box>
      <OpenFreeAccount />
    </Paper>
  );
}
