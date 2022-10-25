import { Box, IconButton, Tab } from "@mui/material";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import ZAvatar from "src/base/coreServices/components/avatar/ZAvatar";
import ZButton, {
  ZButtonType,
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import { ZDatePicker } from "src/base/coreServices/components/datetime/ZDatePicker";
import ZSimpleDropdown from "src/base/coreServices/components/dropdown/ZSimpleDropdown";
import ZFileUpload from "src/base/coreServices/components/fileUpload/ZFileUpload";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZTextField, {
  ZTextFieldType,
} from "src/base/coreServices/components/textField/ZTextField";
import ZView from "src/base/coreServices/components/view/ZView";
import { isPast } from "date-fns-jalali";
import {
  isNullOrEmpty,
  IsPasswordValid,
} from "src/base/coreServices/tools/ToolsService";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useDispatch } from "react-redux";
import { showSnackbar } from "src/redux/reducers/adminLayoutSnackbarSlice";
import { ZSnackbarSeverity } from "src/base/coreServices/components/snackbar/ZSnackbar";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";

const Profile = () => {
  const dispatch = useDispatch();
  let minPasslength = 6;
  let useNumberInPass = true,
    useCompoundInPass = true,
    useSpecialCharInPass = true;
  const [value, setValue] = React.useState("1");
  const [passVisible, setPassVisible] = React.useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const save = (data, e) => {};

  const savePassword = (data, e) => {
    if (ChangePasswordValidate(data)) {
      // Save new password to DB
      // show a message to be successful
    }
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const ChangePasswordValidate = (data) => {
    if (
      IsPasswordValid(
        data.newPassword,
        useSpecialCharInPass,
        useNumberInPass,
        useCompoundInPass,
        minPasslength
      ) &&
      data.newPassword !== data.currentPassword
    ) {
      if (data.newPassword === data.confirmPassword) {
      } else {
        dispatch(
          showSnackbar({
            show: true,
            message: "رمز ورود جدید و تکرار آن یکسان نیست",
            severity: ZSnackbarSeverity.error,
          })
        );
        return false;
      }
    } else {
      dispatch(
        showSnackbar({
          show: true,
          message: "رمز عبور صحیح نمی باشد.\nقوانین رمز گذاری را بررسی کنید",
          severity: ZSnackbarSeverity.error,
        })
      );
      return false;
    }
  };

  const UserInfo = () => {
    return (
      <form onSubmit={handleSubmit(save)}>
        <div className="justify-content-around align-items-center">
          <ZView className={"row justify-content-center"}>
            <ZAvatar alt="Hossein Assefi" width={80} height={80}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <ZFileUpload />
                <ZIcon icon={ZIcons.camera} />
              </IconButton>
            </ZAvatar>
          </ZView>
          <ZSpacer height={25} />
          <ZView className={"row align-items-center justify-content-start"}>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField {...register("name")} label="نام" />
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField {...register("surname")} label="نام خانوادگی" />
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6 pt-3"}>
              <ZSimpleDropdown
                {...register("gender")}
                label="جنسیت"
                data={[
                  { value: 0, title: "زن" },
                  { value: 1, title: "مرد" },
                ]}
                textField="title"
                valueField="value"
              ></ZSimpleDropdown>
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6 pt-3"}>
              <Controller
                control={control}
                name="birthdate"
                rules={{
                  validate: {
                    max: (date) =>
                      isPast(date) ||
                      isNullOrEmpty(date) ||
                      "تاریخ تولد نمی تواند از تاریخ جاری بیشتر باشد",
                  },
                }}
                render={({
                  field: { ref, onBlur, name, ...field },
                  fieldState,
                }) => (
                  <ZDatePicker
                    {...field}
                    inputRef={ref}
                    label="تاریخ تولد"
                    onBlur={onBlur}
                    name={name}
                    error={!!fieldState.error}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField
                {...register("mobile")}
                label="شماره موبایل"
                readOnly={true}
              />
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField
                {...register("email")}
                label="پست الکترونیکی"
                readOnly={true}
              />
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField {...register("displayName")} label="عنوان نمایشی" />
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6 pt-3"}>
              <ZSimpleDropdown
                {...register("department")}
                label="دپارتمان"
                data={[]}
                textField="id"
                valueField="title"
              ></ZSimpleDropdown>
            </ZView>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField
                {...register("roleInDepartment")}
                label="سمت در دپارتمان"
              />
            </ZView>
          </ZView>

          <ZSpacer height={25} />
          <ZButton variant={ZButtonVariant.contained} type={ZButtonType.submit}>
            ذخیره
          </ZButton>
        </div>
      </form>
    );
  };

  const ChangePassword = () => {
    return (
      <form onSubmit={handleSubmit(savePassword)}>
        <div className="justify-content-around align-items-center">
          <ZView className={"row align-items-center justify-content-start"}>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField
                {...register("currentPassword", { required: true })}
                label="رمز عبور فعلی"
                helperText={
                  errors.currentPassword && "رمز عبور فعلی را وارد کنید"
                }
                error={errors && errors.currentPassword ? true : false}
                type={
                  passVisible ? ZTextFieldType.text : ZTextFieldType.password
                }
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
            </ZView>
          </ZView>
          <ZView className={"row align-items-center justify-content-start"}>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField
                {...register("newPassword", { required: true })}
                label="رمز عبور جدید"
                helperText={errors.newPassword && "رمز عبور جدید را وارد کنید"}
                error={errors && errors.newPassword ? true : false}
                type={
                  passVisible ? ZTextFieldType.text : ZTextFieldType.password
                }
              />
            </ZView>
          </ZView>
          <ZView className={"row align-items-center justify-content-start"}>
            <ZView className={"col-sm-6 col-md-4 col-lg-3 col-xl-2 col-6"}>
              <ZTextField
                {...register("confirmPassword", { required: true })}
                label="تکرار رمز عبور"
                helperText={
                  errors.confirmPassword && "تکرار رمز عبور را وارد کنید"
                }
                error={errors && errors.confirmPassword ? true : false}
                type={
                  passVisible ? ZTextFieldType.text : ZTextFieldType.password
                }
              />
            </ZView>
          </ZView>
          <ZSpacer height={25} />

          <ZView className={"row align-items-center justify-content-start"}>
            <ul style={{ fontSize: 13 }}>
              <li style={{ fontWeight: "bold", fontSize: 14 }}>
                قوانین رمز گذاریءء
              </li>
              <li>
                ⬤{" "}
                {"رمز ورود باید حداقل {n} کاراکتر باشد".replace(
                  "{n}",
                  minPasslength
                )}
              </li>
              <li>⬤ می تواند شامل عدد و حروف انگلیسی باشد</li>
              {useNumberInPass && <li>⬤ باید حداقل شامل یک عدد باشد</li>}
              {useCompoundInPass && (
                <li>⬤ باید حداقل شامل یک حرف کوچک و یک حرف بزرگ باشد</li>
              )}
              <li>⬤ رمز ورود جدید نمی تواند مشابهءء رمز جاری باشد</li>
              {useSpecialCharInPass && (
                <li>⬤ باید شامل حداقل یک کاراکتر خاص باشد (#?!@$%^&*-)</li>
              )}
            </ul>
          </ZView>

          <ZSpacer height={25} />
          <ZButton
            id={"btnChangePassword"}
            variant={ZButtonVariant.contained}
            type={ZButtonType.submit}
          >
            ذخیره
          </ZButton>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="container">
        <ZFormGroup className="form-box justify-content-center align-items-center">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label={"مشخصات فردی"} value="1" />
                <Tab label={"تغییر رمز"} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className="px-sm-2  px-0">
              <UserInfo />
            </TabPanel>
            <TabPanel value="2" className="px-sm-2  px-0">
              <ChangePassword />
            </TabPanel>
          </TabContext>
        </ZFormGroup>
      </div>
    </>
  );
};

export default Profile;
