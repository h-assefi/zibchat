import { toast } from "react-toastify";

export const ZToastPosition = {
  BottomRight: "BOTTOM_RIGHT",
};

export const ZToastType = {
  Success: "success",
  Info: "info",
  Error: "error",
};

export const showToast = (text, config) => {
  if (config) {
    let tempConfig = {
      position:
        toast.POSITION[
          config.position ? config.position.toUpperCase() : "BOTTOM_RIGHT"
        ],
      autoClose: config.autoClose ? config.autoClose : 7000,
      pauseOnFocusLoss: config.pauseOnFocusLoss
        ? config.pauseOnFocusLoss
        : true,
      toastId: config.toastId,
      delay: config.delay ? config.delay : 0,
      draggable: config.draggable ? config.draggable : true,
      draggablePercent: config.draggablePercent ? config.draggablePercent : 60,
      rtl: config.rtl ? config.rtl : true,
      role: config.role,
      type: toast.TYPE[config.type ? config.type.toUpperCase() : "INFO"],
      hideProgressBar: config.hideProgressBar ? config.hideProgressBar : false,
      theme: "dark",
      style: { fontFamily: "Farhang", ...config.style },
    };
    toast(text, tempConfig);
  } else toast(text);
};
