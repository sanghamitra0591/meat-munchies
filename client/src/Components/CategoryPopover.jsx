import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Box,
} from "@chakra-ui/react";
import { CategoryTab } from "./CategoryTab";

export const CategoryPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          _hover={{ background: "none", color: "#D11243" }}
          tabIndex="0"
          role="button"
          aria-label="Category"
          children="Categories"
        />
      </PopoverTrigger>
      <PopoverContent w="500px">
        <PopoverArrow bg="pink.500" />
        <PopoverBody>
          <CategoryTab />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
