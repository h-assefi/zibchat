import { Avatar } from "@mui/material";

export const ZAvatarVariant = {
  circular: "circular",
  rounded: "rounded",
  square: "square",
};

const ZAvatar = ({
  alt,
  src,
  variant = ZAvatarVariant.circular,
  width,
  height,
  ...rest
}) => {
  return (
    <Avatar
      alt={alt}
      src={src}
      variant={variant}
      sx={{ width: width, height: height }}
      {...rest}
    ></Avatar>
  );
};

export default ZAvatar;
