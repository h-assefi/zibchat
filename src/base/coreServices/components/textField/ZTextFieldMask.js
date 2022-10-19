import * as React from "react";
import { IMaskInput } from "react-imask";

const ZTextFieldMask = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={props.mask}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default ZTextFieldMask;
