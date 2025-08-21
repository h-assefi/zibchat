import { List, ListItem, Paper } from "@mui/material";
import * as React from "react";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ZTextField, {
  ZTextFieldVariant,
} from "src/base/coreServices/components/textField/ZTextField";
import { isNullOrEmpty } from "src/base/coreServices/tools/ToolsService";
import { AddQuickReply } from "./quickReply/AddQuickReply";
import NewQuickReply from "./quickReply/NewQuickReply";

const quickReplyList = [
  // {
  //   key: "سلام",
  //   text: "سلام و خیلی خوش آمدین...",
  // },
  // {
  //   key: "خداحافظ",
  //   text: "خدا به همراهتان",
  // },
];

const QuickReplyPopup = ({ onClick }) => {
  const [replies, setReplies] = React.useState(quickReplyList);
  const [showNewQuickReply, setShowNewQuickReply] = React.useState(false);

  const searchQuickReply = (item) => {
    if (isNullOrEmpty(item.target.value)) {
      setReplies(quickReplyList);
    } else {
      let result = quickReplyList.filter((x) =>
        x.text.includes(item.target.value)
      );
      setReplies(result);
    }
  };

  const NoQuickReplyToDisplay = () => {
    return (
      <div className="d-flex flex-column h-100 justify-content-center align-items-center">
        <ZLabel>پیام آماده ای ثبت نشده است</ZLabel>
        <AddQuickReply onClick={onAddQuickReplyClick} />
      </div>
    );
  };

  const QuickReplies = () => {
    if (replies.length > 0) {
      return (
        <List>
          {replies.map((reply) => {
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
      );
    } else return <NoQuickReplyToDisplay />;
  };

  const onAddQuickReplyClick = () => {
    setShowNewQuickReply(true);
  };

  const onNewQuickReplyCloseClick = (value) => {
    if (value) {
      setReplies([...replies, { key: value.key, text: value.text }]);
    }
    setShowNewQuickReply(false);
  };

  return (
    <>
      <Paper>
        <div className="d-flex flex-column rounded-top w-100 p-2 bg-gray">
          <div className="d-flex flex-row ">
            <ZTextField
              id="quickReplySearch"
              onChange={searchQuickReply}
              className="bg-white rounded px-2 flex-grow-1"
              variant={ZTextFieldVariant.inputBase}
              placeholder="جستجو پیام های آماده"
            />
            <AddQuickReply onClick={onAddQuickReplyClick} />
          </div>

          <div style={{ height: 150, overflow: "auto" }} className="p-2 ">
            <Paper style={{ height: "100%" }}>
              <QuickReplies />
            </Paper>
          </div>
        </div>
      </Paper>
      {showNewQuickReply === true && (
        <NewQuickReply onClose={onNewQuickReplyCloseClick} />
      )}
    </>
  );
};

export default QuickReplyPopup;
