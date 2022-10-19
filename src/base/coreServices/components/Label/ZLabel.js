import { Typography } from "@mui/material";

const ZLabel = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default ZLabel;
