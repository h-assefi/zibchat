import { Typography } from "@mui/material";

const ZLabel = ({ children, size, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default ZLabel;
