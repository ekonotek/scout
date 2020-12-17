import React from "react";
import { Box, Button, List, ListItem, Paper } from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import memberRoles from "../../Data/memberRoles";

const imgArray = {
  data: [
{url: "https://loremflickr.com/320/240?random=1"},
{url: "https://loremflickr.com/320/240?random=2"},
{url: "https://loremflickr.com/320/240?random=3"},
]}

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
        {imgArray &&
          imgArray.data.map(( image, i) => (
            <ListItem key={i}>
              <img src={image.url} />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}
