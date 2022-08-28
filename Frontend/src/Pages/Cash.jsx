import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import CashFooter1 from "./CashFooter1";

const Cash = () => {
  return (
    <Flex
      direction={"column"}
      h={"80vh"}
      w={"75vw"}
      bg={"#00B289"}
      margin={" 100px auto"}
      ml={"5%"}
      border={"2px solid white"}
      borderRadius={"15px"}
    >
      <Box m={"100px 500px  60px 500px "}>
        <Image
          width={"60px"}
          src="https://app.hellobonsai.com/assets/welcome_states/bonsai-cash-welcome-state-icon-5f28204f6b537acb8716f2444c9ea826fd36234a07235f00390b42ae80b44e1d.png"
        />
      </Box>

      <VStack h={"50%"} w={"60%"} margin={"auto"} textAlign={"center"}>
        <Heading
          fontSize={"28px"}
          fontWeight={"500"}
          fontFamily={
            "amerigobt,proxima nova,helvetica neue,helvetica,arial,sans-serif"
          }
          color={"#fff"}
        >
          Bonsai Cash is coming soon.
        </Heading>
        <Text
          fontSize={"15px"}
          fontWeight={"500"}
          fontFamily={
            "amerigobt,proxima nova,helvetica neue,helvetica,arial,sans-serif"
          }
          color={"rgba(255,255,255,.75)"}
        >
          Get your own business account designed for freelancers. Faster
          payouts, automatic tax witholding and custom envelopes to set aside
          cash.
        </Text>
        <Button
          fontSize={"14px"}
          fontWeight={"400"}
          fontFamily={"proxima nova,helvetica neue,sans-serif"}
          color={"white"}
          varient={"outline"}
          bg={"#00B289"}
          border={"1px solid white"}
        >
          {" "}
          Join Waitlist
        </Button>
      </VStack>

      <VStack mt={"100px"}>
        <CashFooter1 />
      </VStack>
    </Flex>
  );
};

export default Cash;
