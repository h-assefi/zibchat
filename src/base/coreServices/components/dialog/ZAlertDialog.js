import PropTypes from "prop-types";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import ZButton from "../button/ZButton";

const ZAlertDialog = ({ actions, message, open, onClose, title }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map((action) => {
          return (
            <ZButton onClick={action.onClick}>{action.title ?? ""}</ZButton>
          );
        })}
      </DialogActions>
    </Dialog>
  );
};

ZAlertDialog.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ZAlertDialog;
