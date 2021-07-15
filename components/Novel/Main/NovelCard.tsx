import { Badge, Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { NovelCardProps } from "utils/types/components";

const NovelCard: React.FC<NovelCardProps> = ({
  novel: { title, description, totalReader, coverUrl },
}) => {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="md"
          shadow="xl"
        >
          <Image
            src={coverUrl}
            fallbackSrc="https://ryrimwaobktkmpeancvt.supabase.co/storage/v1/object/public/toshokan/512x.png"
            objectFit="cover"
            alt="novel cover"
            roundedTop="sm"
            boxSize="96"
          />

          <Box py="6" px="4">
            <Box d="flex" alignItems="baseline">
              <Badge px="3" colorScheme="pink">
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
                {totalReader}
              </Box>
            </Box>

            <Box
              my="2"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>

            <Box>{description.substring(0, 130)}...</Box>

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
