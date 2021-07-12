import { Container, Heading, Text } from "@chakra-ui/react";
import AddNovelForm from "components/Novel/AddNovel/AddNovelForm";
import Head from "next/head";

const AddNovel: React.FC = () => {
  return (
    <>
      <Head>
        <title>Add a novel</title>
      </Head>
      <Container mt="16">
        <Heading>Add a Novel!</Heading>
        <Text my="4">
          Thank you for taking the time to contribute to this small project.
          Your first addition will be reviewed, and later on if no problem
          arises, you will be able to add novels without restriction.
        </Text>
      </Container>
      <AddNovelForm />
    </>
  );
};

export default AddNovel;
