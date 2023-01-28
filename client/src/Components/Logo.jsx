import React from "react";
import { Image } from "@chakra-ui/react";
import MeatMunchiesLogo from "../Assets/MeatMunchies_Logo.jpeg";

export const Logo = (props) => {
  return <Image {...props} src={MeatMunchiesLogo} w="180px" />;
};
