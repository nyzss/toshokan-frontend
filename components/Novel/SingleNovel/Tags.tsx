import { Box, SimpleGrid, Tag, Tooltip } from "@chakra-ui/react";
import { ITags } from "utils/types/novel";

const Tags: React.FC<{ tags: ITags[] }> = ({ tags }) => {
  return (
    <>
      <Box w="100%">
        <SimpleGrid spacing={2} columns={3} marginTop="5">
          {tags &&
            tags.map((tags) => (
              <Tooltip key={tags.id} label={tags.description}>
                <Tag
                  size="md"
                  variant="solid"
                  colorScheme="toshokan"
                  cursor="pointer"
                >
                  {tags.title}
                </Tag>
              </Tooltip>
            ))}{" "}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Tags;
