import { MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { userStore } from "../../../store/Store";
import { HandleLogout } from "../../../utils/api";

const LogoutMenuItem: React.FC = () => {
  const { t } = useTranslation();

  const { setUser } = userStore((state) => state);

  const handleLogout = async () => {
    await HandleLogout().then(() => {
      setUser();
    });
  };

  return <MenuItem onClick={handleLogout}>{t("logout")}</MenuItem>;
};

export default LogoutMenuItem;
