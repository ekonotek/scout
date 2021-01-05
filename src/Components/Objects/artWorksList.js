import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  Paper,
  Slider,
  Typography,
} from "@material-ui/core";
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

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 320,
    label: "320",
  },
  {
    value: 526,
    label: "526",
  },
  {
    value: 1052,
    label: "1052",
  },
];

const useStyles = makeStyles((theme) => ({
  crop: {
    // width: "100%",
    // height: "750px",
    overflow: "hidden",
    border: "3px",
    borderBlockColor: "blue",
  },
}));

export default function Derecha(props) {
  const classes = useStyles();

  const [imgWidth, setImgWidth] = useState(320);
  const [cropWidth, setCropWidth] = useState(100);

  function valuetext1(value) {
    setImgWidth(value);
    return `${value}`;
  }

  function valuetext2(value) {
    setCropWidth(value);
    return `${value}`;
  }

  return (
    <React.Fragment>
      <Paper>
        <Typography id="discrete-slider-always" gutterBottom>
          Image Width
        </Typography>
        <Slider
          min={0}
          max={1052}
          // defaultValue={320}
          getAriaValueText={valuetext1}
          aria-labelledby="discrete-slider-always"
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Paper>
      <Paper>
        <Typography id="discrete-slider-always" gutterBottom>
          Crop Width
        </Typography>
        <Slider
          min={0}
          max={1052}
          // defaultValue={320}
          getAriaValueText={valuetext2}
          aria-labelledby="discrete-slider-always"
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Paper>
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
            <div key={i} className={classes.crop} style={{ width: cropWidth }}>
              <img
                src={image.url}
                width={imgWidth}
                // height={image.height}
                // style={{ margin: image.margin }}
              />
            </div>
            // </ListItem>
          ))}
        {/* </List> */}
      </Paper>
    </React.Fragment>
  );
}
