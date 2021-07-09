import { Avatar, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import LogoutMenuItem from "../../../Authentification/Logout/LogoutMenuItem";

const AvatarNav: React.FC = () => {
  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar
          size="sm"
          name="username here"
          src="https://i.imgur.com/f5NMjGn.jpg"
          cursor="pointer"
        />
      </MenuButton>
      <MenuList w="50%">
        <LogoutMenuItem />
      </MenuList>
    </Menu>
  );
};

export default AvatarNav;
