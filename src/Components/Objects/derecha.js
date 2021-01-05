import React, { useCallback, useState } from "react";
import { Box, Button, Paper } from "@material-ui/core";
// import ImageTemplate from "../nav/ImageTemplate";
import memberRoles from "../../Data/memberRoles";
import OpenFreeAccount from "./openFreeAccount";
import RoleList from "./roleList";
import DialogSelector from "../register_login/DialogSelector";

export default function Derecha(props) {
  const [dialogOpen, setDialogOpen] = useState(null);

  const openLoginDialog = useCallback(() => {
    // console.log("opening Login");
    setDialogOpen("login");
  }, [setDialogOpen]);

  const closeDialog = useCallback(() => {
    setDialogOpen(null);
  }, [setDialogOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
  }, [setDialogOpen]);

  return (
    <Paper>
      <DialogSelector
        openLoginDialog={openLoginDialog}
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        // openTermsDialog={openTermsDialog}
        openRegisterDialog={openRegisterDialog}
        // openChangePasswordDialog={openChangePasswordDialog}
      />

      <RoleList memberRoles={memberRoles} />
      <Box align="center">
        <hr />
        <Button size="small" variant="contained" color="secondary">
          Membership Details
        </Button>
        <hr />
      </Box>
      <OpenFreeAccount
        openLoginDialog={openLoginDialog}
        openRegisterDialog={openRegisterDialog}
      />
    </Paper>
  );
}
