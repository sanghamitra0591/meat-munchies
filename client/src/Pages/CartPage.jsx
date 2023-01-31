import React from 'react'
import { Box, Button, Divider, Image, Text, Icon } from "@chakra-ui/react";
import { useEffect } from 'react';
import { useState } from 'react';
import notfound from "../Assets/no-record-found.gif"

const CartPage = () => {

    const [data, setData]= useState(JSON.parse(localStorage.getItem("cart")) || [])

    const totalprice= data.length>0 ? data.reduce((total, el)=>{
        return el.price
    }) : 0
  
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("cart")) || [])
    }, [data])

  const handleRemove= (id) => {
    data.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(data));
  }

  return (
    <Box>
      {data.length>0 ? <Box w="85%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="flex-start">
        <Box w={["60%", "60%", "60%"]} m={["auto", "auto", ""]} pt="20px">
            <Text fontSize={["20px", "25px", "30px"]}>Order Summary : </Text>
            <Box w="100%">
                {data.length>0 && data.map((el, index)=>{
                    return <Box key={el._id} p="10px 0px" w="80%">
                        <Box display={["inline", "flex", "flex"]} gap="10px" justifyContent="space-between" alignItems="center">
                            <Image boxSize={["50px", "70px", "90px"]} src={el.image} alt="avatar" />
                            <Box fontSize={["12px", "15px", "18px"]}>
                                <Text>{el.name}</Text>
                                <Text>{el.net}</Text>
                                <Text color="#D11243">₹{el.price}</Text>
                            </Box>
                            <Button onClick={(el)=>handleRemove(index)} bg="#D11243" color="white">Remove</Button>
                        </Box>
                    </Box>
                })}
            </Box>
        </Box>
        <Box w={["60%", "60%", "30%"]} m={["auto", "auto", ""]} border="1px solid grey" rounded="10px" p="15px">
            <Box>
                <Text fontWeight="600" fontSize={["14px", "17px", "20px"]}>Bill Details</Text>
                <Box fontSize={["12px", "15px", "18px"]}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>subtotal</Text>
                        <Text>₹{totalprice}</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Delivery Charge</Text>
                        <Text>₹0</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Discount</Text>
                        <Text>₹0</Text>
                    </Box>
                    <Divider />
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize={["14px", "17px", "20px"]}>Total</Text>
                        <Text color="#D11243">₹{totalprice}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>: <Box w="100%" textAlign="center">
      <Image w={["80%", "80%", "60%"]} m="auto" mt={["13%", "9%", "3%"]} src={notfound} alt="" />
      </Box>
      }
    </Box>
  )
}

export default CartPage
