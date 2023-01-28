import React from "react";
import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "./icons/SearchIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { CategoryDropdownIcon } from "./icons/CategoryDropdownIcon";
import { CartIcon } from "./icons/CartIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { LoginDrawer } from "./LoginDrawer";
import { CategoryPopover } from "./CategoryPopover";
import { Logo } from "./Logo";

const Navbar = () => {
  return (
    <Box>
      <Flex
        mt="10px"
        alignItems="center"
        justifyContent="space-around"
        display="flex"
        flexDirection={{ sm: "column", md: "column", lg: "row" }}
        pl="8"
        pr="8"
        pb="8"
      >
        <Box flexBasis="12%">
          <Link>
            <Logo />
          </Link>
        </Box>
        <Box flexBasis="12%">
          <HStack pt="2">
            <LocationIcon _hover={{ cursor: "pointer" }} />
            <Text _hover={{ cursor: "pointer", color: "#D11243" }}>
              Location
            </Text>
          </HStack>
        </Box>
        <Box flexBasis="35%">
          <InputGroup
            backgroundColor="#f8f8f8"
            border="1px solid #eaeaea"
            borderRadius="5px"
            _hover={{
              borderColor: "#cbcbcb",
            }}
          >
            <Input
              type="text"
              placeholder="Search for any delicious product"
              color="rgba(0,0,0,.3)"
              borderRadius="5px"
              _hover={{
                transition: ".3s",
                cursor: "pointer",
              }}
              focusBorderColor="transparent"
            />
            <InputRightElement
              pointerEvents="none"
              pr="4"
              children={<SearchIcon />}
            />
          </InputGroup>
        </Box>
        <Box flexBasis="9%">
          <HStack pt="2">
            <CategoryDropdownIcon _hover={{ cursor: "pointer" }} />
            <CategoryPopover />
          </HStack>
        </Box>
        <Box flexBasis="7%">
          <HStack spacing="-2">
            <ProfileIcon _hover={{ cursor: "pointer" }} />
            <LoginDrawer />
          </HStack>
        </Box>
        <Box flexBasis="7%">
          <HStack pt="2">
            <CartIcon _hover={{ cursor: "pointer" }} />
            <Box
              _hover={{
                background: "none",
                color: "#D11243",
                cursor: "pointer",
              }}
            >
              <Text>Cart</Text>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
