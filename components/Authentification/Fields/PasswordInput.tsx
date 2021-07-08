import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Dispatch, useState, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { PasswordInputProps } from "../../../utils/types";

const PasswordInput: React.FC<PasswordInputProps> = ({
  inputColor,
  password,
  setPassword,
}) => {
  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  return (
    <FormControl mt={4}>
      <FormLabel>{t("password")}</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          bgColor={inputColor}
          isInvalid
          errorBorderColor="red.500"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordInput;
