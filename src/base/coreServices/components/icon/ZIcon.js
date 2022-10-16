import Fingerprint from "@mui/icons-material/Fingerprint";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QuestionMark from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";

export const ZIcons = {
  close: "close",
  fingerPrint: "fingerPrint",
  shoppingCartAdd: "shoppingCartAdd",
};

const ZIcon = ({ icon }) => {
  if (icon === ZIcons.fingerPrint) return <Fingerprint />;
  else if (icon === ZIcons.close) return <CloseIcon />;
  else if (icon === ZIcons.shoppingCartAdd) return <AddShoppingCartIcon />;
  else return <QuestionMark />;
};

export default ZIcon;
