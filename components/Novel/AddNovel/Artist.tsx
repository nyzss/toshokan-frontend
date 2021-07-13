import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BiPaint } from "react-icons/bi";
export interface ArtistProps {}

const Artist: React.FC<ArtistProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Artist <Icon color="red.300" as={BiPaint} />
        </FormLabel>
        <Input placeholder="Artist" />
        <FormHelperText>
          The artist for the cover of this novel. (Leave blank if unknown)
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Artist;
