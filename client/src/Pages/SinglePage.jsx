import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Icon, Image, Link, Text } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import weight from "../Assets/singlepage/weight.png"
import pieces from "../Assets/singlepage/pieces.png"
import { useParams } from "react-router-dom";
import axios from "axios";
import notfound from "../Assets/no-record-found.gif"


const SinglePage = () => {
    const defaultdata= {
        "name": "Chicken Drumstick - Pack Of 6",
        "image": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d667aa91-ba62-2117-a672-034b58bbac39/original/Chicken-Drumstick---Hero-Shot.jpg",
        "price": 269,
        "orgprice": 299,
        "discount": 15,
        "desc": "Juicy, meaty pieces by a dedicated team of Nakhrebaaz",
        "pieces": 6,
        "weight": 0,
        "net": "Pieces: 6",
        "delivery": "Today in-90 min",
        "category": "Chicken",
        "subcat": "specialitycut"
    }
    const [data, setdata] = useState({});
    const [dataarr, setdataarr]= useState([]);
    const { id } = useParams();

    useEffect(()=>{
        if(dataarr.length===0){
            getData();
        }
    }, [dataarr.length]);
      
      const getData= ()=>{
        return axios.get(`https://odd-boa-earrings.cyclic.app/product/${id.split(":")[1]}`)
            .then((r)=>{
                setdataarr(r.data)
                setdata(r.data[0])
            })
            .catch((e)=>console.log(e));
        }

  return (
    <Box bg="#F7F6F6">
      {dataarr.length>0 ? <Box w="87%" m="auto">
        <Box display="flex" alignItems="center" gap="5px" p="20px 0px" fontSize={{base:"10px", md:"12px", lg:"14px"}}>
          <Link href="/">Home</Link>
          <Icon transform="rotate(90deg)" boxSize="10px" as={TriangleUpIcon} />
          <Link href="/chicken">Chicken</Link>
          <Icon transform="rotate(90deg)" boxSize="10px" as={TriangleUpIcon} />
          <Link href={`/product/:${id.split(":")[1]}`} color="#D11243">{data.name}</Link>
        </Box>
        <Box w="90%" m="auto" bg="white" p="15px">
            <Box display={{base:"inline", md:"inline", lg:"flex"}} justifyContent="space-between">
                <Box w={{base:"87%", md:"87%", lg:"47%"}} m={{base:"auto", md:"auto", lg:""}}>
                    <Image w="100%" rounded="10px" src={data.image} alt="img" />
                </Box>
                <Box w={{base:"87%", md:"87%", lg:"51%"}} m={{base:"auto", md:"auto", lg:""}} color="#5b5757">
                    <Text fontWeight="600" fontSize="21px">{data.name}</Text>
                    <Text>{data.subcat}</Text>
                    <Divider m="7px auto" />
                    <Text fontSize="13px">When it comes to food, what is more comforting than a home-cooked chicken meal?
                        Chicken recipes are always a favourite in households, as they are an ideal meal for any day of the
                        week.
                    </Text>
                    <Text fontSize="13px">
                        A common type of poultry, this ‘white meat’ is a supper staple and can be used to rustle up
                        quite a few delicious recipes.
                    </Text>
                    <br/>
                    <Text fontSize="13px">
                        From adding flavour as a side dish, to being the heart of your elaborate home-cooked feast, 
                        chicken can be prepared in many ways. You can enjoy it baked, roasted; or turn it into a 
                        biryani, korma, butter masala, pasta, soup and more.
                    </Text>
                    <br />
                    <Text fontSize="13px">
                        Chicken provides a good amount of nutrition and is also affordable, making it an ideal choice among 
                        food enthusiasts, and households. This white meat is known to support good health by providing high 
                        levels of lean protein, carbohydrates and fat.
                    </Text>
                    <Box w="95%" m="auto" rounded="5px" mt="10px" border="1px solid #b4b1b1" p="15px" textAlign="center" display="flex" justifyContent="space-between" alignItems="center">
                        <Box w="50%" borderRight="1px solid #b4b1b1" fontSize={{base:"11px", md:"13px", lg:"15px"}} display="flex" alignItems="center" justifyContent="center">
                            <Image boxSize={{base:"13px", md:"16px", lg:"20px"}} src={pieces} alt="img" />
                            <Text>No. of pieces {data.pieces===0? "N/A" : data.pieces}</Text>
                        </Box>
                        <Box w="50%" fontSize={{base:"11px", md:"13px", lg:"15px"}} display="flex" alignItems="center" justifyContent="center">
                            <Image boxSize={{base:"13px", md:"16px", lg:"20px"}} src={weight} alt="img" />
                            <Text>{data.weight===0? `Weight : N/A` : `${data.net} gms`}</Text>
                        </Box>
                    </Box>
                    <Box w="95%" m="auto" display="flex" mt="10px" justifyContent="space-between" alignItems="center" gap={{base:"", md:"3px", lg:""}}>
                        <Box w="50%" display="flex" justifyContent="space-between" alignItems="center">
                            <Text color="#D11243" fontWeight="bold" fontSize={{base:"13px", md:"14px", lg:"23px"}}>₹{data.price}</Text>
                            {data.discount!=0 ? <Text textDecoration="line-through" fontSize={{base:"10px", md:"11px", lg:"18px"}}>MRP: ₹{data.orgprice}</Text> : <Box></Box>}
                            {data.discount!=0 ? <Text fontSize={{base:"11px", md:"12px", lg:"20px"}} color="green">{data.discount}%OFF</Text> : <Box></Box>}
                        </Box>
                        <Button _hover={{color:"#D11243", bg:"white", border:"1px solid #D11243"}} border="1px solid #D11243" bg="#D11243" color="white" p="7px" fontSize={{base:"13px", md:"11px", lg:"13px"}}>ADD TO CART</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box> 
      : 
        <Box w="100%" textAlign="center">
        <Image w={{base:"80%", md:"80%", lg:"60%"}} m="auto" mt={{base:"13%", md:"9%", lg:"3%"}} src={notfound} alt="" />
        </Box>
      }
    </Box>
  )
}

export default SinglePage
