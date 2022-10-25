export const ZAnimation = {
  variants: {
    open: { opacity: 1, x: 0, display: "initial" },
    closed: {
      opacity: 0,
      x: "100%",
      transitionEnd: {
        display: "none",
      },
    },
  },
};
