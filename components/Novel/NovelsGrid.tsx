import { SimpleGrid } from "@chakra-ui/react";
import NovelCard from "./NovelCard";

export interface NovelsGridProps {}

const NovelsGrid: React.FC<NovelsGridProps> = () => {
  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <NovelCard coverUrl={first} />
        <NovelCard coverUrl={second} />
        <NovelCard coverUrl={second} />
        <NovelCard coverUrl={first} />
        <NovelCard coverUrl={second} />
        <NovelCard coverUrl={first} />
      </SimpleGrid>
    </>
  );
};

export default NovelsGrid;
