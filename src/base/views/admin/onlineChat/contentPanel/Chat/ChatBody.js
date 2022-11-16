import * as React from "react";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";
import BalloonDate from "./chatElements/BaloonDate";
import ChatTextReceive from "./chatElements/ChatTextReceive";
import ChatTextSend from "./chatElements/ChatTextSend";

const ChatBody = ({ body }) => {
  const endMessageRef = React.useRef();

  React.useEffect(() => {
    if (endMessageRef && endMessageRef.current) {
      endMessageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [body]);

  return (
    <div className="border d-flex flex-column w-100 flex-grow-1 overflow-auto p-3 ">
      {body.map((item, index) => {
        // if( item.send)
        console.log(body.length);
        if (item.value.type === "text") {
          if (index % 2 === 0)
            return <ChatTextSend item={item} index={index} key={index} />;
          else if (index % 2 === 1)
            return <ChatTextReceive item={item} index={index} key={index} />;
        }
        // else return <BalloonDate date="دوشنبه 1400/06/25" />;
      })}

      <div style={{ float: "left", clear: "both" }} ref={endMessageRef}></div>
    </div>
  );
};

export default ChatBody;
