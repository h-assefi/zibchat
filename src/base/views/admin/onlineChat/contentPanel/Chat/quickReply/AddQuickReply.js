import ZButton from "src/base/coreServices/components/button/ZButton";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";

export const AddQuickReply = ({ onClick }) => {
  return (
    <ZButton onClick={onClick}>
      افزودن
      <ZIcon icon={ZIcons.addMessage} />
    </ZButton>
  );
};
