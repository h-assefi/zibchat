import ZIcon, {
  ZIconColor,
  ZIcons,
} from "src/base/coreServices/components/icon/ZIcon";
import {
  formatMinutes,
  formatSeconds,
} from "src/base/coreServices/tools/ToolsService";
import { motion } from "framer-motion";
import useRecordingsList from "src/base/coreServices/hooks/audio/handlers/use-recordings-list";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";

const AudioRecorder = ({ recorderState, handlers, onDelete }) => {
  const { recordingMinutes, recordingSeconds, initRecording, audio } =
    recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;
  const { recordings, deleteAudio } = useRecordingsList(audio);

  const onDeleteAudio = (record) => {
    deleteAudio(record.key);
    onDelete();
  };

  return (
    <div className={"w-100 d-flex flex-row "} style={{ paddingLeft: 10 }}>
      <div
        className="bg-white d-flex flex-row flex-grow-1 px-2 "
        style={{ borderRadius: 20 }}
      >
        {recordings.length <= 0 && (
          <div
            className="mx-2"
            style={{ fontFamily: "tahoma", fontWeight: "bold" }}
          >
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
          </div>
        )}
        {initRecording && (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.1 }}
              transition={{
                type: "tween",
                repeat: Infinity,
                repeateType: "reverse",
                repeatDelay: 0.8,
                delay: 1,
                ease: "easeInOut",
              }}
            >
              <ZIcon
                icon={ZIcons.circle}
                color={ZIconColor.error}
                sx={{ fontSize: 10 }}
              />
            </motion.div>
          </>
        )}
        {recordings &&
          recordings.map((record) => {
            console.log(record);
            console.log(record.key);
            return (
              <div
                className="record w-100 d-flex flex-row align-items-center justify-content-between"
                key={record.key}
              >
                <audio controls src={record.audio} />
                <ZIconButton onClick={() => onDeleteAudio(record)}>
                  <ZIcon icon={ZIcons.delete} color={ZIconColor.error} />
                </ZIconButton>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default AudioRecorder;
