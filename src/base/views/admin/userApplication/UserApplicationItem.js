import { IconButton, Paper } from "@mui/material";
import * as React from "react";
import ZAvatar from "src/base/coreServices/components/avatar/ZAvatar";
import ZBadge from "src/base/coreServices/components/badge/ZBadge";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDivider from "src/base/coreServices/components/divider/ZDivider";
import ZIcon, {
  ZIconColor,
  ZIcons,
} from "src/base/coreServices/components/icon/ZIcon";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import ZMenu from "src/base/coreServices/components/menu/ZMenu";
import ZView from "src/base/coreServices/components/view/ZView";

const UserApplicationItem = ({
  displayName,
  fullName,
  photo,
  chatCount,
  chatTime,
  role,
  owner,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = React.useState([
    {
      id: "delete",
      icon: <ZIcon icon={ZIcons.deleteOutline} color={ZIconColor.error} />,
      text: "حذف",
    },
    {
      id: "edit",
      icon: <ZIcon icon={ZIcons.edit} color={ZIconColor.info} />,
      text: "ویرایش",
    },
  ]);

  React.useEffect(() => {
    if (owner && owner === true) {
      let op = [...options].filter((x) => x.id !== "delete");
      console.log(op);
      setOptions([...op]);
    }
  }, []);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onItemClick = (event, id) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "relative" }}>
      <Paper
        className="d-inline-flex"
        elevation={10}
        style={{ padding: 10, margin: 10 }}
      >
        {role === "admin" && (
          <div style={{ position: "relative", right: 20 }}>
            <ZBadge badgeContent={"admin"} />
          </div>
        )}
        <div style={{ position: "absolute", left: 10 }}>
          <ZIconButton onClick={(event) => handleOpenMenu(event)}>
            <ZIcon icon={ZIcons.moreVerticalIcon} />
          </ZIconButton>
        </div>

        <div className="d-flex flex-column justify-content-around align-items-center">
          <ZAvatar
            width={80}
            height={80}
            backgroundColor={role === "admin" ? "#6a0380" : "#fff"}
          >
            <ZAvatar
              alt={fullName}
              width={70}
              height={70}
              src={photo}
            ></ZAvatar>
          </ZAvatar>
          <ZSpacer />
          <ZLabel>{fullName}</ZLabel>
          <ZLabel className="text-muted">{displayName}</ZLabel>
          <ZDivider />
          <div className="d-flex flex-row justify-content-between container align-items-center pt-2">
            <ZFormGroup className="align-items-center">
              <ZIcon icon={ZIcons.clock} color={ZIconColor.primary} />
              <ZLabel className="text-muted">{chatTime}</ZLabel>
              <ZLabel variant="caption">ساعات مکالمات</ZLabel>
            </ZFormGroup>
            <ZFormGroup className="align-items-center">
              <ZIcon
                icon={ZIcons.messageCheckIcon}
                color={ZIconColor.primary}
              />
              <ZLabel className="text-muted">{chatCount}</ZLabel>
              <ZLabel variant="caption">تعداد مکالمات</ZLabel>
            </ZFormGroup>
          </div>
        </div>
      </Paper>
      <ZMenu
        options={options}
        anchorEl={anchorEl}
        onClose={handleClose}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default UserApplicationItem;
