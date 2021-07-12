import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NovelCardProps } from "utils/types/components";

const InfoNovelCard: React.FC<NovelCardProps> = ({
  novel: { title, description, author, coverUrl },
}) => {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.700")}
          shadow="2xl"
          rounded="sm"
        >
          <Box>
            <Image
              src={coverUrl}
              alt="novel cover"
              bgSize="cover"
              h="72"
              m="4"
              mb="0"
              rounded="sm"
            />
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "50%" }}
          >
            <Badge px="3" colorScheme="pink">
              New
            </Badge>

            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("gray.900", "white")}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              fontSize={{ base: "1xl", md: "3xl" }}
              fontWeight="medium"
              mt="1"
              color={useColorModeValue("gray.500", "gray.200")}
            >
              {author}
            </Text>
            <Text
              mt={4}
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {description.substring(0, 130)}...
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default InfoNovelCard;
