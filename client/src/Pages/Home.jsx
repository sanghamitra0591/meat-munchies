import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import banner from "../Assets/HomePage/licious-banner.jpeg";
import banner2 from "../Assets/HomePage/banner2.jpeg";
import logo from "../Assets/HomePage/meatmunchies-logo.png";
import deals from "../Assets/HomePage/deals.png";
import chicken from "../Assets/HomePage/chicken.png";
import fish from "../Assets/HomePage/fish.png";
import mutton from "../Assets/HomePage/mutton.png";
import readytocook from "../Assets/HomePage/readytocook.png";
import prawn from "../Assets/HomePage/prawn.png";
import coldcut from "../Assets/HomePage/coldcut.png";
import spread from "../Assets/HomePage/spread.png";
import egg from "../Assets/HomePage/egg.png";
import biriyani from "../Assets/HomePage/biriyani.png";
import combo from "../Assets/HomePage/combo.png";
import gourmet from "../Assets/HomePage/gourmet.png";
import cards from "../Assets/HomePage/cards.PNG";
import blog1 from "../Assets/HomePage/blog1.PNG";
import blog2 from "../Assets/HomePage/blog2.PNG";
import blog3 from "../Assets/HomePage/blog3.PNG";

const Home = () => {

  const categories= [
    { id:1,      img: deals,        name: "Today's Deals" }, 
    { id:2,      img: chicken,      name: "Chicken" }, 
    { id:3,      img: fish,         name: "Fish & Seafood" },
    { id:4,      img: mutton,       name: "Mutton" },
    { id:5,      img: readytocook,  name: "Ready to Cook" },
    { id:6,      img: prawn,        name: "Prawns" },
    { id:7,      img: coldcut,      name: "Cold Cuts" },
    { id:8,      img: spread,       name: "Spreads" }, 
    { id:9,      img: egg,          name: "Eggs" }, 
    { id:10,     img: biriyani,     name: "Biriyani & Kebab" },
    { id:11,     img: combo,        name: "Combos" },
    { id:12,     img: gourmet,      name: "Gourmet" },
  ]

  const blogs= [
    { id:1,      img: blog1,        name: "Learn How To Make Lahabi Kebab" }, 
    { id:2,      img: blog2,        name: "Learn How To Make An Egg Bhurji Sandwich" }, 
    { id:3,      img: blog3,        name: "Prepare this unique Egg Cup Recipe" }
  ]
  

  return (
    <Box>
      <Box bg="#f0eded">
        <Box>
          <Image src={banner} alt="banner" />
        </Box>
        <Box>
          <Box w="87%" m="auto" p="20px 0px">
            <Box w="95%" m="auto" textAlign="left" mb="10px" color="#4d4d4d">
              <Text fontSize={["17px", "20px", "23px"]} fontWeight="bold">Shop by categories</Text>
              <Text fontSize="14px">Freshest meats just for you</Text>
            </Box>
            <Box>
              <Box display="grid" gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
                {categories && categories.map((el)=>{
                  return <Box key={el.id} textAlign="center" color="#404040">
                    <Box boxSize={"80%"} m="auto" overflow="hidden">
                      <Image _hover={{transform: "scale(1.15)", transition: "transform 1s"}} boxSize={"100%"} src={el.img} alt={el.name} />
                    </Box>
                    <Text fontWeight={"700"} fontSize={["14px", "16px", "18px"]} m="5px 0px">{el.name}</Text>
                  </Box>
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w="87%" m="auto" p="20px 0px">
          <Box className='meatopia' w="70%" m="auto" bg="#ffdc93" p="10px">
            <Box bg="white">
              <Box w="95%" m="auto" p="10px 0px" display="flex" justifyContent="space-between" alignItems="center"> 
                <Image h="50px" src={logo} alt="logo" />
                <Button bg="#D11243" color="white" rounded="5px">JOIN NOW</Button>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"13px"}>Join MEATOPIA to get free delivery on all orders with cart value more than Rs.99.</Text>
            </Box>
          </Box>
          <Box className='discovernow'>
            <Box m="20px auto">
              <Box w="21%" m="auto" bg="#f0eded" position="absolute" mt="-1%" left="40%" fontWeight="bold" fontSize="20px"><Text color="#D11243">Know The Licious Way</Text></Box>
              <Box w="95%" m="auto" border="1px solid black" rounded="10px" p="20px" display="grid" fontSize={["16px", "18px", "20px"]}
              gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}>
                <Box borderRight="1px solid grey"><Text>Premium Produce</Text></Box>
                <Box borderRight="1px solid grey"><Text>World-Class Central Production Unit</Text></Box>
                <Box borderRight="1px solid grey"><Text>150 Quality Checks</Text></Box>
                <Box borderRight="1px solid grey"><Text>Delivered Fresh Everyday</Text></Box>
                <Box><Text>Extraordinary Cooking</Text></Box>
              </Box>
              <Box mt="-2%"><Button border="2px solid #D11243" color="#D11243" rounded="5px">Discover How</Button></Box>
            </Box>
          </Box>
          <Box w="90%" m="auto">
            <Image w="100%" src={cards} alt="cards" />
          </Box>
        </Box>
        <Box>
          <Box w="87%" m="auto" p="20px 0px">
            <Box w="95%" m="auto" textAlign="left" mb="10px" color="#4d4d4d">
              <Text fontSize={["17px", "20px", "23px"]} fontWeight="bold">Explore by categories</Text>
            </Box>
            <Box>
              <Box display="grid" gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
                {categories && categories.map((el)=>{
                  return <Box key={el.id} textAlign="center" color="#404040">
                    <Box boxSize={"80%"} m="auto" overflow="hidden">
                      <Image _hover={{transform: "scale(1.15)", transition: "transform 1s"}} boxSize={"100%"} src={el.img} alt={el.name} />
                    </Box>
                    <Text fontWeight={"700"} fontSize={["14px", "16px", "18px"]} m="5px 0px">{el.name}</Text>
                  </Box>
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box w="85%" m="auto" p="20px 0px">
              <Box textAlign="left" mb="10px" color="#4d4d4d">
                <Text fontSize={["18px", "21px", "25px"]} fontWeight="600">Check out our blog</Text>
              </Box>
              <Box>
                <Box display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                  {blogs && blogs.map((el)=>{
                    return <Box key={el.id} textAlign="center" color="#404040">
                      <Image rounded="10px" boxSize="400px" src={el.img} alt={el.name} />
                      <Text fontWeight={"700"} fontSize={["14px", "16px", "18px"]} m="5px 0px">{el.name}</Text>
                    </Box>
                  })}
                </Box>
              </Box>
            </Box>
            <Image w="85%" m="auto" src={banner2} alt="banner2" />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
