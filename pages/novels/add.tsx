import {
  Container,
  Divider,
  Heading,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import AddNovelForm from "components/Novel/AddNovel/AddNovelForm";
import Head from "next/head";

const AddNovel: React.FC = () => {
  const discord = "nyzs#0001";
  const { hasCopied, onCopy } = useClipboard(discord);

  return (
    <>
      <Head>
        <title>Add a novel</title>
      </Head>
      <Container mt="12">
        <Heading>Add a Novel!</Heading>
        <Text my="4">
          Thank you for taking the time to contribute to this small project.
          Your first addition will be reviewed, and later on if no problem
          arises, you will be able to add novels without restriction.
        </Text>
        <Divider my="4" />
        <Text>
          If you run into problems please contact me on discord:{" "}
          <Text color="red.300" as="span" cursor="pointer" onClick={onCopy}>
            {hasCopied ? "Copied!" : discord}
          </Text>{" "}
          - if you can still not contact me please open an issue on the github
          repository.
        </Text>
      </Container>
      <AddNovelForm />
    </>
  );
};

export default AddNovel;
