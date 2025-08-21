import * as React from "react";
import { useForm } from "react-hook-form";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDialog from "src/base/coreServices/components/dialog/ZDialog";
import ZTextField from "src/base/coreServices/components/textField/ZTextField";
import {
  showToast,
  ZToastPosition,
  ZToastType,
} from "src/base/coreServices/components/toast/ZToast";

const NewQuickReply = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    // Validate form and check item not duplicate
    console.log(data.group);
    onClose({ key: data.shortcutKey, text: data.text });
    showToast("پیام جدید ثبت شد", {
      position: ZToastPosition.BottomRight,
      type: ZToastType.Success,
    });
  };

  return (
    <ZDialog open={true} onClose={onClose} title={"ثبت پیام آماده جدید"}>
      <form onSubmit={handleSubmit(save)}>
        <ZFormGroup className="form-box">
          <ZTextField
            {...register("shortcutKey", { required: true })}
            label="میانبر"
            helperText={errors.shortcutKey && "میانبر را وارد کنید"}
            error={errors && errors.shortcutKey ? true : false}
          />
          <ZTextField
            {...register("text", { required: true })}
            label="متن پیام"
            helperText={errors.text && "متن پیام را وارد کنید"}
            error={errors && errors.text ? true : false}
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

export default NewQuickReply;
