import * as React from "react";
import ZBadge, {
  ZBadgeVariant,
} from "src/base/coreServices/components/badge/ZBadge";
import ZSimpleDropdown from "src/base/coreServices/components/dropdown/ZSimpleDropdown";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";

const UserPanelContactOptions = ({ onChange }) => {
  const [contactItem, setContactItem] = React.useState("waiting");
  const [contactsItems, setContactItems] = React.useState([
    {
      name: "مکالمهءءهای من",
      id: "myChats",
      count: 10,
      badge: false,
    },
    {
      name: "در حال انتظار",
      id: "waiting",
      count: 2,
      badge: true,
    },
    {
      name: "بسته شده",
      id: "closed",
      count: 0,
      badge: false,
    },
  ]);
  return (
    <div className="d-flex flex-row align-items-center justify-content-between">
      <div className="col">
        <ZSimpleDropdown
          data={contactsItems}
          size="small"
          textField="name"
          valueField="id"
          value={contactItem}
          width={"94%"}
          itemTempelate={(item) => {
            return (
              <div
                className="d-flex flex-row justify-content-between "
                style={{ width: "100%" }}
              >
                <div className="d-flex flex-row">
                  <ZLabel>{item.name}</ZLabel>
                  {item.badge && <ZBadge variant={ZBadgeVariant.dot}></ZBadge>}
                </div>
                <ZLabel>{item.count}</ZLabel>
              </div>
            );
          }}
          onChange={(data, value) => {
            setContactItem(value.props.value);
            if (onChange) onChange(value.props.value);
          }}
        />
      </div>
    </div>
  );
};

export default UserPanelContactOptions;
