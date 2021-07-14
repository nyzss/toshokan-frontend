import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { NovelProps } from "../../../utils/types/novel";

const CoverUrl: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Cover URL <Icon color="red.300" as={BsImage} />
        </FormLabel>
        <Input placeholder="Cover url" {...register("coverUrl")} />
        <FormHelperText>
          The cover URL for the novel, if none leave blank.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default CoverUrl;
