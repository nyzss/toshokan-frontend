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
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { NovelSchema } from "utils/schema";
import { INovels } from "utils/types/novel";
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

const AddNovelForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INovels>({
    mode: "onBlur",
    resolver: yupResolver(NovelSchema),
  });

  const onSubmit: SubmitHandler<INovels> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Box
          bgColor={useColorModeValue("white", "gray.700")}
          w={{ md: "2xl", lg: "3xl" }}
          p={{ base: 4, sm: 8, md: 12 }}
          my="12"
          shadow="2xl"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing="6">
            <Title register={register} errors={errors} />
            <Flex justifyContent="center">
              <Author register={register} errors={errors} />
              <Artist register={register} errors={errors} />
            </Flex>
            <Description register={register} errors={errors} />
            <Language register={register} errors={errors} />
            <Flex justifyContent="center">
              <Chapter register={register} errors={errors} />
              <ReleaseDate register={register} errors={errors} />
            </Flex>
            <Type register={register} errors={errors} />
            <Status register={register} errors={errors} />
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
                  <CoverUrl register={register} errors={errors} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
          <Button
            type="submit"
            bgColor={useColorModeValue("red.300", "red.400")}
          >
            Submit Novel
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddNovelForm;
