import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import i18n from "i18next";
import { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { languages } from "utils/i18n";
import { Lang } from "utils/types/types";

const LanguageList: React.FC = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language);

  //this whole component looks messy af, if needed look back on this

  const changeLang = ({ code }: Lang) => {
    i18n.changeLanguage(code);
    setCurrentLang(i18n.language || window.localStorage.i18n);
  };

  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
        {currentLang.toUpperCase()}
      </MenuButton>
      <MenuList>
        {languages.map((lang: Lang) => (
          <MenuItem onClick={() => changeLang(lang)} key={lang.code}>
            {lang.code.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageList;
