import { useState, useEffect } from "react";
import generateKey from "src/base/coreServices/tools/generateKey";
import { deleteAudio } from "./recordingsList";

export default function useRecordingsList(audio) {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
  };
}
