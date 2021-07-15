export interface SingleNovelProps {
  id: string | string[] | undefined;
}

const SingleNovel: React.FC<SingleNovelProps> = ({ id }) => {
  console.log(id);

  // const { data } = useQuery("single-novel", GetSingleNovel); // do here next

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default SingleNovel;
