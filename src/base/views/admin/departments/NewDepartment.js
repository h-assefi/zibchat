import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDialog from "src/base/coreServices/components/dialog/ZDialog";
import ZSimpleDropdown from "src/base/coreServices/components/dropdown/ZSimpleDropdown";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import { ZSnackbarSeverity } from "src/base/coreServices/components/snackbar/ZSnackbar";
import ZTextField from "src/base/coreServices/components/textField/ZTextField";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";

const NewDepartment = ({ onClose, departmentGroupId }) => {
  console.log(departmentGroupId);
  const dispatch = useDispatch();
  const groups = [
    { id: 1, title: "گروه شماره 1" },
    { id: 2, title: "گروه شماره 2" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    // Validate form and check item not duplicate
    console.log(data.group);
    onClose({ title: data.title, departmentId: data.group });
    dispatch(
      showSnackbar({
        show: true,
        message: "ثبت دپارتمان جدید با موفقیت انجام شد",
        severity: ZSnackbarSeverity.success,
      })
    );
  };

  return (
    <ZDialog open={true} onClose={onClose} title={"ثبت دپارتمان جدید"}>
      <form onSubmit={handleSubmit(save)}>
        <ZFormGroup className="form-box">
          <ZSimpleDropdown
            {...register("group", { required: true })}
            label="گروه دپارتمان"
            data={groups}
            textField="title"
            valueField="id"
          ></ZSimpleDropdown>
          <ZLabel color="error">
            {errors.group && "گروه دپارتمان را وارد کنید"}
          </ZLabel>
          <ZTextField
            {...register("title", { required: true })}
            label="عنوان دپارتمان"
            helperText={errors.title && "عنوان دپارتمان را وارد کنید"}
            error={errors && errors.title ? true : false}
          />
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
      </form>
    </ZDialog>
  );
};

export default NewDepartment;
