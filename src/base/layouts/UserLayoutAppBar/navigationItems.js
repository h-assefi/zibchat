import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";

export const headerNavigation = [
  { title: "خانه", route: "/" },
  { title: "درباره ما", route: "/aboutus" },
  { title: "امکانات", route: "/features" },
  { title: "قیمت", route: "/pricing" },
  { title: "پایگاه دانش", route: "/tutorial" },
];

export const loginRegisterNavigation = [
  {
    title: "ورود / عضویت",
    route: "/login",
    icon: <ZIcon icon={ZIcons.login} />,
  },
];
