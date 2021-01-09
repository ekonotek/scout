import React, {Component} from 'react'

class Loading extends Component {
    render() {
    return (
        <div>Loading..{this.props.children}</div>
    )
  }
}

export default Loading
