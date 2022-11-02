import { List, ListItem, Paper } from "@mui/material";
import * as React from "react";
import ZButton from "src/base/coreServices/components/button/ZButton";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ZTextField, {
  ZTextFieldVariant,
} from "src/base/coreServices/components/textField/ZTextField";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";

const quickReplyList = [
  {
    key: "سلام",
    text: "سلام و خیلی خوش آمدین...",
  },
  {
    key: "خداحافظ",
    text: "خدا به همراهتان",
  },
];

const QuickReplyPopup = ({ onClick }) => {
  const [replyList, setReplyList] = React.useState(quickReplyList);

  const searchQuickReply = (item) => {
    if (isNullOrEmpty(item.target.value)) {
      setReplyList(quickReplyList);
    } else {
      let result = quickReplyList.filter((x) =>
        x.text.includes(item.target.value)
      );
      setReplyList(result);
    }
  };
  return (
    <Paper elevation={20}>
      <div className="d-flex flex-column rounded-top w-100 p-2 bg-gray">
        <div className="d-flex flex-row ">
          <ZTextField
            id="quickReplySearch"
            onChange={searchQuickReply}
            className="bg-white rounded px-2 flex-grow-1"
            variant={ZTextFieldVariant.inputBase}
            placeholder="جستجو پیام های آماده"
          />
          <ZButton>
            افزودن
            <ZIcon icon={ZIcons.addMessage} />
          </ZButton>
        </div>

        <div style={{ height: 150, overflow: "auto" }} className="p-2 ">
          <Paper>
            <List>
              {replyList.map((reply) => {
                return (
                  <ListItem disablePadding key={reply.key}>
                    <div
                      className="row w-100 cursor-pointer px-2 quick-list-item rounded m-0"
                      onClick={() => onClick(reply.text)}
                    >
                      <div className="col-sm-4 col-12">
                        <ZLabel className="text-muted">{reply.key}</ZLabel>
                      </div>
                      <div className="col-sm-7 col-12">
                        <ZLabel>{reply.text}</ZLabel>
                      </div>
                    </div>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default QuickReplyPopup;
