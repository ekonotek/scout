import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class NotAuth extends Component {
  render() {
    return (
      <div>
        Not authentificated!
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(NotAuth);
