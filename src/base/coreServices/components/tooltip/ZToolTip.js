import Tooltip from "@mui/material/Tooltip";
const ZToolTip = ({ children, title, ...rest }) => {
  return (
    <Tooltip title={title} {...rest}>
      {children}
    </Tooltip>
  );
};
export default ZToolTip;
