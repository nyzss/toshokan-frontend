import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { INovels } from "../../../utils/types/novel";
import NovelData from "./NovelData";
import Tags from "./Tags";

const SingleNovel: React.FC<{ novel: INovels }> = ({ novel }) => {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack>
          <Image
            rounded="sm"
            shadow="2xl"
            alt={`The cover for the novel ${novel.title}`}
            src={novel.coverUrl}
            objectFit="cover"
            // maxW="xl"
          />
          <Tags tags={novel.tags!} />
        </VStack>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("red.300", "red.400")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            {novel.language}
          </Text>

          <Heading>{novel.title}</Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <NovelData title="Author" description={novel.author} />
            {novel.artist && (
              <NovelData title="Artist" description={novel.artist} />
            )}
            <NovelData title="Status" description={novel.status} />
          </Stack>
        </Stack>
      </SimpleGrid>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading>Description</Heading>
        <Text fontSize="lg">{novel.description}</Text>
      </VStack>
    </Container>
  );
};

export default SingleNovel;
