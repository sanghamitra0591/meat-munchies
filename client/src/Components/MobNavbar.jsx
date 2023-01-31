import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { NavMenu } from "./NavMenu";

const MobNavbar = () => {
  return (
    <>
      <Flex>
        <NavMenu />
      </Flex>
    </>
  );
};

export default MobNavbar;
