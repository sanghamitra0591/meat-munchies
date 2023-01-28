import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import banner from "../Assets/licious-banner.jpeg";

const Home = () => {
  return (
    <Box>
      <Box>
        <Image src={banner} alt="banner" />
      </Box>
    </Box>
  )
}

export default Home
