import { Box, Image, Flex, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Navbar";
import "../Components/Navbar.css"
const Homepage1 = () => {
  const handleClick = () => {
    window.scrollTo(0, 1);
  }
  return (
    <Box>
      <Navbar />
      <Box className="blue-shape _11"></Box>
      <Flex>
        <Box w="50%">
        <Box mt='22%' ml='22%' >
        <Box fontSize={45} >Everything you need to<br/> run your business.</Box>
          <Box fontSize={20}>Bonsai’s all-in-one product suite with smart<br/> automation lets you focus on your passion, not <br/>your paperwork.</Box>
          <InputGroup w="80%" >
      <Input
      h='4rem'    focusBorderColor="#00b289"
      mt='5%' 
      borderRadius="  5px 0 0 5px"
        placeholder='Enter Email'
      />
      
        <Button h='4rem' mt="5%"   borderRadius=" 0 5px  5px 0" background="#00b289" border='1px solid #00b289'
              _hover={{
                background: "#00a289",
                color: "white",
              }}
              color="white" w="12rem" onClick={handleClick}>
        START FREE
        </Button>
      
    </InputGroup>
        </Box>
        </Box>
       <Box w="50%">
       <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"></Image>
       </Box>
      </Flex>
    </Box>
  );
};

export default Homepage1;
