import { Paper } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import ZDivider from "src/base/coreServices/components/divider/ZDivider";
import UserPanelContactOptions from "./UserPanelContactOptions";
import UserPanelSearch from "./UserPanelSeach";
import UserPanelUserItem from "./UserPanelUserItem";

const UsersPanel = () => {
  const [contactItem, setContactItem] = React.useState("waiting");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="d-flex flex-column">
      <Paper>
        <UserPanelSearch />
        <UserPanelContactOptions onChange={setContactItem} />
        <ZDivider />
        <div className="chat-column-userpanel">
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={3}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
          <UserPanelUserItem
            count={4}
            message="پیامی نوشته انم مشنسیت شمسنیتمشنسی مشسینمشست یم شمسی شنستی انشس"
            contactId={1}
            online
            time={"12:22"}
            title="کاربر 1235"
          />
        </div>
      </Paper>
    </div>
  );
};

export default UsersPanel;
