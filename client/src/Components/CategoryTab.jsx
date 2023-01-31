import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Link,
  Image,
  Flex,
} from "@chakra-ui/react";
import i1 from "../Assets/Todays_Deal_1.png";
import i2 from "../Assets/Chicken_20.png";
import i3 from "../Assets/fish.png";
import i4 from "../Assets/Mutton_20.png";
import i5 from "../Assets/RTC.png";
import i6 from "../Assets/Prawn.png";
import i7 from "../Assets/Coldcuts.png";
import i8 from "../Assets/Spread_Bottle1.png";
import i9 from "../Assets/Eggs.png";

export const CategoryTab = () => {
  return (
    <Tabs isFitted variant="unstyled" orientation="vertical">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
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
          <Tab flexBasis="100%" color="gray" pt="4" pb="4">
            Eggs
          </Tab>
        </Flex>
      </TabList>
      <TabPanels bgColor="#f1f1f1">
        <TabPanel>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Curry Cuts
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Gourmet Marinades
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
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
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Speciality Eggs
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Frankfurters
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Curry Cuts
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Boneless & Mince
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Speciality Cuts
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Offals
            </Box>
          </Link>
          <Link href="/chicken" _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Combos
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Freshwater
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Seawater
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Crab
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
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
                transition: ".3s",
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
                transition: ".3s",
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
                transition: ".3s",
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
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Combos
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Gourmet Marinades
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Kebabs & Tandoor
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Wings
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Crispy Snacks
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Burger Patties
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Biryani
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Combos
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Small Size
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Medium Size
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Large Size
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Sausages
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Frankfurters
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Lyoners
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Salamis
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Chicken
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Prawn
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Egg
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Combos
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Cold Cuts
            </Box>
          </Link>
        </TabPanel>
        <TabPanel>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              All
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Classic Eggs
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Speciality Eggs
            </Box>
          </Link>
          <Link _hover={{ textDecoration: "none" }}>
            <Box
              pl="3"
              pt="3"
              pb="3"
              _hover={{
                bgColor: "#fff",
                transition: ".3s",
                color: "gray.700",
                fontWeight: "semibold",
              }}
            >
              Combos
            </Box>
          </Link>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
