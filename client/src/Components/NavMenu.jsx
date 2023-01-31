import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  HStack,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
import { SearchIcon } from "./icons/SearchIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { CategoryDropdownIcon } from "./icons/CategoryDropdownIcon";
import { CartIcon } from "./icons/CartIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { LoginDrawer } from "./LoginDrawer";
import { CategoryPopover } from "./CategoryPopover";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { ProfilePopup } from "./ProfilePopup";
import { CartDrawer } from "./CartDrawer";
import { useNavigate } from "react-router-dom";

export const NavMenu = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toast = useToast();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.code === "Enter") {
      if (search.length > 2) {
        navigate(`/search/:${search}`);
      } else {
        toast({
          title: "Please enter atleast 3 letters",
          status: "error",
          duration: 300,
          position: "top",
          isClosable: true,
        });
      }
    }
  };
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            bgColor="#fff"
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          ></MenuButton>
          <MenuList h="300px" w="100vw">
            <Flex direction="column" alignItems="center">
              <MenuItem border="1px solid red" display="flex">
                <Box border="1px solid blue">
                  <InputGroup
                    backgroundColor="#f8f8f8"
                    border="1px solid #eaeaea"
                    borderRadius="5px"
                    _hover={{
                      borderColor: "#cbcbcb",
                    }}
                  >
                    <Input
                      onKeyUp={(e) => handleSearch(e)}
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
              </MenuItem>
              <MenuItem>
                <Box>
                  <HStack>
                    <LocationIcon _hover={{ cursor: "pointer" }} />
                    <Text _hover={{ cursor: "pointer", color: "#D11243" }}>
                      Location
                    </Text>
                  </HStack>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box pl="1">
                  <HStack>
                    <CategoryDropdownIcon _hover={{ cursor: "pointer" }} />
                    <CategoryPopover />
                  </HStack>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box flexBasis="7%" alignSelf="center ">
                  <HStack spacing={token && token !== undefined ? "2" : "-2"}>
                    <ProfileIcon _hover={{ cursor: "pointer" }} />
                    {token && token !== undefined ? (
                      <ProfilePopup />
                    ) : (
                      <LoginDrawer />
                    )}
                  </HStack>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box flexBasis="7%" alignSelf="center">
                  <HStack spacing="-2">
                    <CartIcon _hover={{ cursor: "pointer" }} />
                    <CartDrawer />
                  </HStack>
                </Box>
              </MenuItem>
            </Flex>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
