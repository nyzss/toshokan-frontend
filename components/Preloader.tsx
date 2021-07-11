import {
  Center,
  Flex,
  ScaleFade,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { userStore } from "../store/Store";

// this is really weird, delete if necessary

const Preloader: React.FC = ({ children }) => {
  const { setUser } = userStore();

  const {
    isOpen: LoadingOpen,
    onClose: LoadingOnClose,
    onOpen: LoadingOnOpen,
  } = useDisclosure();

  const {
    isOpen: ContentOpen,
    onOpen: ContentOnOpen,
    onClose: ContentOnClose,
  } = useDisclosure();

  useEffect(() => {
    LoadingOnOpen();
    ContentOnClose();
    const start = async () => {
      await setUser().then(() => {
        LoadingOnClose();
        ContentOnOpen();
      });
    };
    start();
  }, [LoadingOnClose, ContentOnOpen, LoadingOnOpen, setUser, ContentOnClose]);

  return (
    <>
      <ScaleFade unmountOnExit in={LoadingOpen}>
        <Flex h="100vh" justifyContent="center" alignItems="center">
          <Center>
            <Spinner size="xl" />
            <Text>Hello!</Text>
          </Center>
        </Flex>
      </ScaleFade>
      <ScaleFade in={ContentOpen}>{children}</ScaleFade>
    </>
  );
};

export default Preloader;
