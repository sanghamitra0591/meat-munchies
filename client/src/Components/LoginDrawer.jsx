import { useState, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Stack,
  Input,
  Link,
} from "@chakra-ui/react";
import { Logo } from "./Logo";

export const LoginDrawer = () => {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [valid, setValid] = useState(false);

  return (
    <>
      <Button
        ref={btnRef}
        background="none"
        _hover={{ background: "none", color: "#D11243" }}
        onClick={onOpen}
      >
        <Text fontWeight="normal">Login</Text>
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent bgImage="url(https://www.licious.in/img/rebranding/user-login-new.jpg)">
          <DrawerCloseButton size="lg" color="#ffff" />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody overflowY="hidden" pt="230px" zIndex="200">
            <Box borderRadius="5px 5px 0 0" h="100vh" bgColor="#fff">
              <Stack direction="column">
                <Box pl="3" pt="2">
                  <Text as="b" fontSize="2xl">
                    Sign In/Sign Up
                  </Text>
                </Box>
                <Box pl="4" pr="4" pt="6">
                  <Input
                    type="number"
                    variant="flushed"
                    placeholder="Enter Mobile Number"
                    borderColor="gray.400"
                    pl="1"
                    focusBorderColor="gray.300"
                  />
                </Box>
                <Box pl="4" pt="4" pr="4">
                  {!valid ? (
                    <Button
                      color="#ffffff"
                      backgroundColor="#919191"
                      fontWeight="bold"
                      size="lg"
                      fontSize="20px"
                      borderRadius="3px"
                      isDisabled
                      _hover={{ backgroundColor: "none" }}
                      _active={{ backgroundColor: "none" }}
                      w="100%"
                    >
                      Proceed Via OTP
                    </Button>
                  ) : (
                    <Button
                      color="#ffffff"
                      backgroundColor="#D11243"
                      fontWeight="bold"
                      fontSize="20px"
                      size="lg"
                      borderRadius="3px"
                      _hover={{ backgroundColor: "none" }}
                      _active={{ backgroundColor: "none" }}
                      w="100%"
                    >
                      Proceed Via OTP
                    </Button>
                  )}
                </Box>
                <Box pl="5" pt="4" pr="2">
                  <Text fontSize="md" color="#737477">
                    By signing in you agree to our
                    <Text as="span" color="#D11243">
                      {" "}
                      <Link _hover={{ textDecoration: "none" }}>
                        terms and conditions
                      </Link>
                    </Text>
                  </Text>
                </Box>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
// -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
