import React, { useState, useCallback, Fragment } from "react";
import PropTypes from "prop-types";
import RegisterDialog from "./RegisterDialog";
import LoginDialog from "./LoginDialog";
import ModalBackdrop from "./ModalBackdrop";

function DialogSelector(props) {
  const { dialogOpen, openRegisterDialog, openLoginDialog, onClose } = props;
  const [loginStatus, setLoginStatus] = useState(null);
  const [registerStatus, setRegisterStatus] = useState(null);

  const _onClose = useCallback(() => {
    setLoginStatus(null);
    setRegisterStatus(null);
    onClose();
  }, [onClose, setLoginStatus, setRegisterStatus]);

  const printDialog = useCallback(() => {
    switch (dialogOpen) {
      case "register":
        return (
          <RegisterDialog
            onClose={_onClose}
            // openTermsDialog={openTermsDialog}
            status={registerStatus}
            setStatus={setRegisterStatus}
          />
        );
      case "login":
        return (
          <LoginDialog
            onClose={_onClose}
            status={loginStatus}
            setStatus={setLoginStatus}
            // openChangePasswordDialog={openChangePasswordDialog}
          />
        );
      default:
    }
  }, [
    dialogOpen,
    openLoginDialog,
    openRegisterDialog,
    _onClose,
    loginStatus,
    registerStatus,
    setLoginStatus,
    setRegisterStatus,
  ]);

  return (
    <Fragment>
      {dialogOpen && <ModalBackdrop open />}
      {printDialog()}
    </Fragment>
  );
}

DialogSelector.propTypes = {
  dialogOpen: PropTypes.string,
  openLoginDialog: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default DialogSelector;
