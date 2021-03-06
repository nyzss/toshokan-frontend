import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
export interface CoverUploadProps {}

const CoverUpload: React.FC<CoverUploadProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Novel Cover <Icon color="red.300" as={BsImage} />
        </FormLabel>
        <Flex
          mt={1}
          justify="center"
          pt={5}
          pb={6}
          borderWidth={2}
          borderStyle="dashed"
          borderColor={useColorModeValue("gray.400", "gray.500")}
        >
          <Stack spacing={1} textAlign="center">
            <Icon
              mx="auto"
              boxSize={12}
              color={useColorModeValue("gray.400", "gray.500")}
              as={IoImageOutline}
            />
            <Flex
              fontSize="sm"
              color={useColorModeValue("red.400", "red.300")}
              alignItems="baseline"
            >
              <Text cursor="pointer" rounded="md" fontSize="md" pos="relative">
                Upload a file
                <VisuallyHidden>
                  <input type="file" />
                </VisuallyHidden>
              </Text>
              <Text pl={1}>or drag and drop</Text>
            </Flex>
            <Text fontSize="xs">PNG, JPG up to 5mb</Text>
          </Stack>
        </Flex>
        <FormHelperText mt="4">
          {
            "If you have an url, instead of uploading you can switch to the 'Cover URL' tab and just paste it there!"
          }
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default CoverUpload;
