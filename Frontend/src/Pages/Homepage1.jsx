import { Box, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import "../Components/Navbar.css"
const Homepage1 = () => {
  return (
    <Box>
      <Navbar />
      <Box className="blue-shape _11"></Box>
      <Flex>
        <Box w="50%">
          
        </Box>
       <Box w="50%">
       <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"></Image>
       </Box>
      </Flex>
    </Box>
  );
};

export default Homepage1;
