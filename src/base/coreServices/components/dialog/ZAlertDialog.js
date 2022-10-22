import PropTypes from "prop-types";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import ZButton, { ZButtonVariant } from "../button/ZButton";

const ZAlertDialog = ({
  actions,
  dir = "rtl",
  message,
  open,
  okTitle = "خُب",
  onClose,
  title,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && (
        <DialogTitle dir={dir} fontWeight="bold">
          {title}
        </DialogTitle>
      )}
      <DialogContent>
        <DialogContentText dir={dir}>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions ? (
          actions.map((action) => {
            return (
              <ZButton onClick={action.onClick}>{action.title ?? ""}</ZButton>
            );
          })
        ) : (
          <ZButton variant={ZButtonVariant.contained} onClick={onClose}>
            {okTitle}
          </ZButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

ZAlertDialog.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ZAlertDialog;
