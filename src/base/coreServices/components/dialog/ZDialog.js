import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ZIconButton from "../button/ZIconButton";
import ZIcon, { ZIcons } from "../icon/ZIcon";

const ZDialog = ({
  children,
  closeIcon,
  dir = "rtl",
  dividers,
  open,
  onClose,
  title,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && (
        <DialogTitle dir={dir}>
          {onClose && closeIcon ? (
            <ZIconButton
              ariaLabel="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <ZIcon icon={ZIcons.close} />
            </ZIconButton>
          ) : null}
          {title}
        </DialogTitle>
      )}
      <DialogContent dividers={dividers}>{children}</DialogContent>
    </Dialog>
  );
};

export default ZDialog;

ZDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};
