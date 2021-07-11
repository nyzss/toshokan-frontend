import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { INovels } from "./NovelsGrid";
export interface InfoNovelCardProps {
  coverUrl: string;
  novel: INovels;
}

const InfoNovelCard: React.FC<InfoNovelCardProps> = ({
  coverUrl,
  novel: { title, description },
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
              h="64"
              m="4"
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
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
              {title}
              <Text color={useColorModeValue("brand.600", "brand.400")}>
                Idea
              </Text>
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
