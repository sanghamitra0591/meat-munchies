import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { NavMenu } from "./NavMenu";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchIcon } from "./icons/SearchIcon";

const MobNavbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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
    <>
      <Flex>
        <Box alignSelf="center">
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Spacer />
        <Box alignSelf="center" flexGrow="1">
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
              // color="rgba(0,0,0,.3)"
              fontSize={{ base: "0px", sm: "10px", md: "10px" }}
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
        <Spacer />
        <Box alignSelf="center">
          <NavMenu />
        </Box>
      </Flex>
    </>
  );
};

export default MobNavbar;
