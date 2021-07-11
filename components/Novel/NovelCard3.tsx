import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
export interface NovelCard3Props {
  coverUrl: string;
}

const NovelCard3: React.FC<NovelCard3Props> = ({ coverUrl }) => {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box bg={useColorModeValue("white", "gray.700")} rounded="sm">
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
              Build Your New{" "}
              <Text color={useColorModeValue("brand.600", "brand.400")}>
                Idea
              </Text>
            </Text>
            <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default NovelCard3;
