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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passVisible, setPassVisible] = React.useState(false);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const login = (data) => {};
  return (
    <form onSubmit={handleSubmit(login)}>
      <div className="container">
        <div className="login-container">
          <div id="output"></div>
          <div className="avatar"></div>
          <ZFormGroup className="form-box">
            <ZTextField
              {...register("username", { required: true })}
              label="نام کاربری"
              helperText={errors.username && "نام کاربری را وارد کنید"}
              error={errors && errors.username ? true : false}
            />
            <ZSpacer />
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
            <ZSpacer height={25} />
            <ZButton
              variant={ZButtonVariant.contained}
              type={ZButtonType.submit}
            >
              ورود
            </ZButton>

            <ZSpacer />

            <ZButton
              variant={ZButtonVariant.outlined}
              onClick={() => navigate("/register")}
            >
              عضویت
            </ZButton>

            <ZSpacer />
            <ZButton
              variant={ZButtonVariant.text}
              onClick={() => {
                navigate(`/recover/${watch("username")}`);
              }}
            >
              رمز عبور خود را فراموش کرده اید؟
            </ZButton>
          </ZFormGroup>
        </div>
      </div>
    </form>
  );
};

export default Login;
