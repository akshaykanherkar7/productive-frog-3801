import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const ComponentModel = ({ item }) => {
  const { a1, a2, a3, a4 } = item;
  return (
    <Box>
      <Box bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a1}
      </Box>
      <Box bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a2}
      </Box>
      <Box bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a3}
      </Box>
      <Box bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
        {a4}
      </Box>
    </Box>
  );
};
