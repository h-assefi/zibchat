import { useForm } from "react-hook-form";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ZTextField, {
  ZTextFieldVariant,
} from "src/base/coreServices/components/textField/ZTextField";

const UserPanelSearch = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="d-flex flex-row align-items-center justify-content-between px-1">
      <ZLabel variant="h6" className=" col-4" sx={{ fontWeight: "bold" }}>
        مکالمهءءها
      </ZLabel>
      <div className="col-8">
        <div className="d-flex flex-row">
          <ZTextField
            {...register("search")}
            placeholder="جستجو"
            variant={ZTextFieldVariant.inputBase}
          ></ZTextField>
          <ZIconButton onClick={() => {}}>
            <ZIcon icon={ZIcons.search}></ZIcon>
          </ZIconButton>
        </div>
      </div>
    </div>
  );
};

export default UserPanelSearch;
