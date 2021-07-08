import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { HandleLogout } from "../../../../utils/api";

const AvatarNav: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Menu>
      <MenuButton>
        <Avatar
          size="sm"
          name="username here"
          src="https://i.imgur.com/f5NMjGn.jpg"
          cursor="pointer"
        />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={HandleLogout}>{t("logout")}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarNav;
