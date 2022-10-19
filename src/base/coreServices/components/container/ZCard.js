import React from "react";

const ZCard = ({ children }) => {
  return (
    <div
      style={{
        borderWidth: 10,
        borderColor: "black",
        padding: 15,
        borderRadius: 20,
      }}
    >
      {children}
    </div>
  );
};

export default ZCard;
