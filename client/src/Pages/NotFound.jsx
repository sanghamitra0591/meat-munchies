import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import pagenotfound from "../Assets/notfound.gif"

const NotFound = () => {
  return (
    <Box>
      <Box w="85%" m="auto">
        <Image w={{base:"100%", md:"90%", lg:"70%"}} m="auto" src={pagenotfound} alt="img" />
      </Box>
    </Box>
  )
}

export default NotFound
