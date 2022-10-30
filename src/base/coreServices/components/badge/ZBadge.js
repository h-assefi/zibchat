import { Badge } from "@mui/material";

export const ZBadgeColor = {
  primary: "primary",
  secondary: "secondary",
  default: "default",
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

const ZBadge = ({ badgeContent, children }) => {
  return (
    <Badge color={ZBadgeColor.primary} badgeContent={badgeContent}>
      {children}
    </Badge>
  );
};

export default ZBadge;
