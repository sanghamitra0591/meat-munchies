import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

const Navbar = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
    <Flex
      pt="3"
      alignItems="center"
      justifyContent="space-around"
      display="flex"
      flexDirection={{ sm: "column", md: "column", lg: "row" }}
      pl="8"
      pr="8"
      pb="3"
      boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px"
      position="sticky"
      bgColor="#fff"
      top="0"
      zIndex={1000}
    >
      <Box flexBasis="12%" alignSelf="center">
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box flexBasis="9%" alignSelf="center">
        <HStack>
          <LocationIcon _hover={{ cursor: "pointer" }} />
          <Text _hover={{ cursor: "pointer", color: "#D11243" }}>Location</Text>
        </HStack>
      </Box>
      <Box flexBasis="35%" alignSelf="center">
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
      <Box flexBasis="9%" alignSelf="center">
        <HStack>
          <CategoryDropdownIcon _hover={{ cursor: "pointer" }} />
          <CategoryPopover />
        </HStack>
      </Box>
      <Box flexBasis="7%" alignSelf="center ">
        <HStack spacing={localStorage.getItem("token") ? "2" : "-2"}>
          <ProfileIcon _hover={{ cursor: "pointer" }} />
          {localStorage.getItem("token") ? <ProfilePopup /> : <LoginDrawer />}
        </HStack>
      </Box>
      <Box flexBasis="7%" alignSelf="center">
        <HStack spacing="-2">
          <CartIcon _hover={{ cursor: "pointer" }} onClick= {()=>navigate("/cart")} />
          {/* <CartDrawer /> */}
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
