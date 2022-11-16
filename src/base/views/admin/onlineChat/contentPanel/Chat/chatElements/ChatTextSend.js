import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";

const ChatTextSend = ({ item, index }) => {
  return (
    <div key={"div_send_" + index} className={"chat-item send"}>
      {item.value.value
        .trim()
        .split("\n")
        .map((paragraph, index2) => {
          if (isNullOrEmpty(paragraph)) {
            return <br />;
          } else {
            return (
              <p className="m-0 chat-text posision-relative" id={"p_" + index2}>
                {paragraph}
              </p>
            );
          }
        })}
      <span className="time">12:25 AM</span>
      <span className="check read">
        <ZIcon icon={ZIcons.checkDouble} fontSize={"small"} />
      </span>
    </div>
  );
};
export default ChatTextSend;
