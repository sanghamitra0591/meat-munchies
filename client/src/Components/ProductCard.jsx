import { Box, Button, Divider, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { MdDeliveryDining } from 'react-icons/md';

const ProductCard = ({props}) => {
  const {name, image, desc, net, price, orgprice, discount, delivery}= props;
  const navigate= useNavigate();
  const handleClick= () => {
    navigate("/id");
  }
  return (
    <Box onClick={handleClick}>
      <Box bg="white" rounded="10px" textAlign="left" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Image w="100%" src={image} alt="img" />
        <Box p="15px" color="#4e4b4b">
          <Text h={["50px","65px", "70px"]} fontWeight="600" fontSize={["17px", "15px", "17px"]}>{name}</Text>
          <Text color="#757070" h={["50px","75px", "55px"]} fontSize={["14px", "13px", "13px"]}>{desc}</Text>
          <Text h="30px" fontWeight="600" fontSize="14px">{net}</Text>
          <Box display="flex" justifyContent="space-between" alignItems="center" gap={["", "3px", ""]}>
            <Box w="60%" display="flex" justifyContent="space-between" alignItems="center">
              <Text color="#D11243" fontSize={["12px", "12px", "16px"]}>MRP: ₹{price}</Text>
              {discount!=0 ? <Text textDecoration="line-through" fontSize={["10px", "11px", "14px"]}>MRP: ₹{orgprice}</Text> : <Box></Box>}
              {discount!=0 ? <Text fontSize={["11px", "12px", "15px"]} color="green">{discount}%OFF</Text> : <Box></Box>}
            </Box>
            <Button _hover={{color:"#D11243", bg:"white", border:"1px solid #D11243"}} border="1px solid #D11243" bg="#D11243" color="white" p="7px" fontSize={["13px", "11px", "13px"]}>ADD TO CART</Button>
          </Box>
        </Box>
        <Divider />
        <Box gap="10px" p="10px 0px" display="flex" justifyContent="center" alignItems="center">
          { delivery!=="Out of Stock" ? <Icon color="#D11243" boxSize={["30px", "25px", "30px"]} as={MdDeliveryDining} /> : <Box></Box>}
          { delivery!=="Out of Stock" ? <Text color="#827d7d" fontSize={["16px", "14px", "16px"]}>{delivery}</Text> : <Text fontSize="16px" color="#D11243">{delivery}</Text>}
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
