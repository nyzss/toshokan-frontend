import { Center, Fade, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
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

  const { isOpen: ContentOpen, onOpen: ContentOnOpen } = useDisclosure();

  useEffect(() => {
    LoadingOnOpen();
    const start = async () => {
      await setUser().then(() => {
        LoadingOnClose();
        ContentOnOpen();
      });
    };
    start();
  }, [LoadingOnClose, ContentOnOpen, LoadingOnOpen, setUser]);

  return (
    <>
      <Fade unmountOnExit in={LoadingOpen}>
        <Flex h="100vh" justifyContent="center" alignItems="center">
          <Center>
            <Spinner size="xl" />
          </Center>
        </Flex>
      </Fade>
      <Fade unmountOnExit in={ContentOpen}>
        {children}
      </Fade>
    </>
  );
};

export default Preloader;
