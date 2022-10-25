import { Typography } from "@mui/material";

const ZText = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default ZText;
