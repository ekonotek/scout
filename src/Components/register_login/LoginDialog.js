import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

import { AUTH_TOKEN, USER_TOKEN } from "../../error/constants";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import SnackBarCustom from "../../error/SnackBarCustom";

import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "./shared/components/FormDialog";
// import HighlightedInformation from "./shared/components/HighlightedInformation";
import ButtonCircularProgress from "./shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "./shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function LoginDialog(props) {
  const {
    setStatus,
    history,
    classes,
    onClose,
    openChangePasswordDialog,
    status,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loginEmail = useRef();
  const loginPassword = useRef();

  const _confirm = async (email, password) => {
    await props
      .loginMutation({
        variables: {
          email,
          password,
        },
      })
      .then((result) => {
        const { token, user } = result.data.login;
        _saveUserData(token, user);

        return result.data.login;

        // this.props.history.push(`/`)
        // window.location.reload()
      })
      .catch((e) => {
        const lerror = e.graphQLErrors ? e.graphQLErrors[0].message : e;
        console.log(lerror);
        alert(lerror);
        return { error: lerror };
        // this.child._openSnackBar(lerror);
      });
  };

  const _saveUserData = (token, user) => {
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(USER_TOKEN, JSON.stringify(user));
    props.client.resetStore().then(() => {
      alert("done reseting Store of client");
      // this.props.history.push(`/`);
    });
  };

  const login = useCallback(() => {
    setIsLoading(true);
    setStatus(null);

    const result = _confirm(
      loginEmail.current.value,
      loginPassword.current.value
    );

    if (result.error) {
      setTimeout(() => {
        setStatus(result.error);
        setIsLoading(false);
      }, 1500);
    } else {
      setTimeout(() => {
        history.push("/viewArt_2");
      }, 150);
    }
  }, [setIsLoading, loginEmail, loginPassword, history, setStatus]);

  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidEmail"}
              required
              fullWidth
              label="Email Address"
              inputRef={loginEmail}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (status === "invalidEmail") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidEmail" &&
                "This email address isn't associated with an account."
              }
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === "invalidPassword"}
              label="Password"
              inputRef={loginPassword}
              autoComplete="off"
              onChange={() => {
                if (status === "invalidPassword") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidPassword" ? (
                  <span>
                    Incorrect password. Try again, or click on{" "}
                    <b>&quot;Forgot Password?&quot;</b> to reset it.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
              onVisibilityChange={setIsPasswordVisible}
              isVisible={isPasswordVisible}
            />
            <FormControlLabel
              className={classes.formControlLabel}
              control={<Checkbox color="primary" />}
              label={<Typography variant="body1">Remember me</Typography>}
            />
            {/* {status === "verificationEmailSend" ? (
              <HighlightedInformation>
                We have send instructions on how to reset your password to your
                email address
              </HighlightedInformation>
            ) : (
              <HighlightedInformation>
                Email is: <b>test@web.com</b>
                <br />
                Password is: <b>HaRzwc</b>
              </HighlightedInformation>
            )} */}
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={isLoading}
              size="large"
            >
              Login
              {isLoading && <ButtonCircularProgress />}
            </Button>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                isLoading ? classes.disabledText : null
              )}
              color="primary"
              onClick={isLoading ? null : openChangePasswordDialog}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                // For screenreaders listen to space and enter events
                if (
                  (!isLoading && event.keyCode === 13) ||
                  event.keyCode === 32
                ) {
                  openChangePasswordDialog();
                }
              }}
            >
              Forgot Password?
            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

// export default withRouter(withStyles(styles)(LoginDialog));
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
  withRouter,
  withStyles(styles, { withTheme: true }),
  withApollo,
  graphql(LOGIN_MUTATION, { name: "loginMutation" })
)(LoginDialog);
