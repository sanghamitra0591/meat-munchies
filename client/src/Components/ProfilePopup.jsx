import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ProfilePopup = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");
    localStorage.clear();
    toast({
      title: "Logout Successfull.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/", { replace: true });
  };

  return (
    <Menu isLazy placement="auto">
      <MenuButton _hover={{ color: "#D11243" }}>Profile</MenuButton>
      <MenuList
        borderRadius="3"
        boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <MenuItem>Account</MenuItem>
        <MenuDivider />
        <MenuItem>My Rewards</MenuItem>
        <MenuDivider />
        <MenuItem>My Orders</MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

// box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
