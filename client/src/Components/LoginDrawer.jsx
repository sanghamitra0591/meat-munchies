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
  useToast,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { login_signup, verifyOTP } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginDrawer = () => {
  // const [size, setSize] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [verifyotp, setVerifyotp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const otp = useSelector((store) => store.AuthReducer.otp);
  // const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  // const isError = useSelector((store) => store.AuthReducer.isError);
  const toast = useToast();
  const navigate = useNavigate();
  const [incorrectTost, setIncorrectToast] = useState(false);

  const otpToast = (otp) => {
    toast({
      title: "OTP sent successfully .",
      description: `Your OTP is: ${otp}`,
      status: "success",
      duration: 7000,
      isClosable: true,
    });
  };

  const handle_login_signup = () => {
    if (mobileNumber) {
      dispatch(login_signup({ mobile: mobileNumber })).then((res) => {
        otpToast(res.payload.otp);
        localStorage.setItem("token", res.payload.token);
      });
      setMobileNumber("");
    }
  };

  const handle_otp_verification = () => {
    if (verifyotp) {
      dispatch(verifyOTP({ otp: verifyotp })).then((res) => {
        // console.log(res);
        // console.log("isAuth: ", isAuth, isError);
        if (res.payload.type === "success") {
          toast({
            title: "OTP Verified.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate("/", { replace: true });
        } else {
          setIncorrectToast(true);
          toast({
            title: "Incorrect OTP!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
      setVerifyotp("");
    }
  };

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
          <DrawerBody overflowY="hidden" pt="200px" zIndex="200">
            <Box borderRadius="5px 5px 0 0" h="100vh" bgColor="#fff">
              <Stack direction="column">
                <Box pl="3" pt="2">
                  <Text as="b" fontSize="2xl">
                    Sign In/Sign Up
                  </Text>
                </Box>
                <Box pl="4" pr="4" pt="6">
                  <Input
                    type="text"
                    variant="flushed"
                    placeholder="Enter Mobile Number"
                    borderColor="gray.400"
                    maxLength="10"
                    pl="1"
                    focusBorderColor="gray.300"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Box>
                <Box pl="4" pt="4" pr="4">
                  {mobileNumber.length === 10 ? (
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
                      onClick={() => {
                        handle_login_signup();
                      }}
                    >
                      Proceed Via OTP
                    </Button>
                  ) : (
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
                  )}
                </Box>
                {(otp || incorrectTost) && (
                  <>
                    <Box pl="4" pr="4" pt="5" display="hidden">
                      <Input
                        variant="flushed"
                        placeholder="Enter OTP"
                        borderColor="gray.400"
                        pl="1"
                        focusBorderColor="gray.300"
                        value={verifyotp}
                        onChange={(e) => setVerifyotp(e.target.value)}
                      />
                    </Box>
                    <Box pl="4" pt="3" pr="4">
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
                        onClick={handle_otp_verification}
                      >
                        Enter OTP
                      </Button>
                    </Box>
                  </>
                )}
                <Box pl="5" pt="1" pr="2">
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
