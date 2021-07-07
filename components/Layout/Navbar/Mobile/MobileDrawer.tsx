import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import HomeButton from "../NavItems/HomeButton";
import LibraryButton from "../NavItems/LibraryButton";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Toshokan</DrawerHeader>

          <DrawerBody>
            <VStack>
              <HomeButton size="md" />
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton variant="solid" bgColor="red.300">
                      <ImBook />
                      <Box ml="2" flex="1" w="full">
                        Novels
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel py="6">
                    <VStack>
                      <Button w="full" variant="ghost" size="sm">
                        Popular Novels
                      </Button>
                      <Button w="full" variant="ghost" size="sm">
                        Recently Updated
                      </Button>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <LibraryButton size="md" />
            </VStack>
          </DrawerBody>

          <DrawerFooter p="2.5" borderTopWidth="2px">
            <Text mr="12">≧◡≦ | Toshokan - About</Text>
            <Link href="https://github.com/nyzss" isExternal>
              <Icon fontSize="3xl" as={AiOutlineGithub} />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
