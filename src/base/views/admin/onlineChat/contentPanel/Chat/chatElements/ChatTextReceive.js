import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";

const ChatTextReceive = ({ item, index }) => {
  return (
    <div key={"div_re_" + index} className={"chat-item receive"}>
      {item.value
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
    </div>
  );
};
export default ChatTextReceive;
