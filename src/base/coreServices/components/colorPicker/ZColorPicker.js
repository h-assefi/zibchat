import { SketchPicker } from "react-color";

const ZColorPicker = ({ color, onChangeComplete }) => {
  return <SketchPicker onChangeComplete={onChangeComplete} color={color} />;
};

export default ZColorPicker;
