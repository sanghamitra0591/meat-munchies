import React from 'react'
import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import { useEffect } from 'react';
import { useState } from 'react';
import notfound from "../Assets/no-record-found.gif"

const CartPage = () => {

    const [data, setData]= useState(JSON.parse(localStorage.getItem("cart")) || []);


    const totalprice= data.length>0 ? data.reduce((total, el)=>{
        return total + el.price
    }, 0) : 0
  
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("cart")) || []);
    }, [data.length])

  const handleRemove= (id) => {
    data.splice(id, 1);
    setData(data);
    localStorage.setItem("cart", JSON.stringify(data));
  }

  return (
    <Box pt="20px">
      {data.length>0 ? <Box w="85%" m="auto" display={{base:"inline", md:"inline", lg:"flex"}} justifyContent="space-between" alignItems="flex-start">
        <Box w={{base:"85%", md:"60%", lg:"60%"}} m={{base:"auto", md:"auto", lg:""}}>
            <Text fontSize={{base:"18px", md:"22px", lg:"27px"}}>Order Summary : </Text>
            <Box w="100%">
                {data.length>0 && data.map((el, index)=>{
                    return <Box key={el._id} p="10px 0px" w={{base:"100%", md:"100%", lg:"80%"}}>
                        <Box display={{base:"flex", md:"flex", lg:"flex"}} gap="10px" justifyContent="space-between" alignItems="center">
                            <Box display={{base:"flex", md:"flex", lg:"flex"}} gap="10px" justifyContent="flex-start" alignItems="center">
                                <Image boxSize={{base:"50px", md:"70px", lg:"90px"}} src={el.image} alt="avatar" />
                                <Box fontSize={{base:"11px", md:"15px", lg:"18px"}}>
                                    <Text>{el.name}</Text>
                                    <Text>{el.net}</Text>
                                    <Text color="#D11243">₹{el.price}</Text>
                                </Box>
                            </Box>
                            <Button h={{base:"25px", md:"30px", lg:"40px"}} fontSize={{base:"10px", md:"13px", lg:"16px"}} onClick={(index)=>handleRemove(index)} bg="#D11243" color="white">Remove</Button>
                        </Box>
                    </Box>
                })}
            </Box>
        </Box>
        <Box w={{base:"80%", md:"60%", lg:"30%"}} m={{base:"auto", md:"auto", lg:""}} border="1px solid grey" rounded="10px" p={{base:"20px", md:"25px", lg:"35px"}} mt="45px">
            <Box>
                <Text fontWeight="600" fontSize={{base:"14px", md:"17px", lg:"20px"}}>Bill Details</Text>
                <Box fontSize={{base:"12px", md:"15px", lg:"18px"}}>
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
                        <Text fontSize={{base:"14px", md:"17px", lg:"20px"}}>Total</Text>
                        <Text color="#D11243">₹{totalprice}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>: <Box w="100%" textAlign="center">
      <Image w={{base:"80%", md:"80%", lg:"60%"}} m="auto" mt={{base:"13%", md:"9%", lg:"3%"}} src={notfound} alt="" />
      </Box>
      }
    </Box>
  )
}

export default CartPage
