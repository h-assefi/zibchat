import * as React from "react";
import { useForm } from "react-hook-form";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDialog from "src/base/coreServices/components/dialog/ZDialog";
import CircularProgressWithLabel from "src/base/coreServices/components/progress/ProgressWithLabel";
import ZTextField, {
  ZTextFieldSize,
} from "src/base/coreServices/components/textField/ZTextField";
import { dateDiffInDays } from "src/base/coreServices/tools/ToolsService";

const ConfirmRecoverCode = ({ type, value, onClose, resume }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [progress, setProgress] = React.useState(
    resume
      ? 100 -
          dateDiffInDays(
            new Date(localStorage.getItem("lastverifycodetime")),
            new Date()
          )
      : 100
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 1));
      if (progress <= 0) return;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const verifyCode = (data) => {};

  return (
    <ZDialog open={true} onClose={onClose} title={"کد بازیابی را وارد کنید"}>
      <CircularProgressWithLabel value={progress} />
      <div className="d-md-flex">
        <form onSubmit={handleSubmit(verifyCode)}>
          <ZFormGroup className="form-box">
            <ZTextField
              {...register("code", { required: true })}
              label="کد بازیابی"
              helperText={errors.code && "کد بازیابی را وارد کنید"}
              error={errors && errors.code ? true : false}
              size={ZTextFieldSize.large}
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
      </div>
    </ZDialog>
  );
};

export default ConfirmRecoverCode;
