import { Paper } from "@mui/material";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ChatContent from "./ChatContent";
import ContentPanelEmpty from "./ContentPanelEmpty";

const ContentPanel = ({ chatId = 1 }) => {
  return (
    <Paper sx={{ height: "100%" }}>
      <div
        className="d-flex flex-column chat-column-contentpanel "
        style={{ position: "relative" }}
      >
        {chatId ? <ChatContent chatId={chatId} /> : <ContentPanelEmpty />}
      </div>
    </Paper>
  );
};

export default ContentPanel;
