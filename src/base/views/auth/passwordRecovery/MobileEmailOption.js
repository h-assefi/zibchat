import * as React from "react";
import ZButton, {
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZAlertDialog from "src/base/coreServices/components/dialog/ZAlertDialog";
import ZDialog from "src/base/coreServices/components/dialog/ZDialog";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";

const MobileEmailOption = ({ mobile, email, onClose }) => {
  if (mobile || email) {
    return (
      <ZDialog
        open={true}
        onClose={onClose}
        title={"روش بازیابی رمز عبور را انتخاب کنید"}
      >
        <div className="d-md-flex">
          {mobile && (
            <ZButton
              startIcon={<ZIcon icon={ZIcons.sms}></ZIcon>}
              variant={ZButtonVariant.outlined}
              onClick={() => {
                onClose({ type: "mobile", value: mobile });
              }}
            >{`ارسال کد بازیابی به شماره موبایل ${mobile.substring(
              9
            )}******${mobile.substring(0, 3)}`}</ZButton>
          )}

          {email && (
            <ZButton
              startIcon={<ZIcon icon={ZIcons.email}></ZIcon>}
              variant={ZButtonVariant.outlined}
              onClick={() => {
                onClose({ type: "email", value: email });
              }}
            >{`ارسال کد بازیابی به پست الکترونیکی ${email.substring(
              0,
              2
            )}******${email.substring(
              email.length - (email.split("@")[1].length + 1)
            )}`}</ZButton>
          )}
        </div>
      </ZDialog>
    );
  } else {
    return (
      <ZAlertDialog
        onClose={onClose}
        open={true}
        title="خطا"
        message={
          "متاسفانه شما ایمیل و یا شماره موبایل خود را مشخص نکرده اید و کاربری شما قابل بازیابی نمی باشد"
        }
      ></ZAlertDialog>
    );
  }
};

export default MobileEmailOption;
