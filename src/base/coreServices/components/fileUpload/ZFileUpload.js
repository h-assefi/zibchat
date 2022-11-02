export const ZFileUploadFormat = {
  all: "*/*",
  image: "image/*",
};
const ZFileUpload = ({ format }) => {
  return (
    <input
      hidden
      accept={format ?? ZFileUploadFormat.all}
      multiple
      type="file"
    />
  );
};

export default ZFileUpload;
