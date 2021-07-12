import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import CoverUpload from "./CoverUpload";
import NovelDescription from "./NovelDescription";
import NovelTitle from "./NovelTitle";

export interface AddNovelFormProps {}

const AddNovelForm: React.FC<AddNovelFormProps> = () => {
  return (
    <>
      <Container>
        <Box
          bgColor={useColorModeValue("white", "gray.700")}
          w={{ base: "xl", md: "2xl", lg: "2xl" }}
          p="12"
          my="12"
          shadow="2xl"
        >
          <Stack spacing="6">
            <NovelTitle />
            <NovelDescription />
            <CoverUpload />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default AddNovelForm;
