import React from "react";

export const ZFormGroup = ({ children, className }) => {
  return <div className={"d-flex flex-column " + className}>{children}</div>;
};
