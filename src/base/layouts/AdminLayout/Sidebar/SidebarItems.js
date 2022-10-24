import { MenuItem, SubMenu } from "react-pro-sidebar";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";

const _items = [
  {
    component: MenuItem,
    title: "داشبورد",
    to: "/d/board",
    icon: <ZIcon icon={ZIcons.dashborad} />,
  },
  {
    component: MenuItem,
    title: "برنامهءءها",
    to: "/d/apps",
    icon: <ZIcon icon={ZIcons.apps} />,
  },
];

export default _items;
