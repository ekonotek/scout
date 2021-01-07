import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {Link} from 'react-router-dom'

const styles = theme => ({
  paperIn: {
    padding: '20px'
  },
  paperOut: {
    margin: '10px'

  }
})

class NotFound extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={ classes.paperOut }>
        <Paper className={ classes.paperIn }>
          404 Error !!
          <br/>
          <br/>
          <Link to='/'>Home</Link>
        </Paper>
      </div>
    )
  }
}

export default withRouter(withStyles(styles, {withTheme: true})(NotFound))
