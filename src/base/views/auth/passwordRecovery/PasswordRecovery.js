import * as React from "react";
import { useForm } from "react-hook-form";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZTextField from "src/base/coreServices/components/textField/ZTextField";
import "src/assets/css/login.css";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import { useNavigate } from "react-router-dom";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import MobileEmailOption from "./MobileEmailOption";
import ZSnackbar, {
  ZSnackbarSeverity,
} from "src/base/coreServices/components/snackbar/ZSnackbar";
import { ZAlertVariant } from "src/base/coreServices/components/alert/ZAlert";
import ConfirmRecoverCode from "./ConfirmRecoverCode";
import { dateDiffInDays } from "src/base/coreServices/tools/ToolsService";

const PasswordRecovery = () => {
  let navigate = useNavigate();

  const [confirmCode, setConfirmCode] = React.useState({
    show: false,
    type: "",
    value: "",
    resume: false,
  });
  const [showOptions, setShowOptions] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({
    show: false,
    message: "",
    severity: ZSnackbarSeverity.info,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recoverPassword = (data) => {
    if (data.username === "asd") {
      setSnackbar({
        show: true,
        message: "نام کاربری وجود ندارد",
        severity: ZSnackbarSeverity.error,
      });
    } else setShowOptions(true);
  };

  const MobileEmailOnClose = (data) => {
    setShowOptions(false);
    if (data && data.type !== "click") {
      let lastTime = localStorage.getItem("lastverifycodetime");
      var diff = dateDiffInDays(new Date(lastTime), new Date());
      if (diff < 100) {
        setSnackbar({
          show: true,
          message:
            "کد قبلا ارسال شده و هر 100ثانیه یک مرتبه امکان درخواست می باشد",
          severity: ZSnackbarSeverity.warning,
        });
        setConfirmCode({ ...data, show: true, resume: true });
        return;
      }
      // if(lastTime && new Date()- Date(lastTime) )
      if (data.type === "mobile") {
        //SEND SMS

        setSnackbar({
          show: true,
          message: "پیامک با موفقیت ارسال شد",
          severity: ZSnackbarSeverity.success,
        });
        // IF SMS SEND OK
        localStorage.setItem("lastverifycodetime", new Date());
        setConfirmCode({ ...data, show: true });
      } else {
        //SEND EMAIL
        setSnackbar({
          show: true,
          message:
            "پست الکارونیکی با موفقیت ارسال شد. لطفا به جعبه پیام های خود مراجعه کنید",
          severity: ZSnackbarSeverity.success,
        });
        // IF Email SEND OK
        localStorage.setItem("lastverifycodetime", new Date());
        setConfirmCode({ ...data, show: true });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(recoverPassword)}>
        <div className="container">
          <div className="login-container">
            <div id="output"></div>
            <ZFormGroup className="form-box">
              <ZLabel sx={{ fontWeight: "bold", fontSize: 25 }}>
                بازیابی رمز عبور
              </ZLabel>
              <ZSpacer height={30} />
              <ZTextField
                {...register("username", { required: true })}
                label="نام کاربری"
                helperText={errors.username && "نام کاربری را وارد کنید"}
                error={errors && errors.username ? true : false}
              />

              <ZSpacer height={25} />
              <ZButton
                variant={ZButtonVariant.contained}
                type={ZButtonType.submit}
              >
                بازیابی رمز عبور
              </ZButton>

              <ZSpacer />

              <ZButton
                variant={ZButtonVariant.text}
                onClick={() => {
                  navigate("/login");
                }}
              >
                بازگشت به صفحه ورود
              </ZButton>
            </ZFormGroup>
          </div>
        </div>
      </form>
      {showOptions && (
        <MobileEmailOption
          mobile={"09132688112"}
          email={"h_assefi@yahoo.com"}
          onClose={MobileEmailOnClose}
        />
      )}
      {confirmCode.show && (
        <ConfirmRecoverCode
          type={confirmCode.type}
          value={confirmCode.value}
          resume={confirmCode.resume}
          onClose={() => setConfirmCode({ show: false })}
        />
      )}
      <ZSnackbar
        open={snackbar.show}
        onClose={() => setSnackbar({ show: false })}
        message={snackbar.message}
        severity={snackbar.severity}
        alert
        alertVariant={ZAlertVariant.filled}
      />
    </>
  );
};
export default PasswordRecovery;
