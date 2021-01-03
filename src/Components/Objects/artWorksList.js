import React from "react";
import { Box, Button, List, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const imgArray = {
  data: [
    {
      url: "https://loremflickr.com/320/240?random=1",
      height: "240px",
      width: "320px",
      margin: "-75px 0 0 0px",
    },
    //   {
    //     url: "https://loremflickr.com/320/240?random=2",
    //     width: "240",
    //     height: "320",
    //     margin: "-75px 0 0 -100px",
    //   },
    //   {
    //     url: "https://loremflickr.com/320/240?random=3",
    //     width: "240",
    //     height: "320",
    //     margin: "-75px 0 0 -100px",
    //   },
  ],
};

const useStyles = makeStyles((theme) => ({
  crop: {
    width: "100%",
    height: "750px",
    overflow: "hidden",
    border: "3px",
    borderBlockColor: "blue",
  },
}));

export default function Derecha(props) {
  const classes = useStyles();
  return (
    <Paper>
      {/* <List
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "wrap",
        }} 

        // flexDirection="row"
        // flexWrap={true}
        // justifyContent="flex-start"
      > */}
      {imgArray &&
        imgArray.data.map((image, i) => (
          // <ListItem key={i} className={classes.crop}>
          <div key={i} className={classes.crop}>
            <img
              src={image.url}
              // width={image.width}
              // height={image.height}
              // style={{ margin: image.margin }}
            />
          </div>
          // </ListItem>
        ))}
      {/* </List> */}
    </Paper>
  );
}
