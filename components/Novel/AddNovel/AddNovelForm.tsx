import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import Artist from "./Artist";
import Author from "./Author";
import Chapter from "./Chapter";
import CoverUpload from "./CoverUpload";
import CoverUrl from "./CoverUrl";
import Description from "./Description";
import Language from "./Language";
import ReleaseDate from "./ReleaseDate";
import Status from "./Status";
import Title from "./Title";
import Type from "./Type";

export interface AddNovelFormProps {}

const AddNovelForm: React.FC<AddNovelFormProps> = () => {
  return (
    <>
      <Container>
        <Box
          bgColor={useColorModeValue("white", "gray.700")}
          w={{ md: "2xl", lg: "3xl" }}
          p={{ base: 4, sm: 8, md: 12 }}
          my="12"
          shadow="2xl"
        >
          <Stack spacing="6">
            <Title />
            <Flex justifyContent="center">
              <Author />
              <Artist />
            </Flex>
            <Description />
            <Language />
            <Flex justifyContent="center">
              <Chapter />
              <ReleaseDate />
            </Flex>
            <Type />
            <Status />
            <Tabs colorScheme="toshokan">
              <TabList>
                <Tab>Upload a cover</Tab>
                <Tab>Cover URL</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CoverUpload />
                </TabPanel>
                <TabPanel>
                  <CoverUrl />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
          <Button bgColor={useColorModeValue("red.300", "red.400")}>
            Submit Novel
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddNovelForm;
