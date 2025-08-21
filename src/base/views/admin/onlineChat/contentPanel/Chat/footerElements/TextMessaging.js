import { IconButton } from "@mui/material";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZFileUpload from "src/base/coreServices/components/fileUpload/ZFileUpload";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZTextField, {
  ZTextFieldVariant,
} from "src/base/coreServices/components/textField/ZTextField";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";
import QuickReplyPopup from "../QuickReplyPopup";
import * as React from "react";
import { usePrevious } from "src/base/coreServices/hooks/hooks";
import { motion } from "framer-motion";
import { AudioStatus, DataTypes } from "../ChatFooter";

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

const TextMessaging = ({ onTextChange, clearTextMessage }) => {
  const [textMessage, setTextMessage] = React.useState("");
  const [emojiVisible, setEmojiVisible] = React.useState(false);
  const [quickReplyVisible, setQuickReplyVisible] = React.useState(false);
  const prevTextMessage = usePrevious(textMessage);
  React.useEffect(() => {
    if (clearTextMessage) {
      setTextMessage("");
    }
  }, [clearTextMessage]);

  React.useEffect(() => {
    // setSendVisible(!isNullOrEmpty(textMessage));

    if (textMessage) {
      if (textMessage.startsWith("/") && textMessage.length === 1) {
        setQuickReplyVisible(true);
      }
    } else {
      if (prevTextMessage && prevTextMessage === "/") {
        setQuickReplyVisible(false);
      }
    }

    onTextChange({
      value: textMessage,
      type: DataTypes.text,
      status: AudioStatus.none,
    });
  }, [textMessage]);

  const quickReplyClick = () => {
    setQuickReplyVisible(!quickReplyVisible);
  };

  const emojiClick = () => {
    setEmojiVisible(!emojiVisible);
  };

  const onEmojiPicked = (emojiData, event) => {
    setTextMessage(textMessage + "" + emojiData.emoji);
  };

  const textMessageChange = (event) => {
    setTextMessage(event.target.value);
  };

  const onQuickReplyClick = (replyText) => {
    if (textMessage.startsWith("/")) {
      setTextMessage(`${textMessage.substring(1)} ${replyText}`);
    } else {
      setTextMessage(`${textMessage} ${replyText}`);
    }
    setQuickReplyVisible(false);
    // setSendVisible(true);
  };

  return (
    <div
      className={
        "w-100 d-flex flex-row " +
        (textMessage && textMessage.includes("\n")
          ? " align-items-end "
          : " align-items-center ")
      }
    >
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

export default TextMessaging;
