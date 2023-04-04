import React from "react";
import { Image } from "@chakra-ui/react";
import MeatMunchiesLogo from "../Assets/MeatMunchies_Logo.jpeg";

export const Logo = (props) => {
  return <Image {...props} src={MeatMunchiesLogo} w={{base:"150px", md:"160px", lg:"180px"}} />;
};
