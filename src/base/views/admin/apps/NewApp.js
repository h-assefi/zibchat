import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ZAvatar from "src/base/coreServices/components/avatar/ZAvatar";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZColorPickerDialog from "src/base/coreServices/components/colorPicker/ZColorPickerDialog";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDialog from "src/base/coreServices/components/dialog/ZDialog";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import { ZSnackbarSeverity } from "src/base/coreServices/components/snackbar/ZSnackbar";
import ZTextField from "src/base/coreServices/components/textField/ZTextField";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";

const NewApp = ({ onClose }) => {
  const dispatch = useDispatch();
  const [pickedColor, setPickedColor] = React.useState({
    show: false,
    hexColor: "#6a0380",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    // Validate form and check item not duplicate
    onClose({
      name: data.name,
      domainName: data.domainName,
      appColor: pickedColor.hexColor,
    });
    dispatch(
      showSnackbar({
        show: true,
        message: "ثبت سایت جدید با موفقیت انجام شد",
        severity: ZSnackbarSeverity.success,
      })
    );
  };

  const onColorPickerClose = (color) => {
    if (color) {
      setPickedColor({ show: false, hexColor: color.hex });
    } else {
      setPickedColor({ ...pickedColor, show: false });
    }
  };

  return (
    <ZDialog open={true} onClose={onClose} title={"ثبت سایت جدید"}>
      <form onSubmit={handleSubmit(save)}>
        <ZFormGroup className="form-box">
          <ZTextField
            {...register("name", { required: true })}
            label="عنوان وب سایت"
            helperText={errors.name && "عنوان وب سایت را وارد کنید"}
            error={errors && errors.name ? true : false}
          />
          <ZTextField
            {...register("domainName", { required: true })}
            label="دامنه"
            placeholder="https://zibchat.com"
            helperText={errors.domainName && "دامنه وب سایت را وارد کنید"}
            error={errors && errors.domainName ? true : false}
          />
          <ZSpacer />
          <ZLabel>انتخاب رنگ برنامه</ZLabel>
          <ZAvatar
            onClick={() => {
              setPickedColor({ ...pickedColor, show: true });
            }}
            width={30}
            height={30}
            backgroundColor={pickedColor.hexColor}
          >
            {""}
          </ZAvatar>
          <ZSpacer />
          <div className="row" dir="rtl">
            <div className="col">
              <ZButton
                variant={ZButtonVariant.contained}
                type={ZButtonType.submit}
              >
                تایید
              </ZButton>
            </div>
            <div className="col">
              <ZButton variant={ZButtonVariant.text} onClick={onClose}>
                انصراف
              </ZButton>
            </div>
          </div>
        </ZFormGroup>
        {pickedColor.show && (
          <ZColorPickerDialog
            defaultColor={pickedColor.hexColor}
            onClose={onColorPickerClose}
          />
        )}
      </form>
    </ZDialog>
  );
};

export default NewApp;
