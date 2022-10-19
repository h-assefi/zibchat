import Fingerprint from "@mui/icons-material/Fingerprint";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QuestionMark from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Email from "@mui/icons-material/Email";
import { Sms } from "@mui/icons-material";

export const ZIcons = {
  close: "close",
  email: "email",
  fingerPrint: "fingerPrint",
  shoppingCartAdd: "shoppingCartAdd",
  sms: "sms",
  visibility: "visibility",
  visibilityOff: "visibilityOff",
};

const ZIcon = ({ icon }) => {
  if (icon === ZIcons.fingerPrint) return <Fingerprint />;
  else if (icon === ZIcons.close) return <CloseIcon />;
  else if (icon === ZIcons.shoppingCartAdd) return <AddShoppingCartIcon />;
  else if (icon === ZIcons.visibilityOff) return <VisibilityOff />;
  else if (icon === ZIcons.visibility) return <Visibility />;
  else if (icon === ZIcons.email) return <Email />;
  else if (icon === ZIcons.sms) return <Sms />;
  else return <QuestionMark />;
};

export default ZIcon;
