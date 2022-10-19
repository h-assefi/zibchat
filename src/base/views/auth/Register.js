import * as React from "react";
import { useForm } from "react-hook-form";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZTextField, {
  ZTextFieldType,
} from "src/base/coreServices/components/textField/ZTextField";
import "src/assets/css/login.css";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [passVisible, setPassVisible] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {};

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div className="container">
        <div className="login-container">
          <div id="output"></div>
          <ZFormGroup className="form-box">
            <ZLabel sx={{ fontWeight: "bold", fontSize: 25 }}>زیب چت</ZLabel>
            <ZSpacer height={30} />
            <ZTextField
              {...register("name", { required: true })}
              label="نام"
              helperText={errors.name && "نام را وارد کنید"}
              error={errors && errors.name ? true : false}
            />
            <ZSpacer height={5} />
            <ZTextField
              {...register("surname", { required: true })}
              label="نام خانوادگی"
              helperText={errors.surname && "نام خانوادگی را وارد کنید"}
              error={errors && errors.surname ? true : false}
            />
            <ZSpacer height={5} />
            <ZTextField
              {...register("username", { required: true })}
              label="نام کاربری"
              helperText={errors.username && "نام کاربری را وارد کنید"}
              error={errors && errors.username ? true : false}
            />
            <ZSpacer height={5} />
            <ZTextField
              {...register("password", { required: true })}
              label="رمز عبور"
              sx={{ fontWeight: "bold" }}
              helperText={errors.password && "رمز عبور را وارد کنید"}
              error={errors && errors.password ? true : false}
              type={passVisible ? ZTextFieldType.text : ZTextFieldType.password}
              endIcon={
                <ZIconButton onClick={() => setPassVisible(!passVisible)}>
                  <ZIcon
                    icon={
                      !passVisible ? ZIcons.visibility : ZIcons.visibilityOff
                    }
                  ></ZIcon>
                </ZIconButton>
              }
            />
            <ZSpacer height={5} />
            <ZTextField
              {...register("confirmPassword", { required: true })}
              label="تکرار رمز"
              sx={{ textAlign: "center" }}
              helperText={errors.confirmPassword && "تکرار رمز را وارد کنید"}
              error={errors && errors.confirmPassword ? true : false}
              type={passVisible ? ZTextFieldType.text : ZTextFieldType.password}
            />
            <ZSpacer height={25} />
            <ZButton
              variant={ZButtonVariant.contained}
              type={ZButtonType.submit}
            >
              ثبت نام
            </ZButton>
            <ZSpacer />

            <ZButton
              variant={ZButtonVariant.outlined}
              onClick={() => navigate("/login")}
            >
              حساب کاربری دارم
            </ZButton>
            <ZSpacer />
            <ZButton
              variant={ZButtonVariant.text}
              onClick={() => navigate(`/recover/${watch("username")}`)}
            >
              رمز عبور خود را فراموش کرده اید؟
            </ZButton>
          </ZFormGroup>
        </div>
      </div>
    </form>
  );
};

export default Register;
