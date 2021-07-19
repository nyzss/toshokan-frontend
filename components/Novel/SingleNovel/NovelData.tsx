import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
export interface NovelDataProps {}

const NovelData: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Stack mx="4" direction={"row"} align={"center"}>
      <Text fontWeight={600}>
        {title}:{" "}
        <Text
          as="span"
          color={useColorModeValue("red.400", "red.300")}
          cursor="pointer"
        >
          {description}
        </Text>
      </Text>
    </Stack>
  );
};

export default NovelData;
