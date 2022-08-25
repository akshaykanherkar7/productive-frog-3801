import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const ComponentModel = ({ item }) => {
  const {heading, a1, a2, a3, a4 } = item;
  return (
    <Box h="100%" w="120%" p="5%" 
  >
     <Heading as="h5"  pt="5%" size="md">
            {heading}
          </Heading>
      <Box p='5%' mt='5%' border='1px solid grey' rounder='md' bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a1}
      </Box>
      <Box  p='5%'mt='5%' border='1px solid grey' rounder='md'  bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a2}
      </Box>
      <Box  p='5%'mt='5%' border='1px solid grey' rounder='md'  bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a3}
      </Box>
      <Box  p='5%'mt='5%' border='1px solid grey' rounder='md'  bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a4}
      </Box>
    </Box>
  );
};
