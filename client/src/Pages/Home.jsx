import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import banner from "../Assets/licious-banner.jpeg";

const Home = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Image src={banner} alt="banner" />
        </Box>
        <Box>
          <Box w="85%" m="auto">
            <Box>
              <Text>Shop by categories</Text>
              <Text>Freshest meats just for you</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
