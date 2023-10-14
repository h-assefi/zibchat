import Tooltip from "@mui/material/Tooltip";
const ZToolTip = ({ children, title, ...rest }) => {
  return (
    <Tooltip title={title} {...rest}>
      <span>{children}</span>
    </Tooltip>
  );
};
export default ZToolTip;
