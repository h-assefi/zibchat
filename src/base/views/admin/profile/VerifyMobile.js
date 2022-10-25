import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import { ZSnackbarSeverity } from "src/base/coreServices/components/snackbar/ZSnackbar";
import ZText from "src/base/coreServices/components/text/ZText";
import ZTextField, {
  ZTextFieldType,
} from "src/base/coreServices/components/textField/ZTextField";
import ZView from "src/base/coreServices/components/view/ZView";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";

export const VerifyMobile = ({ onVerified }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [verifyState, setVerifyState] = React.useState({
    text: "ارسال کد",
    stage: "sendCode",
    mobileRequired: true,
    codeRequired: false,
  });

  const verifyMobile = (data) => {
    if (verifyState.stage === "sendCode") {
      //SEND SMS CODE
      dispatch(
        showSnackbar({
          show: true,
          message: "کد تایید با موفقیت ارسال شد",
          severity: ZSnackbarSeverity.info,
        })
      );
      setVerifyState({
        codeRequired: true,
        mobileRequired: false,
        stage: "verify",
        text: "تایید کد",
      });
    } else {
      //VALIDATE THE ENTERED CODE
      if (data.code === "123") {
        //TRUE CODE
        if (onVerified) {
          onVerified(true);
        }
        dispatch(
          showSnackbar({
            show: true,
            message: "شماره موبایل با موفقیت تایید شد",
            severity: ZSnackbarSeverity.success,
          })
        );
      } else {
        dispatch(
          showSnackbar({
            show: true,
            message: "کد نامعتبر است",
            severity: ZSnackbarSeverity.error,
          })
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(verifyMobile)}>
      <ZView className={"align-items-center card pb-4"} style={{ width: 250 }}>
        <div className="card-header">
          <ZText variant="h6">شماره موبایل تایید نشده است.</ZText>
        </div>
        <ZTextField
          type={ZTextFieldType.number}
          label="شماره موبایل"
          disabled={verifyState.codeRequired}
          {...register("mobile", { required: verifyState.mobileRequired })}
          helperText={errors.mobile && "شماره موبایل را وارد کنید"}
          error={errors && errors.mobile ? true : false}
        />

        {verifyState.codeRequired && (
          <>
            <ZSpacer />
            <ZTextField
              type={ZTextFieldType.number}
              label="کد تایید"
              {...register("code", { required: verifyState.codeRequired })}
              helperText={errors.code && "کد تایید را وارد کنید"}
              error={errors && errors.code ? true : false}
            />
          </>
        )}
        <ZButton variant={ZButtonVariant.text} type={ZButtonType.submit}>
          {verifyState.text}
        </ZButton>
      </ZView>
    </form>
  );
};
