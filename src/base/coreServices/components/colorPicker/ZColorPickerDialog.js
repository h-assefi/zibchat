import * as React from "react";
import ZButton, { ZButtonVariant } from "../button/ZButton";
import ZSpacer from "../container/ZSpacer";
import ZDialog from "../dialog/ZDialog";
import ZIcon, { ZIcons } from "../icon/ZIcon";
import ZColorPicker from "./ZColorPicker";

const ZColorPickerDialog = ({ title, defaultColor, onClose }) => {
  const [pickedColor, setPickedColor] = React.useState(defaultColor);

  const handleChangeComplete = (color) => {
    setPickedColor(color);
  };

  return (
    <ZDialog
      title={title ?? "انتخاب رنگ"}
      open={true}
      onClose={() => {
        if (onClose) onClose();
      }}
    >
      <ZColorPicker
        color={pickedColor}
        onChangeComplete={handleChangeComplete}
      />
      <ZSpacer />

      <ZButton
        variant={ZButtonVariant.contained}
        onClick={() => {
          onClose(pickedColor);
        }}
      >
        انتخاب
        <ZIcon icon={ZIcons.check}></ZIcon>
      </ZButton>
    </ZDialog>
  );
};

export default ZColorPickerDialog;
