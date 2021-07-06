import { Button, useColorModeValue } from "@chakra-ui/react";

export interface SubmitButtonProps {
  submitText: string;
}

const SubmitButton: React.SFC<SubmitButtonProps> = ({ submitText }) => {
  return (
    <Button
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
