export const ZDividerOrientation = {
  horizintal: "horizintal",
  vertical: "vertical",
};
const ZDivider = ({ orientation = "horizontal" }) => {
  return (
    <div
      style={{
        height: orientation === "horizontal" ? 2 : "100%",
        width: orientation === "horizontal" ? "100%" : 2,
      }}
      className="border-bottom"
    ></div>
  );
};

export default ZDivider;
