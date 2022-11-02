import { Paper } from "@mui/material";
import ContentPanel from "./contentPanel/ContentPanel";
import UserInfoPanel from "./userInfoPanel/UserInfoPanel";
import UsersPanel from "./userPanel/UsersPanel";

const OnlineChat = () => {
  return (
    <div className="row p-0 m-0">
      <div className="col-3">
        <UsersPanel />
      </div>
      <div className="col-6">
        <ContentPanel />
      </div>
      <div className="col-3">
        <UserInfoPanel />
      </div>
    </div>
  );
};

export default OnlineChat;
