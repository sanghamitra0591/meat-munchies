import { Box, Button, Divider, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";
import { useToast } from '@chakra-ui/react'

const ProductCard = ({ props }) => {

  const cartData= JSON.parse(localStorage.getItem("cart")) || [];

  const { _id, name, image, desc, net, price, orgprice, discount, delivery } =
    props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/:${_id}`);
  };

  const toast = useToast()

  const handlenotify= () => {
    toast({
      title: 'We will yotify you',
      status: 'warning',
      position: "top",
      duration: 1000,
      isClosable: true,
    })
  }

  const handlecart= () => {
    if(cartData.includes(props)){
      toast({
        title: 'Item already exists in cart',
        status: 'error',
        position: "top",
        duration: 1000,
        isClosable: true,
      })
    } else{
      cartData.push(props);
      localStorage.setItem("cart", JSON.stringify(cartData));
      toast({
        title: 'Successfully added to cart',
        status: 'success',
        position: "top",
        duration: 1000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Box
        bg="white"
        rounded="10px"
        textAlign="left"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Image onClick={handleClick} w="100%" src={image} alt="img" />
        <Box p="15px" color="#4e4b4b">
          <Text onClick={handleClick}
            h={{base:"50px", md:"65px", lg:"70px"}}
            fontWeight="600"
            fontSize={{base:"17px", md:"15px", lg:"17px"}}
          >
            {name}
          </Text>
          <Text onClick={handleClick}
            color="#757070"
            h={{base:"50px", md:"75px", lg:"55px"}}
            fontSize={{base:"14px", md:"13px", lg:"13px"}}
          >
            {desc}
          </Text>
          <Text h="30px"  onClick={handleClick} fontWeight="600" fontSize="14px">
            {net}
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={{base:"", md:"3px", lg:""}}
          >
            <Box onClick={handleClick}
              w="60%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="#D11243" fontSize={{base:"12px", md:"12px", lg:"16px"}}>
                MRP: ₹{price}
              </Text>
              {discount != 0 ? (
                <Text
                  textDecoration="line-through"
                  fontSize={{base:"10px", md:"11px", lg:"14px"}}
                >
                  MRP: ₹{orgprice}
                </Text>
              ) : (
                <Box></Box>
              )}
              {discount != 0 ? (
                <Text fontSize={{base:"11px", md:"12px", lg:"15px"}} color="green">
                  {discount}%OFF
                </Text>
              ) : (
                <Box></Box>
              )}
            </Box>
            <Button
              onClick={delivery==="Out of Stock"? handlenotify : handlecart}
              _hover={{
                color: "#D11243",
                bg: "white",
                border: "1px solid #D11243",
              }}
              disabled={delivery === "Out of Stock"}
              border={
                delivery !== "Out of Stock"
                  ? "1px solid #D11243"
                  : "1px solid #343232"
              }
              bg={delivery !== "Out of Stock" ? "#D11243" : "#f3f2f2"}
              color={delivery !== "Out of Stock" ? "white" : "#343232"}
              p="7px" 
              h={{base:"25px", md:"30px", lg:"40px"}} 
              fontSize={{base:"10px", md:"13px", lg:"16px"}}
            >
              {delivery !== "Out of Stock" ? "ADD TO CART" : "Notify Me"}
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box onClick={handleClick}
          gap="10px"
          p="10px 0px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {delivery !== "Out of Stock" ? (
            <Icon
              color="#D11243"
              boxSize={{base:"30px", md:"25px", lg:"30px"}}
              as={MdDeliveryDining}
            />
          ) : (
            <Box></Box>
          )}
          {delivery !== "Out of Stock" ? (
            <Text color="#827d7d" fontSize={{base:"16px", md:"14px", lg:"16px"}}>
              {delivery}
            </Text>
          ) : (
            <Text fontSize="16px" color="#D11243">
              {delivery}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
