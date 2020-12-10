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

const getRowsAndCols = (page,col) => {

const ret = [['65%'],['35%'],[]]  //this is page 1 = Home

return ret[col-1]
// return col
}

const ColBox = (props) => {
const { page, col, rowsArry } = props
// const col = 1
  return (
    // <Box
    //   id={`row${col}`}
    //   m={1}
    //   css={{ width: 'auto' }}
    //   justifyContent="center"
    //   border={1}
    //   borderColor="blue"
    //   >
      rowsArry.map( row => {
        return (
          <Box key={row} css={{ width: row }} border={1}
            borderColor="green">
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              align="center"
              >
              {`Seccion - ${JSON.stringify(rowsArry,null,2)}  -  ${col}`}

            </Typography>
          </Box>
        );
      })
    // </Box>
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
    p={1}
    m={0}
    bgcolor="transparent"
    // color="white"
    sm={12}
    border={1}
    borderColor="red"

    >
      { [1,2,3].map( col => {
        
        const rowsArray=getRowsAndCols(page,col)
        return( 

          <ColBox key={col} col={col} rowsArry={rowsArray} />

        )
        })
      }
    </Box>
  );
};


export default Base3x3;
