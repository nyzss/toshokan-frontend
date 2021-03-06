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
import { useTranslation } from "react-i18next";
import { AiOutlineGithub } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { userStore } from "store/Store";
import { MobileDrawerProps } from "utils/types/components";
import HomeButton from "../NavButtons/HomeButton";
import LibraryButton from "../NavButtons/LibraryButton";
import LoginNavButton from "../NavButtons/LoginNavButton";
import RegisterNavButton from "../NavButtons/RegisterNavButton";

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { user } = userStore((state) => state);

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
                        {t("novels")}
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
            {!user && (
              <Box
              // mt="64" //this is for my sanity
              >
                <VStack spacing="4">
                  <LoginNavButton width="full" />
                  <RegisterNavButton width="full" />
                </VStack>
              </Box>
            )}
          </DrawerBody>

          <DrawerFooter p="2.5" borderTopWidth="2px">
            <Text mr="12">????????? | Toshokan - About</Text>
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
