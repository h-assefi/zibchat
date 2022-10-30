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
  {
    component: MenuItem,
    title: "اپراتورها",
    to: "/d/operators",
    icon: <ZIcon icon={ZIcons.supportAgent} />,
  },
  {
    component: SubMenu,
    title: "دپارتمان",
    icon: <ZIcon icon={ZIcons.appartment} />,
    menuItems: [
      {
        component: MenuItem,
        title: "گروه دپارتمان",
        to: "/d/departmentgroup",
        icon: <ZIcon icon={ZIcons.appartment} />,
      },
      {
        component: MenuItem,
        title: "دپارتمان",
        to: "/d/department",
        icon: <ZIcon icon={ZIcons.appartment} />,
      },
    ],
  },
];

export default _items;
