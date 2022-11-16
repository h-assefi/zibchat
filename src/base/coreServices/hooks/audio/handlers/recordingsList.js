export function deleteAudio(audioKey, setRecordings) {
  console.log("DELETE AUDIO-" + audioKey);
  setRecordings((prevState) =>
    prevState.filter((record) => record.key !== audioKey)
  );
}
