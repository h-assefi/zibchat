import { Paper } from "@mui/material";
import * as React from "react";
import ZButton, {
  ZButtonVariant,
} from "src/base/coreServices/components/button/ZButton";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZDivider from "src/base/coreServices/components/divider/ZDivider";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import ZLabel from "src/base/coreServices/components/Label/ZLabel";
import UserApplicationItem from "./UserApplicationItem";
let aborted = false;

const operatorList = [
  {
    id: 1,
    displayName: "ح.آصفی",
    fullName: "حسین آصفی",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdxIswSXBCfbVfhAQ8jzRZDISLjNdA-S-RBlw8BsdXgUaIZGNfIOH9PDdHcH_Jx5bWqo&usqp=CAU",
    chatCount: 65,
    chatTime: "2:25",
    role: "admin",
    owner: true,
  },
  {
    id: 2,
    displayName: "ع.عباسی",
    fullName: "علی عباسی",
    photo: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
    chatCount: 32,
    chatTime: "1:25",
    role: "operator",
    owner: false,
  },
];
const UserApplication = () => {
  const [operators, setOperators] = React.useState(operatorList);

  React.useEffect(() => {
    aborted = false;
    GetOperators();

    return () => {
      aborted = true;
    };
  }, []);

  const GetOperators = () => {
    //LOAD OPERATORS LIST DATA
  };

  return (
    <div>
      <Paper sx={{ padding: 2 }}>
        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between">
          <div className="col-sm-8 col-lg-9 col-12">
            <ZLabel>
              شما می‌توانید ضمن مشاهده ساعات کل و تعداد مکالمه‌های پذیرفته شده
              توسط اپراتورها، تغییرات مورد نظر خود را در بخش تنظیمات اپراتورها
              اعمال کنید، اپراتور جدید اضافه و برخی اپراتورها را حذف کنید.
            </ZLabel>
          </div>
          <div className="col-sm-4 col-lg-3 col-12">
            <ZButton variant={ZButtonVariant.contained} onClick={() => {}}>
              دعوت اپراتور جدید
              <ZIcon icon={ZIcons.add}></ZIcon>
            </ZButton>
          </div>
        </div>
        <ZDivider />
        <ZSpacer />
        <div className="d-flex flex-sm-row flex-column justify-content-start align-items-center ">
          {operators.map((item) => {
            return (
              <UserApplicationItem
                key={item.id}
                chatCount={item.chatCount}
                chatTime={item.chatTime}
                displayName={item.displayName}
                fullName={item.fullName}
                photo={item.photo}
                role={item.role}
                owner={item.owner}
              />
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default UserApplication;
