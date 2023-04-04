import React from "react";
import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import banner from "../Assets/HomePage/licious-banner.jpeg";
import banner2 from "../Assets/HomePage/banner2.jpeg";
import logo from "../Assets/HomePage/meatmunchies-logo.png";
import deals from "../Assets/HomePage/deals.png";
import chicken from "../Assets/HomePage/chicken.png";
import fish from "../Assets/HomePage/fish-seafood.png";
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
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate= useNavigate();
  const categories = [
    { id: 1, img: deals, name: "Today's Deals", link: "/chicken" },
    { id: 2, img: chicken, name: "Chicken", link: "/chicken" },
    { id: 3, img: fish, name: "Fish & Seafood", link: "/chicken" },
    { id: 4, img: mutton, name: "Mutton", link: "/chicken" },
    { id: 5, img: readytocook, name: "Ready to Cook", link: "/chicken" },
    { id: 6, img: prawn, name: "Prawns", link: "/chicken" },
    { id: 7, img: coldcut, name: "Cold Cuts", link: "/chicken" },
    { id: 8, img: spread, name: "Spreads", link: "/chicken" },
    { id: 9, img: egg, name: "Eggs", link: "/chicken" },
    { id: 10, img: biriyani, name: "Biriyani & Kebab", link: "/chicken" },
    { id: 11, img: combo, name: "Combos", link: "/chicken" },
    { id: 12, img: gourmet, name: "Gourmet", link: "/chicken" },
  ];

  const blogs = [
    { id: 1, img: blog1, name: "Learn How To Make Lahabi Kebab" },
    { id: 2, img: blog2, name: "Learn How To Make An Egg Bhurji Sandwich" },
    { id: 3, img: blog3, name: "Prepare this unique Egg Cup Recipe" },
  ];

  return (
    <Box>
      <Box bg="#f0eded">
        <Box>
          <Image src={banner} alt="banner" />
        </Box>
        <Box>
          <Box w="87%" m="auto" p="20px 0px">
            <Box w="95%" m="auto" textAlign="left" mb="10px" color="#4d4d4d">
              <Text fontSize={{base:"17px", md:"20px", lg:"23px"}} fontWeight="bold">
                Shop by categories
              </Text>
              <Text fontSize="14px">Freshest meats just for you</Text>
            </Box>
            <Box>
              <Box
                display="grid"
                gridTemplateColumns={{base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"}}
              >
                {categories &&
                  categories.map((el) => {
                    return (
                      <Box key={el.id} textAlign="center" color="#404040">
                        <Box boxSize="80%" m="auto" overflow="hidden">
                          <Image
                            _hover={{
                              transform: "scale(1.15)",
                              transition: "transform 1s",
                            }}
                            boxSize="100%"
                            src={el.img}
                            alt={el.name}
                            onClick={()=>navigate(el.link)}
                            cursor="pointer"
                          />
                        </Box>
                        <Link href={el.link}>
                          <Text
                            fontWeight={"700"}
                            fontSize={{base:"14px", md:"16px", lg:"18px"}}
                            m="5px 0px"
                          >
                            {el.name}
                          </Text>
                        </Link>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w="87%" m="auto" p="20px 0px">
          <Box
            className="meatopia"
            w={{base:"90%", md:"90%", lg:"70%"}}
            m="auto"
            bg="#ffdc93"
            p="10px"
          >
            <Box bg="white">
              <Box
                w="95%"
                m="auto"
                p="10px 0px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Image h="50px" src={logo} alt="logo" />
                <Button
                  p="5px 10px"
                  fontSize={{base:"14px", md:"16px", lg:"18px"}}
                  _hover={{
                    bg: "white",
                    color: "#D11243",
                    border: "1px solid #D11243",
                  }}
                  bg="#D11243"
                  color="white"
                  rounded="5px"
                >
                  JOIN NOW
                </Button>
              </Box>
            </Box>
            <Box>
              <Text fontSize={"13px"}>
                Join MEATOPIA to get free delivery on all orders with cart value
                more than Rs.99.
              </Text>
            </Box>
          </Box>
          <Box className="discovernow">
            <Box m="20px auto" textAlign="center">
              <Box
                w={{base:"57%", md:"35%", lg:"25%"}}
                m="auto"
                bg="#f0eded"
                position="absolute"
                mt={{base:"-2%", md:"-1.5%", lg:"-1%"}}
                left={{base:"22%", md:"32%", lg:"38%"}}
                fontWeight="bold"
                fontSize={{base:"15px", md:"16px", lg:"19px"}}
              >
                <Text color="#D11243">Know The Licious Way</Text>
              </Box>
              <Box
                w="95%"
                m="auto"
                border="1px solid #cdcbcb"
                rounded="10px"
                p="30px"
                display="grid"
                fontSize={{base:"14px", md:"15px", lg:"17px"}}
                gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)"}}
              >
                <Box
                  borderRight={{
                    base:"none",
                    md:"1px solid #cdcbcb",
                    lg:"1px solid #cdcbcb",
                  }}
                  borderBottom={{
                    base:"1px solid #cdcbcb",
                    md:"1px solid #cdcbcb",
                    lg:"none",
                  }}
                >
                  <Text>Premium Produce</Text>
                </Box>
                <Box
                  borderRight={{
                    base:"none",
                    md:"1px solid #cdcbcb",
                    lg:"1px solid #cdcbcb"
                  }}
                  borderBottom={{
                    base:"1px solid #cdcbcb",
                    md:"1px solid #cdcbcb",
                    lg:"none"
                  }}
                >
                  <Text>Extraordinary Cooking</Text>
                </Box>
                <Box
                  borderRight={{base:"none", md:"none", lg:"1px solid #cdcbcb"}}
                  borderBottom={{
                    base:"1px solid #cdcbcb",
                    md:"1px solid #cdcbcb",
                    lg:"none",
                  }}
                >
                  <Text>150 Quality Checks</Text>
                </Box>
                <Box
                  borderRight={{
                    base:"none",
                    md:"1px solid #cdcbcb",
                    lg:"1px solid #cdcbcb",
                  }}
                  borderBottom={{base:"1px solid #cdcbcb", md:"none", lg:"none"}}
                >
                  <Text>Delivered Fresh Everyday</Text>
                </Box>
                <Box>
                  <Text>World-Class Central Production Unit</Text>
                </Box>
              </Box>
              <Box mt={{base:"-6%", md:"-4%", lg:"-2%"}}>
                <Button
                  p="5px 10px"
                  fontSize={{base:"14px", md:"16px",lg:"18px"}}
                  _hover={{ bg: "#D11243", color: "white" }}
                  border="2px solid #D11243"
                  color="#D11243"
                  rounded="5px"
                >
                  Discover How
                </Button>
              </Box>
            </Box>
          </Box>
          <Box w="90%" m="auto">
            <Image w="100%" src={cards} alt="cards" />
          </Box>
        </Box>
        <Box>
          <Box w="87%" m="auto" p="20px 0px">
            <Box w="95%" m="auto" textAlign="left" mb="10px" color="#4d4d4d">
              <Text fontSize={{base: "17px", md: "20px", lg:"23px"}} fontWeight="bold">
                Explore by categories
              </Text>
            </Box>
            <Box>
              <Box
                display="grid"
                gridTemplateColumns={{base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"}}
              >
                {categories &&
                  categories.map((el) => {
                    return (
                      <Box key={el.id} textAlign="center" color="#404040">
                        <Box boxSize="80%" m="auto" overflow="hidden">
                          <Image
                            _hover={{
                              transform: "scale(1.15)",
                              transition: "transform 1s",
                            }}
                            boxSize="100%"
                            src={el.img}
                            alt={el.name}
                            onClick={()=>navigate(el.link)}
                            cursor="pointer"
                          />
                        </Box>
                        <Link href={el.link}>
                          <Text
                            fontWeight={"700"}
                            fontSize={{base:"14px", md: "16px", lg:"18px"}}
                            m="5px 0px"
                          >
                            {el.name}
                          </Text>
                        </Link>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box w="85%" m="auto" p="20px 0px">
            <Box textAlign="left" mb="10px" color="#4d4d4d">
              <Text fontSize={{base:"18px", md:"21px", lg:"25px"}} fontWeight="600">
                Check out our blog
              </Text>
            </Box>
            <Box>
              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
              >
                {blogs &&
                  blogs.map((el) => {
                    return (
                      <Box key={el.id} textAlign="center" color="#404040">
                        <Image
                          rounded="10px"
                          boxSize={{base:"250px", md:"300px", lg:"400px"}}
                          src={el.img}
                          alt={el.name}
                        />
                        <Text
                          fontWeight={"700"}
                          fontSize={{base:"14px", md:"16px", lg:"18px"}}
                          m="5px 0px"
                        >
                          {el.name}
                        </Text>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
          <Image w="85%" m="auto" src={banner2} alt="banner2" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

