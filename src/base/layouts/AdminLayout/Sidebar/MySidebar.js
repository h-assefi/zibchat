import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import ZToolTip from "src/base/coreServices/components/tooltip/ZToolTip";
import _items from "./SidebarItems";
import "src/assets/css/sidebar.css";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import { useDispatch } from "react-redux";
import { setRouteName } from "src/redux/reducers/routeSlice";
import { useNavigate } from "react-router-dom";

const MySidebar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { collapseSidebar, collapsed } = useProSidebar();
  const navItem = (item, index) => {
    const { component, title, badge, icon, menuItems, ...rest } = item;
    const Component = component;
    if (component === SubMenu) {
      return (
        <Component key={index} label={title} icon={icon}>
          {menuItems &&
            menuItems.map((item, index) => {
              return navItem(item, "menu_" + index);
            })}
        </Component>
      );
    } else {
      return (
        <ZToolTip title={title} key={index}>
          <Component
            key={index}
            {...rest}
            icon={icon}
            onClick={() => {
              if (item.to) {
                navigate(item.to);
                dispatch(setRouteName(title));
              }
            }}
          >
            {title}
          </Component>
        </ZToolTip>
      );
    }
  };

  return (
    <Sidebar
      customBreakPoint="600px"
      transitionDuration={400}
      collapsedWidth="62px"
      rtl
    >
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        <Menu>
          {_items &&
            _items.map((item, index) => {
              return navItem(item, index);
            })}
        </Menu>
        <div
          onClick={() => collapseSidebar()}
          className="p-2 border-top justify-content-center text-center cursor-pointer"
        >
          <ZIcon
            icon={collapsed ? ZIcons.arrowLeft : ZIcons.arrowRight}
            fontSize="small"
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default MySidebar;
