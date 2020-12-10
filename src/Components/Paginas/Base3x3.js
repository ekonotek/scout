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

import Izquierda from "../Objects/izquierda";
import Derecha from "../Objects/derecha";

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
const { page, rowsArry } = props
const col = 1
  return (
    <Box
      id={`row${col}`}
      m={1}
      css={{ width: "33.3%" }}
      justifyContent="center"
    >
      {rowsArry.map( row => {
        return (
          <Box key={row}>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              align="center"
              >
              {`Seccion - ${row}  -  ${col}`}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

const Base3x3 = (props) => {
  const classes = useStyles(useStyles);

const { page } = props

  return (
    <Box
    display="flex"
    flexDirection="row"
    justifyContent="flex-start"
    p={0}
    m={0}
    bgcolor="transparent"
    // color="white"
    sm={12}
    >
      <pre>-{ JSON.stringify( page, null, 2)}-</pre>
      { [1,2,3].map( col => {
        return <ColBox key={col} col={col} rowsArry={getRowsAndCols(page,col)} />;
      })
      }
    </Box>
  );
};

const getRowsAndCols = (page,col) => {

const ret = [[1],[1],[]]  //this is page 1 = Home

return ret[col]
}

export default Base3x3;
