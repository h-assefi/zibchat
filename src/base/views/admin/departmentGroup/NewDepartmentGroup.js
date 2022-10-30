import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDialog from "src/base/coreServices/components/dialog/ZDialog";
import { ZSnackbarSeverity } from "src/base/coreServices/components/snackbar/ZSnackbar";
import ZTextField from "src/base/coreServices/components/textField/ZTextField";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";

const NewDepartmentGroup = ({ onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    // Validate form and check item not duplicate
    onClose({ title: data.title });
    dispatch(
      showSnackbar({
        show: true,
        message: "ثبت گروه دپارتمان جدید با موفقیت انجام شد",
        severity: ZSnackbarSeverity.success,
      })
    );
  };

  return (
    <ZDialog open={true} onClose={onClose} title={"ثبت گروه دپارتمان جدید"}>
      <form onSubmit={handleSubmit(save)}>
        <ZFormGroup className="form-box">
          <ZTextField
            {...register("title", { required: true })}
            label="عنوان گروه دپارتمان"
            helperText={errors.name && "عنوان گروه دپارتمان را وارد کنید"}
            error={errors && errors.name ? true : false}
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

export default NewDepartmentGroup;
