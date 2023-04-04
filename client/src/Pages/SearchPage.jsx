import { Box, Image, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import ProductCard from '../Components/ProductCard';
import notfound from "../Assets/no-record-found.gif"

const SearchPage = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading]= useState(false);
  const { search } = useParams();
  const location= useLocation();

    useEffect(()=>{
        if(location || data.length===0){
            getData(search);
        }
    }, [data.length, search, location]);

    console.log(search.split(":")[1], data);
      
      const getData= (search)=>{
        setisLoading(true);
        return axios.get(`https://odd-boa-earrings.cyclic.app/product?input=${search.split(":")[1]}`)
            .then((r)=>{
                setisLoading(false);
                setdata(r.data)
            })
            .catch((e)=>{
              console.log(e);
              isLoading(false);
            });
      }
  return (
    <Box>
      <Box w="85%" m="auto">
        <Box mt="10px">
          <Text fontWeight="600" fontSize={{base:"20px", md:"25px", lg:"30px"}}>Search Results for : {search.split(":")[1]}</Text>
          <Text fontSize={{base:"13px", md:"15px", lg:"17px"}}>Freshest meats just for you</Text>
        </Box>
        <Box w="100%" textAlign="center">
            {isLoading && <Box>
                <Spinner w={{base:"100px", md:"120px", lg:"150px"}}
                  h={{base:"100px" , md:"120px" , lg:"150px" }}
                  m="auto"
                  mt="10%"
                  thickness='8px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='red.500'
                  size='2xl'
                />
              </Box>
            }
            { isLoading===false && data.length===0 ? 
              <Box w="100%" textAlign="center">
                <Image w={{base:"100%", md:"90%", lg:"60%"}} m="auto" mt={{base:"13%", md:"7%", lg:"1%"}} src={notfound} alt="" />
              </Box>
              : 
              <Box mt="20px">
                  <Box display="grid" gap="20px" gridTemplateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)"}}>
                      {data && data.map((el)=>{
                        return <ProductCard key={el._id} props={el} />
                      })}
                  </Box>
              </Box>
            }
          </Box>
      </Box>
    </Box>
  )
}

export default SearchPage
