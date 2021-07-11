import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { HomeNovels } from "utils/api";
import InfoNovelCard from "./InfoNovelCard";
import NovelCard from "./NovelCard";

export interface NovelsGridProps {}

export interface INovels {
  title: string;
  author: string;
  description: string;
  id: string;
  totalReader: number;
  createdAt: string;
  updatedAt: string;
}

const NovelsGrid: React.FC<NovelsGridProps> = () => {
  const { data: novelData, isFetched, isLoading, isFetching } = useQuery(
    "home-novels",
    HomeNovels,
    {
      staleTime: 30 * 60 * 1000, //refreshing every 30 minutes
    }
  );

  return (
    <>
      <SimpleGrid
        display={{ base: "none", md: "grid" }}
        columns={{ sm: 2, md: 2, lg: 3 }}
        mx="6"
        spacing="40px"
      >
        {novelData &&
          novelData.data.map((novel: INovels) => (
            <NovelCard key={novel.id} coverUrl={first} novel={novel} />
          ))}
      </SimpleGrid>

      <SimpleGrid mx="2" spacing="12" display={{ base: "grid", md: "none" }}>
        {novelData &&
          novelData.data.map((novel: INovels) => (
            <InfoNovelCard key={novel.id} coverUrl={first} novel={novel} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default NovelsGrid;
