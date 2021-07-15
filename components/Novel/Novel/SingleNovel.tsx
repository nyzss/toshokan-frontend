export interface SingleNovelProps {
  id: string | string[] | undefined;
}

const SingleNovel: React.FC<SingleNovelProps> = ({ id }) => {
  console.log(id);

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default SingleNovel;
