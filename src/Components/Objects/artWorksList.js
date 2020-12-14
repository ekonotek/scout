import React from "react";
import { Box, Button, List, ListItem, Paper } from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import memberRoles from "../../Data/memberRoles";

export default function Derecha(props) {
  return (
    <Paper>
      <List
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "wrap",
        }}

        // flexDirection="row"
        // flexWrap={true}
        // justifyContent="flex-start"
      >
        {memberRoles &&
          memberRoles.data.map((member, i) => (
            <ListItem key={i}>
              <pre>{member.role}</pre>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}
