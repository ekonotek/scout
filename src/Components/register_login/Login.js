import React, { Component } from "react";
import { AUTH_TOKEN } from "../error/constants";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import SnackBarCustom from "../error/SnackBarCustom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  paperIn: {
    padding: "20px",
  },
  paperOut: {
    margin: "10px",
    width: "50%",
  },
});

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paperOut}>
        <Paper className={classes.paperIn}>
          <h4 className="mv3">Login</h4>
          <div className="flex flex-column">
            <TextField
              id="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="text"
              label="Your email address"
            />
            <TextField
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              label="Password"
            />
          </div>
          <div className="flex mt3">
            <Button id="ok" variant="contained" onClick={() => this._confirm()}>
              Ok
            </Button>
            <Button
              id="signup"
              variant="text"
              onClick={() => this.props.history.push("/signup")}
            >
              signup
            </Button>
            <Button
              variant="text"
              onClick={() => this.props.history.push("/forgetPassword")}
            >
              Forget Password
            </Button>
          </div>
          <SnackBarCustom
            ref={(instance) => {
              this.child = instance;
            }}
          />
        </Paper>
      </div>
    );
  }

  _confirm = async () => {
    const { email, password } = this.state;

    await this.props
      .loginMutation({
        variables: {
          email,
          password,
        },
      })
      .then((result) => {
        const { token, user } = result.data.login;
        this._saveUserData(token, user);
        // this.props.history.push(`/`)
        // window.location.reload()
      })
      .catch((e) => {
        const lerror = e.graphQLErrors ? e.graphQLErrors[0].message : e;
        console.log(lerror);
        // this.child._openSnackBar(lerror);
      });
  };

  _saveUserData = (token, user) => {
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem("userToken", JSON.stringify(user));
    this.props.client.resetStore().then(() => {
      this.props.history.push(`/`);
    });
  };
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        first_name
        last_name
        role
        myGalleries {
          name
        }
        myAgencies {
          name
          gallery {
            name
          }
          division {
            name
            gender
            minAge
            maxAge
          }
        }
      }
    }
  }
`;

export default compose(
  withStyles(styles, { withTheme: true }),
  withApollo,
  graphql(LOGIN_MUTATION, { name: "loginMutation" })
)(Login);
