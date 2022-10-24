import Tooltip from "@mui/material/Tooltip";
const ZToolTip = ({ children, title }) => {
  return <Tooltip title={title}>{children}</Tooltip>;
};
export default ZToolTip;
