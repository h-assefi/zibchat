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

export const VerifyMobile = ({ onVerified }) => {
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
      showToast("کد تایید با موفقیت ارسال شد", {
        type: ZToastType.Info,
      });
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
        showToast("شماره موبایل با موفقیت تایید شد", {
          type: ZToastType.Error,
        });
      } else {
        showToast("کد نامعتبر است", {
          type: ZToastType.Success,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(verifyMobile)}>
      <ZView className={"align-items-center card pb-4"} style={{ width: 250 }}>
        <div className="card-header">
          <ZLabel variant="h6">شماره موبایل تایید نشده است.</ZLabel>
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
