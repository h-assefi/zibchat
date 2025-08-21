import { Box } from "@mui/material";
import { headerNavigation } from "./navigationItems";
import ZButton from "src/base/coreServices/components/button/ZButton";
import { useNavigate } from "react-router-dom";

export const HeaderNavigation = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
      {headerNavigation.map((item) => (
        <ZButton
          key={item.route}
          sx={{ color: "white" }}
          onClick={() => {
            navigate(item.route);
          }}
        >
          {item.title}
        </ZButton>
      ))}
    </Box>
  );
};
