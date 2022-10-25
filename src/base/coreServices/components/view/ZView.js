import { Box } from "@mui/material";

// export const ZViewFlexDirection = {
//   column: "column",
//   row: "row",
//   columnReverse: "column-reverse",
//   rowReverse: "row-reverse",
//   revert: "revert",
//   revertLayer: "revert-layer",
//   initial: "initial",
//   inherit: "inherit",
//   unset: "unset",
// };
const ZView = ({ children, className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default ZView;
