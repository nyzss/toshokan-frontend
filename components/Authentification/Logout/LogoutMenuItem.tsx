import { MenuItem, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { userStore } from "store/Store";
import { HandleLogout } from "utils/api";

const LogoutMenuItem: React.FC = () => {
  const toast = useToast();
  const { t } = useTranslation();

  const { setUser } = userStore((state) => state);

  const handleLogout = async () => {
    await HandleLogout().then(() => {
      setUser();
      toast({
        title: "Logged out.",
        // description: "We've created your account for you.",
        status: "success",
        duration: 800,
        isClosable: true,
      });
    });
  };

  return <MenuItem onClick={handleLogout}>{t("logout")}</MenuItem>;
};

export default LogoutMenuItem;
