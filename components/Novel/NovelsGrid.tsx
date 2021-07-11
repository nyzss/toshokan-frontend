import { SimpleGrid } from "@chakra-ui/react";
import NovelCard from "./NovelCard";
import NovelCard3 from "./NovelCard3";

export interface NovelsGridProps {}

const NovelsGrid: React.FC<NovelsGridProps> = () => {
  return (
    <>
      <SimpleGrid
        display={{ base: "none", md: "grid" }}
        columns={{ sm: 2, md: 2, lg: 3 }}
        mx="6"
        spacing="40px"
      >
        <NovelCard coverUrl={first} />
        <NovelCard coverUrl={second} />
        <NovelCard coverUrl={second} />
        <NovelCard coverUrl={first} />
        <NovelCard coverUrl={second} />
        <NovelCard coverUrl={first} />
      </SimpleGrid>

      <SimpleGrid mx="2" spacing="12" display={{ base: "grid", md: "none" }}>
        <NovelCard3 coverUrl={first} />
        <NovelCard3 coverUrl={second} />
        <NovelCard3 coverUrl={second} />
        <NovelCard3 coverUrl={first} />
        <NovelCard3 coverUrl={second} />
        <NovelCard3 coverUrl={first} />
      </SimpleGrid>
    </>
  );
};

export default NovelsGrid;
