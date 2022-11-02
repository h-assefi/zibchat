import ZAvatar from "src/base/coreServices/components/avatar/ZAvatar";
import ZBadge, {
  ZBadgeColor,
  ZBadgeVariant,
} from "src/base/coreServices/components/badge/ZBadge";
import ZButton from "src/base/coreServices/components/button/ZButton";
import { ZFormGroup } from "src/base/coreServices/components/container/ZFormGroup";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";

const UserPanelUserItem = ({
  contactId,
  count,
  message,
  time,
  title,
  onClick,
  online,
}) => {
  return (
    <div
      className="d-flex flex-row align-items-center justify-content-between px-2 my-2 pb-2 border-bottom cursor-pointer"
      onClick={() => {
        if (onClick) onClick(contactId);
      }}
    >
      <div className="col-md-3 col-lg-2">
        <ZBadge
          variant={ZBadgeVariant.dot}
          color={online ? ZBadgeColor.success : ZBadgeColor.default}
          horizontal="right"
          vertical="bottom"
          overlap="circular"
        >
          <ZAvatar width={35} height={35}></ZAvatar>
        </ZBadge>
      </div>
      <div className="col-md-9 col-lg-10">
        <div className="d-flex flex-row align-items-center justify-content-between px-1">
          <ZLabel>{title}</ZLabel>
          <ZLabel variant="caption">{time}</ZLabel>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between px-1">
          <div>
            <ZLabel variant="body2" className="text-muted">
              {message}
            </ZLabel>
          </div>
          {count && (
            <ZAvatar width={25} height={25} backgroundColor={"#6a0380"}>
              {count}
            </ZAvatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPanelUserItem;
