import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Box,
  List,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import MyComponent from "./MyComponent"; //For now all of our components will load there.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ColBox = (props) => {
  const { page, col } = props;
  return col.map((row, i) => {
    const TagName = row.components[0]; //We need to code to be able to include more than one component
    if (row.width === "") {
      return false;
    } else {
      return (
        <Box key={i} css={{ width: row.width }} border={1} borderColor="green">
          {/* <Typography
            variant="body2"
            display="block"
            gutterBottom
            align="center"
          >
            {`Seccion - ${JSON.stringify(row, null, 2)}  - ${TagName.slice(
              0,
              3
            )}`}
          </Typography> */}
          <MyComponent tag={TagName.slice(0, 3)} />
        </Box>
      );
    }
  });
};

const Base3x3 = (props) => {
  const classes = useStyles(useStyles);

  const { page } = props;

  const colsArry = page.TagsArry.map((row) => {
    if (row[0].width !== "" || row[1].width !== "" || row[2].width !== "")
      return row;
    else return [];
  });
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      p={1}
      m={0}
      bgcolor="transparent"
      // color="white"
      sm={12}
      border={1}
      borderColor="red"
    >
      {/* <pre>=={JSON.stringify(colsArry, null, 2)}==</pre> */}
      {/* { [1, 2, 3].map((col) => {
        const rowsArray = getRowsAndCols(page, col);
      })} */}
      {colsArry
        .filter((r) => {
          return r.length > 0;
        })
        .map((col) => {
          // return JSON.stringify(col, null, 2);
          return <ColBox key={col} col={col} />;
        })}
    </Box>
  );
};

export default Base3x3;
