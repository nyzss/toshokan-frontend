import { Badge, Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

export interface NovelCardProps {
  coverUrl: string;
}

const NovelCard: React.FC<NovelCardProps> = ({ coverUrl }) => {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="md"
          shadow="lg"
        >
          <Image
            src={coverUrl}
            // objectFit="cover"
            alt="novel cover"
            roundedTop="sm"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" colorScheme="pink">
                New
              </Badge>
              <Box
                color={useColorModeValue("gray.500", "gray.300")}
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                this is a test textext
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              This is a novel title
            </Box>

            <Box>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              unde iure quibusdam!
            </Box>

            {/* <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < novelrating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  review count reviews
                </Box>
              </Box> */}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default NovelCard;
