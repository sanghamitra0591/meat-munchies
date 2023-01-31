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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((store) => store.AppReducer.cart);

  return (
    <>
      <Button
        ref={btnRef}
        background="none"
        _hover={{ background: "none", color: "#D11243" }}
        onClick={onOpen}
      >
        <Text fontWeight="normal">Cart</Text>
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" color="gray.800" />
          <DrawerHeader>
            <Text as="b" fontSize="2xl">
              Order Summary
            </Text>
          </DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
// -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
