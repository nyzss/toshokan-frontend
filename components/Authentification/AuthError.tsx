import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { AuthErrorProps } from "utils/types/components";

const AuthError: React.FC<AuthErrorProps> = ({ error }) => {
  return (
    <>
      {error && (
        <FormControl isInvalid>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      )}
    </>
  );
};

export default AuthError;
