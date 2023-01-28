import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Link,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";
import i1 from "../assets/Todays_Deal_1.png";
import i2 from "../assets/Chicken_20.png";
import i3 from "../assets/Fish.png";
import i4 from "../assets/Mutton_20.png";
import i5 from "../assets/RTC.png";
import i6 from "../assets/Prawn.png";
import i7 from "../assets/Coldcuts.png";
import i8 from "../assets/Spread_Bottle1.png";
import i9 from "../assets/Eggs.png";

export const CategoryTab = () => {
  return (
    <Tabs variant="unstyled" orientation="vertical">
      <TabList w="350px">
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i1} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Today's Deals
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i2} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
            Chicken
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i3} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
            Fish & Seafood
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i4} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Mutton
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i5} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Ready to Cook
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i6} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Prawns
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i7} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Cold Cuts
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i8} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Spreads
          </Tab>
        </Flex>
        <Flex
          alignItems="center"
          _hover={{
            color: "gray.700",
            fontWeight: "semibold",
            bgColor: "#f1f1f1",
          }}
        >
          <Box w="50px" pl="2">
            <Image src={i9} w="100%" />
          </Box>
          <Tab flexBasis="100%" color="gray" pt="4" pb="4" minW="max-content">
            Eggs
          </Tab>
        </Flex>
      </TabList>
      <TabPanels bgColor="#f1f1f1">
        <TabPanel></TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".5s",
                color: "gray.700",
                fontWeight: "semibold",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Curry Cuts
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".5s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Boneless & Mince
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".5s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Speciality Cuts
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".5s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Offals
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".5s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Combos
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Freshwater</p>
          <p>Seawater</p>
          <p>Crab</p>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Curry Cuts</p>
          <p>Boneless & Mince</p>
          <p>Speciality Cuts</p>
          <p>Offals</p>
          <p>Combos</p>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Gourmet Marinades</p>
          <p>Kebabs & Tandoor</p>
          <p>Wings</p>
          <p>Crispy Snacks</p>
          <p>Burger Patties</p>
          <p>Biryani</p>
          <p>Combos</p>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Small Size</p>
          <p>Medium Size</p>
          <p>Large Size</p>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Sausages</p>
          <p>Frankfurters</p>
          <p>Lyoners</p>
          <p>Salamis</p>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Chicken</p>
          <p>Prawn</p>
          <p>Egg</p>
          <p>Combos</p>
          <p>Cold Cuts</p>
        </TabPanel>
        <TabPanel>
          <Box></Box>
          <p>Classic Eggs</p>
          <p>Speciality Eggs</p>
          <p>Combos</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
