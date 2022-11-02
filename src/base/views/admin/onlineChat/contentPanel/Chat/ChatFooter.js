import * as React from "react";
import { useForm } from "react-hook-form";
import { ZAnimation } from "src/base/coreServices/components/animation/ZAnimation";
import ZButton, {
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZIcon, {
  ZIconColor,
  ZIcons,
} from "src/base/coreServices/components/icon/ZIcon";
import ZTextField, {
  ZTextFieldVariant,
} from "src/base/coreServices/components/textField/ZTextField";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";
import { motion } from "framer-motion";
import EmojiPicker, { Theme } from "emoji-picker-react";
import ZFileUpload from "src/base/coreServices/components/fileUpload/ZFileUpload";
import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ZDivider from "src/base/coreServices/components/divider/ZDivider";
import QuickReplyPopup from "./QuickReplyPopup";
import { usePrevious } from "src/base/coreServices/hooks/hooks";

const animVariant = {
  hidden: {
    opacity: 0,
    // x: "100%",
    scale: 0,
    display: "none",
  },
  visible: {
    opacity: 1,
    // x: 0,
    scale: 1,
    display: "inline",
  },
};

const quickReplyVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    display: "block",
  },
};

const ChatFooter = ({ onSendClick }) => {
  const [sendVisible, setSendVisible] = React.useState(false);
  const [textMessage, setTextMessage] = React.useState("");
  const [emojiVisible, setEmojiVisible] = React.useState(false);
  const [quickReplyVisible, setQuickReplyVisible] = React.useState(false);
  const prevTextMessage = usePrevious(textMessage);

  React.useEffect(() => {
    if (textMessage) {
      if (textMessage.startsWith("/") && textMessage.length === 1) {
        setQuickReplyVisible(true);
      }
    } else {
      if (prevTextMessage && prevTextMessage === "/") {
        setQuickReplyVisible(false);
      }
    }
  }, [textMessage]);

  const attachFileClick = () => {};

  const quickReplyClick = () => {
    setQuickReplyVisible(!quickReplyVisible);
  };
  const emojiClick = () => {
    setEmojiVisible(!emojiVisible);
  };

  const onEmojiPicked = (emojiData, event) => {
    setTextMessage(textMessage + "" + emojiData.emoji);
  };
  const sendClick = () => {
    if (onSendClick) {
      onSendClick(textMessage);
    }
  };
  const micClick = () => {};

  const textMessageChange = (event) => {
    setSendVisible(!isNullOrEmpty(event.target.value));
    setTextMessage(event.target.value);
  };

  const onQuickReplyClick = (replyText) => {
    if (textMessage.startsWith("/")) {
      setTextMessage(`${textMessage.substring(1)} ${replyText}`);
    } else {
      setTextMessage(`${textMessage} ${replyText}`);
    }
    setQuickReplyVisible(false);
    setSendVisible(true);
  };

  return (
    <div
      id="divChatFooter"
      style={{
        bottom: 0,
        // position: "absolute",
        width: "100%",
      }}
      className={
        " d-flex flex-row  rounded py-1 bg-gray" +
        (textMessage.includes("\n")
          ? " align-items-end "
          : " align-items-center ")
      }
    >
      <motion.div
        variants={animVariant}
        animate={sendVisible ? "visible" : "hidden"}
        initial="hidden"
      >
        <ZIconButton onClick={sendClick}>
          <ZIcon icon={ZIcons.send} color={ZIconColor.primary} />
        </ZIconButton>
      </motion.div>
      <motion.div
        variants={animVariant}
        animate={sendVisible ? "hidden" : "visible"}
        initial="visible"
      >
        <ZIconButton onClick={micClick}>
          <ZIcon icon={ZIcons.mic} color={ZIconColor.primary} />
        </ZIconButton>
      </motion.div>
      <ZIconButton onClick={quickReplyClick}>
        <ZIcon icon={ZIcons.sms} />
      </ZIconButton>
      <ZTextField
        id="textMessage"
        onChange={textMessageChange}
        className="bg-white rounded px-2 flex-grow-1"
        variant={ZTextFieldVariant.inputBase}
        value={textMessage}
        multiline
        placeholder="برای دسترسیءء سریع به پیام های آماده / "
      />

      <IconButton aria-label="upload picture" component="label">
        <ZFileUpload />
        <ZIcon icon={ZIcons.attachFile} />
      </IconButton>
      <ZIconButton onClick={emojiClick} className="">
        <ZIcon icon={ZIcons.emojiLanugh} />
      </ZIconButton>
      {emojiVisible && (
        <div style={{ position: "absolute", bottom: 50, left: 0 }}>
          <EmojiPicker
            onEmojiClick={onEmojiPicked}
            autoFocusSearch={false}
            theme={Theme.AUTO}
          />
        </div>
      )}
      <motion.div
        style={{ position: "absolute", bottom: 50, left: 0, width: "100%" }}
        variants={quickReplyVariant}
        animate={quickReplyVisible ? "visible" : "hidden"}
        initial="hidden"
      >
        <QuickReplyPopup onClick={onQuickReplyClick} />
      </motion.div>
    </div>
  );
};

export default ChatFooter;
