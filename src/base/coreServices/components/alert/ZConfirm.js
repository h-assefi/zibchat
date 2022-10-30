import swal from "sweetalert2";

export const showConfirm = (title, text, option, confirmText, cancelText) => {
  if (!option) option = {};

  const tempOption = {
    title: title ? title : "پرسش ؟",
    text: text ? text : "آیا مطمئن هستید ؟",
    icon: option.icon ? option.icon : "question",
    showCancelButton: true,
    focusConfirm: true,
    confirmButtonText: confirmText ? confirmText : "بله",
    cancelButtonText: cancelText ? cancelText : "خیر",
  };

  if (tempOption.icon) {
    if (
      tempOption.icon.toLowerCase() === "error" ||
      tempOption.icon.toLowerCase() === "warning"
    )
      tempOption.dangerMode = option.dangerMode ? option.dangerMode : true;
  } else tempOption.dangerMode = true;

  return swal.fire(tempOption);
};
