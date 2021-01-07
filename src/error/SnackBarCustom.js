import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import WarningIcon from '@material-ui/icons/Warning';
// import ErrorIcon from '@material-ui/icons/Error';
// import InfoIcon from '@material-ui/icons/Info';
// import CloseIcon from '@material-ui/icons/Close';
// import green from '@material-ui/core/colors/green';
// import amber from '@material-ui/core/colors/amber';

// import { withStyles } from '@material-ui/core/styles';

// const variantIcon = {
//   success: CheckCircleIcon,
//   warning: WarningIcon,
//   error: ErrorIcon,
//   info: InfoIcon,
// };

// const styles1 = theme => ({
//   success: {
//     backgroundColor: green[600],
//   },
//   error: {
//     backgroundColor: theme.palette.error.dark,
//   },
//   info: {
//     backgroundColor: theme.palette.primary.dark,
//   },
//   warning: {
//     backgroundColor: amber[700],
//   },
//   icon: {
//     fontSize: 20,
//   },
//   iconVariant: {
//     opacity: 0.9,
//     marginRight: theme.spacing(1),
//   },
//   message: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   close: {
//     padding: theme.spacing(1) / 2,
//   },
// });

class SnackBarCustom extends Component {
  state = {
    messageSnackBar: '',
    openSnackBar: false
  }

  _openSnackBar(messageSnackBar){
    this.setState({
      messageSnackBar: messageSnackBar,
      openSnackBar: true
    })
  }

  handleClose = (event, reason) => {
     if (reason === 'clickaway') {
       return
     }
     this.setState({ openSnackBar: false })
   }

  render() {
    // const { classes } = this.props 
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          variant={this.props.variant}
          open={this.state.openSnackBar}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span>{this.state.messageSnackBar}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              // className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    </div>
    )
  }
}

// export default withStyles( styles1, { withTheme: true})(SnackBarCustom)
export default SnackBarCustom
