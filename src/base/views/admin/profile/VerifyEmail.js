import * as React from "react";
import { useForm } from "react-hook-form";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZTextField, {
  ZTextFieldType,
} from "src/base/coreServices/components/textField/ZTextField";
import {
  ZToastType,
  showToast,
} from "src/base/coreServices/components/toast/ZToast";
import ZView from "src/base/coreServices/components/view/ZView";

export const VerifyEmail = ({ onVerified }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [verifyState, setVerifyState] = React.useState({
    text: "ارسال کد",
    stage: "sendCode",
    emailRequired: true,
    codeRequired: false,
  });

  const verifyMobile = (data) => {
    if (verifyState.stage === "sendCode") {
      //SEND SMS CODE
      showToast(
        "کد تایید با موفقیت به پست الکترونیکی ارسال شد. لطفا جعبه دریافت خود را بررسی کنید",
        {
          type: ZToastType.Info,
        }
      );
      setVerifyState({
        codeRequired: true,
        emailRequired: false,
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
        showToast("پست الکترونیکی با موفقیت تایید شد", {
          type: ZToastType.Success,
        });
      } else {
        showToast("کد نامعتبر است", {
          type: ZToastType.Error,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(verifyMobile)}>
      <ZView className={"align-items-center card pb-4"} style={{ width: 250 }}>
        <div className="card-header">
          <ZLabel variant="h6">پست الکترونیکیءء تایید نشده است.</ZLabel>
        </div>
        <ZTextField
          label="پست الکترونیکی"
          disabled={verifyState.codeRequired}
          {...register("email", {
            required: verifyState.emailRequired,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          helperText={errors.email && "پست الکترونیکی را وارد کنید"}
          error={errors && errors.email ? true : false}
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
