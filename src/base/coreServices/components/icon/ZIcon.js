import Fingerprint from "@mui/icons-material/Fingerprint";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QuestionMark from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Email from "@mui/icons-material/Email";
import { Sms } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AdjustIcon from "@mui/icons-material/Adjust";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export const ZIcons = {
  accountBalance: "accountBalance",
  adjust: "adjust",
  apps: "apps",
  arrowLeft: "arrowLeft",
  arrowRight: "arrowRight",
  camera: "camera",
  close: "close",
  dashborad: "dashborad",
  email: "email",
  emptyCircle: "emptyCircle",
  fingerPrint: "fingerPrint",
  headsetMic: "headsetMic",
  home: "home",
  logout: "logout",
  menu: "menu",
  profile: "profile",
  receiptLog: "receiptLog",
  shoppingCartAdd: "shoppingCartAdd",
  sms: "sms",
  visibility: "visibility",
  visibilityOff: "visibilityOff",
};

const ZIcon = ({ icon, ...rest }) => {
  if (icon === ZIcons.fingerPrint) return <Fingerprint {...rest} />;
  else if (icon === ZIcons.camera) return <CameraAltIcon {...rest} />;
  else if (icon === ZIcons.close) return <CloseIcon {...rest} />;
  else if (icon === ZIcons.shoppingCartAdd)
    return <AddShoppingCartIcon {...rest} />;
  else if (icon === ZIcons.visibilityOff) return <VisibilityOff {...rest} />;
  else if (icon === ZIcons.visibility) return <Visibility {...rest} />;
  else if (icon === ZIcons.email) return <Email {...rest} />;
  else if (icon === ZIcons.sms) return <Sms {...rest} />;
  else if (icon === ZIcons.home) return <HomeIcon {...rest} />;
  else if (icon === ZIcons.dashborad) return <DashboardIcon {...rest} />;
  else if (icon === ZIcons.apps) return <AppsIcon {...rest} />;
  else if (icon === ZIcons.accountBalance)
    return <AccountBalanceIcon {...rest} />;
  else if (icon === ZIcons.receiptLog) return <ReceiptLongIcon {...rest} />;
  else if (icon === ZIcons.headsetMic) return <HeadsetMicIcon {...rest} />;
  else if (icon === ZIcons.adjust) return <AdjustIcon {...rest} />;
  else if (icon === ZIcons.emptyCircle)
    return <PanoramaFishEyeIcon {...rest} />;
  else if (icon === ZIcons.arrowLeft) return <ChevronLeftIcon {...rest} />;
  else if (icon === ZIcons.arrowRight) return <ChevronRightIcon {...rest} />;
  else if (icon === ZIcons.menu) return <MenuIcon {...rest} />;
  else if (icon === ZIcons.logout) return <LogoutIcon {...rest} />;
  else if (icon === ZIcons.profile) return <PermIdentityIcon {...rest} />;
  else return <QuestionMark {...rest} />;
};

export default ZIcon;
