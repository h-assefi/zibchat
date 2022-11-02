import Fingerprint from "@mui/icons-material/Fingerprint";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QuestionMark from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Email from "@mui/icons-material/Email";
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
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SearchIcon from "@mui/icons-material/Search";
import SmsIcon from "@mui/icons-material/Sms";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import AddCommentIcon from "@mui/icons-material/AddComment";

export const ZIconColor = {
  inherit: "inherit",
  action: "action",
  disabled: "disabled",
  primary: "primary",
  secondary: "secondary",
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

export const ZIcons = {
  accountBalance: "accountBalance",
  add: "add",
  addMessage: "addMessage",
  adjust: "adjust",
  appartment: "appartment",
  apps: "apps",
  arrowLeft: "arrowLeft",
  arrowRight: "arrowRight",
  attachFile: "attachFile",
  camera: "camera",
  check: "check",
  clock: "clock",
  close: "close",
  dashborad: "dashborad",
  delete: "delete",
  deleteOutline: "deleteOutline",
  diversity3Icon: "diversity3Icon",
  edit: "edit",
  email: "email",
  emojiLanugh: "emojiLanugh",
  emptyCircle: "emptyCircle",
  fingerPrint: "fingerPrint",
  headsetMic: "headsetMic",
  home: "home",
  inventory: "inventory",
  logout: "logout",
  menu: "menu",
  messageCheckIcon: "messageCheckIcon",
  mic: "mic",
  moreVerticalIcon: "moreVerticalIcon",
  moveUp: "moveUp",
  profile: "profile",
  receiptLog: "receiptLog",
  search: "search",
  send: "send",
  shoppingCartAdd: "shoppingCartAdd",
  sms: "sms",
  supportAgent: "supportAgent",
  visibility: "visibility",
  visibilityOff: "visibilityOff",
};

const ZIcon = ({ icon, ...rest }) => {
  if (icon === ZIcons.fingerPrint) return <Fingerprint {...rest} />;
  else if (icon === ZIcons.add) return <AddIcon {...rest} />;
  else if (icon === ZIcons.addMessage) return <AddCommentIcon {...rest} />;
  else if (icon === ZIcons.attachFile) return <AttachFileIcon {...rest} />;
  else if (icon === ZIcons.mic) return <MicIcon {...rest} />;
  else if (icon === ZIcons.send) return <SendIcon {...rest} />;
  else if (icon === ZIcons.check) return <CheckIcon {...rest} />;
  else if (icon === ZIcons.camera) return <CameraAltIcon {...rest} />;
  else if (icon === ZIcons.moveUp) return <MoveUpIcon {...rest} />;
  else if (icon === ZIcons.close) return <CloseIcon {...rest} />;
  else if (icon === ZIcons.emojiLanugh) return <InsertEmoticonIcon {...rest} />;
  else if (icon === ZIcons.shoppingCartAdd)
    return <AddShoppingCartIcon {...rest} />;
  else if (icon === ZIcons.visibilityOff) return <VisibilityOff {...rest} />;
  else if (icon === ZIcons.visibility) return <Visibility {...rest} />;
  else if (icon === ZIcons.email) return <Email {...rest} />;
  else if (icon === ZIcons.sms) return <SmsIcon {...rest} />;
  else if (icon === ZIcons.search) return <SearchIcon {...rest} />;
  else if (icon === ZIcons.home) return <HomeIcon {...rest} />;
  else if (icon === ZIcons.dashborad) return <DashboardIcon {...rest} />;
  else if (icon === ZIcons.apps) return <AppsIcon {...rest} />;
  else if (icon === ZIcons.accountBalance)
    return <AccountBalanceIcon {...rest} />;
  else if (icon === ZIcons.receiptLog) return <ReceiptLongIcon {...rest} />;
  else if (icon === ZIcons.headsetMic) return <HeadsetMicIcon {...rest} />;
  else if (icon === ZIcons.adjust) return <AdjustIcon {...rest} />;
  else if (icon === ZIcons.inventory) return <Inventory2Icon {...rest} />;
  else if (icon === ZIcons.emptyCircle)
    return <PanoramaFishEyeIcon {...rest} />;
  else if (icon === ZIcons.arrowLeft) return <ChevronLeftIcon {...rest} />;
  else if (icon === ZIcons.arrowRight) return <ChevronRightIcon {...rest} />;
  else if (icon === ZIcons.menu) return <MenuIcon {...rest} />;
  else if (icon === ZIcons.logout) return <LogoutIcon {...rest} />;
  else if (icon === ZIcons.profile) return <PermIdentityIcon {...rest} />;
  else if (icon === ZIcons.moreVerticalIcon) return <MoreVertIcon {...rest} />;
  else if (icon === ZIcons.diversity3Icon) return <Diversity3Icon {...rest} />;
  else if (icon === ZIcons.appartment) return <ApartmentIcon {...rest} />;
  else if (icon === ZIcons.delete) return <DeleteIcon {...rest} />;
  else if (icon === ZIcons.clock) return <AccessTimeIcon {...rest} />;
  else if (icon === ZIcons.supportAgent) return <SupportAgentIcon {...rest} />;
  else if (icon === ZIcons.edit) return <EditIcon {...rest} />;
  else if (icon === ZIcons.messageCheckIcon)
    return <MarkChatReadIcon {...rest} />;
  else if (icon === ZIcons.deleteOutline)
    return <DeleteOutlineIcon {...rest} />;
  else return <QuestionMark {...rest} />;
};

export default ZIcon;
