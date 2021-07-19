import SingleNovel from "components/Novel/SingleNovel/SingleNovel";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { GetSingleNovel } from "utils/api";
import { INovels } from "utils/types/novel";

const Novel: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<INovels>(["single-novel", id], GetSingleNovel, {
    staleTime: 5 * 60 * 1000,
  });

  data && console.log(data);

  return (
    <>
      <Head>
        <title>{data?.title || "Loading..."} - toshokan </title>
      </Head>
      {data && <SingleNovel novel={data} />}
    </>
  );
};

export default Novel;
