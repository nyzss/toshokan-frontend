import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export interface LanguageListProps {}

const LanguageList: React.FC<LanguageListProps> = () => {
  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageList;
