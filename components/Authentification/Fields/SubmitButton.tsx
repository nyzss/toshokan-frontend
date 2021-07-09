import { Button, useColorModeValue } from "@chakra-ui/react";
import { SubmitButtonProps } from "../../../utils/types/components";

const SubmitButton: React.FC<SubmitButtonProps> = ({
  submitText,
  handleLogin,
}) => {
  return (
    <Button
      onClick={handleLogin}
      variant="ghost"
      bgColor={useColorModeValue("red.300", "red.300")}
      mr={3}
      type="submit"
    >
      {submitText}
    </Button>
  );
};

export default SubmitButton;
