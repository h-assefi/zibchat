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

export const ZBadgeVariant = {
  dot: "dot",
  standard: "standard",
};

const ZBadge = ({
  badgeContent,
  children,
  color,
  horizontal = "left",
  overlap,
  variant = ZBadgeVariant.standard,
  vertical = "top",
}) => {
  return (
    <Badge
      color={color ?? ZBadgeColor.primary}
      variant={variant}
      badgeContent={badgeContent}
      overlap={overlap}
      anchorOrigin={{
        vertical: vertical,
        horizontal: horizontal,
      }}
    >
      {children}
    </Badge>
  );
};

export default ZBadge;
