import {
  Box,
  Container,
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
          w={{ base: "xl", md: "2xl", lg: "2xl" }}
          p="12"
          my="12"
          shadow="2xl"
        >
          <Stack spacing="6">
            <Title />
            <Author />
            <Artist />
            <Description />
            <Language />
            <Chapter />
            <Type />
            <Status />
            <Tabs colorScheme="toshokan">
              <TabList>
                <Tab>Upload a cover</Tab>
                <Tab>Link a cover</Tab>
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
        </Box>
      </Container>
    </>
  );
};

export default AddNovelForm;
