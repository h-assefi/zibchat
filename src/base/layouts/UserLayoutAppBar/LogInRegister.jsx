import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ZButton from "src/base/coreServices/components/button/ZButton";
import { loginRegisterNavigation } from "./navigationItems";

export const LoginRegister = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { sm: "block" },
      }}
    >
      {loginRegisterNavigation.map((item) => (
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
