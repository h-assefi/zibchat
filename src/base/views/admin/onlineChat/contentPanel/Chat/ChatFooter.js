import * as React from "react";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZIcon, {
  ZIconColor,
  ZIcons,
} from "src/base/coreServices/components/icon/ZIcon";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";
import { motion } from "framer-motion";
import TextMessaging from "./footerElements/TextMessaging";
import AudioRecorder from "./footerElements/AudioRecorder";
import useRecorder from "src/base/coreServices/hooks/audio/useRecorder";
import useRecordingsList from "src/base/coreServices/hooks/audio/handlers/use-recordings-list";

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

const ChatFooter = ({ onSendClick }) => {
  const [sendVisible, setSendVisible] = React.useState(false);
  const { recorderState, startRecording, saveRecording, ...handlers } =
    useRecorder();
  const { recordings } = useRecordingsList(recorderState.audio);

  const [data, setData] = React.useState({
    value: null,
    type: "audio",
    status: "",
  });

  const [audios, setAudios] = React.useState(false);

  React.useEffect(() => {
    setSendVisible(!isNullOrEmpty(data.value));
  }, [data]);

  React.useEffect(() => {
    if (data.type === "audio") {
      console.log(audios);
      console.log(recordings);
      if (audios) {
        if (recordings.length > 0) {
          console.log("1");
          setData({ type: "audio", status: "", value: recordings[0] });
        }
      } else {
        console.log("2");
        setData({ type: "text", status: "", value: null });
      }
    }
  }, [audios, recordings]);

  const attachFileClick = () => {};

  const sendClick = () => {
    if (onSendClick) {
      onSendClick(data);
    }
  };

  const onTextChange = (data) => {
    setData(data);
  };

  const micClick = () => {
    console.log(data);
    if (data.status === "") {
      console.log(data.status);

      startRecording();
      setData({ value: null, type: "audio", status: "recording" });
    } else {
      console.log(data.status);

      saveRecording();
      setAudios(true);
    }
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
        (data.type === "text" && data.value && data.value.includes("\n")
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
        <motion.div
          variants={animVariant}
          animate={data.status === "recording" ? "visible" : "hidden"}
          initial="hidden"
        >
          <ZIconButton onClick={micClick}>
            <ZIcon icon={ZIcons.stopCircle} color={ZIconColor.primary} />
          </ZIconButton>
        </motion.div>
        <motion.div
          variants={animVariant}
          animate={data.status === "recording" ? "hidden" : "visible"}
          initial="visible"
        >
          <ZIconButton onClick={micClick}>
            <ZIcon icon={ZIcons.mic} color={ZIconColor.primary} />
          </ZIconButton>
        </motion.div>
      </motion.div>

      {data.type === "text" && <TextMessaging onTextChange={onTextChange} />}
      {data.type === "audio" && (
        <AudioRecorder
          handlers={handlers}
          recorderState={recorderState}
          onDelete={() => setAudios(false)}
        />
      )}
    </div>
  );
};

export default ChatFooter;
