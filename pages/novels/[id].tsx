import SingleNovel from "components/Novel/Novel/SingleNovel";
import { useRouter } from "next/router";

const Novel: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <SingleNovel id={id}></SingleNovel>
    </>
  );
};

export default Novel;
