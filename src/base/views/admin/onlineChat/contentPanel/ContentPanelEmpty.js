import ZLabel from "src/base/coreServices/components/Label/ZLabel";

const ContentPanelEmpty = () => {
  return (
    <div className="d-flex flex-column justify-content-around h-100 w-100 align-items-center ">
      <ZLabel variant="h6" sx={{ fontWeight: "bold" }}>
        پیامی برای مکالتبهءء انتخاب نشده است
      </ZLabel>
    </div>
  );
};

export default ContentPanelEmpty;
