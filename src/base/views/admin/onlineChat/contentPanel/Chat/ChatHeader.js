import ZButton, {
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";

const ChatHeader = () => {
  const closeConversation = () => {};

  const divertConversation = () => {};

  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom bg-light position-sticky">
      <ZButton variant={ZButtonVariant.outlined} onClick={divertConversation}>
        <ZIcon icon={ZIcons.moveUp} />
        انتقال مکالمهءء
      </ZButton>

      <ZButton variant={ZButtonVariant.outlined} onClick={closeConversation}>
        <ZIcon icon={ZIcons.close} />
        بستن مکالمهءء
      </ZButton>
    </div>
  );
};

export default ChatHeader;
