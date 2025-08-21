import * as React from "react";
import ChatBody from "./Chat/ChatBody";
import ChatFooter from "./Chat/ChatFooter";
import ChatHeader from "./Chat/ChatHeader";

const ChatContent = () => {
  const [body, setBody] = React.useState([]);
  React.useEffect(() => {}, [body]);

  const onSendClick = (value) => {
    setBody([...body, { value: value }]);
  };

  return (
    <>
      <ChatHeader />
      <ChatBody body={body} />
      <ChatFooter onSendClick={onSendClick} />
    </>
  );
};

export default ChatContent;
