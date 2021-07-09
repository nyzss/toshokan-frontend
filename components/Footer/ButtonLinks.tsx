import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const ButtonLinks: React.FC = () => {
  return (
    <ButtonGroup variant="ghost" color="gray.600">
      <IconButton
        as="a"
        href="https://github.com/nyzss"
        target="_blank"
        aria-label="GitHub"
        icon={<AiOutlineGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="Discord"
        icon={<IoLogoDiscord fontSize="20px" />}
      />
    </ButtonGroup>
  );
};

export default ButtonLinks;
