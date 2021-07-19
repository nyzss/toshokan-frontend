import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { INovels } from "utils/types/novel";

const SingleNovel: React.FC<{ novel: INovels }> = ({ novel }) => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Toshokan</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Novels</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{novel.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link>
                <Image
                  borderRadius="lg"
                  src={"https://source.unsplash.com/1600x900/?japan"}
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">novel title here</Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              novel detail here, like status, id create at etc..
            </Text>
            <HStack
              marginTop="2"
              spacing="2"
              display="flex"
              alignItems="center"
            >
              <Text fontWeight="medium">{novel.author}</Text>
              <Text>—</Text>
              <Text>idk probly date?</Text>
            </HStack>
          </Box>
        </Box>
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <SimpleGrid spacing={2} columns={3} marginTop="5">
                {novel.tags &&
                  novel.tags.map((tags) => (
                    <Tag
                      key={tags.id}
                      size="md"
                      variant="solid"
                      colorScheme="toshokan"
                    >
                      {tags.title}
                    </Tag>
                  ))}{" "}
                {/** here list the tags of the novel */}
              </SimpleGrid>
            </Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading>Description</Heading>
          <Text fontSize="lg">{novel.description}</Text>
        </VStack>
      </Container>
    </>
  );
};

export default SingleNovel;
