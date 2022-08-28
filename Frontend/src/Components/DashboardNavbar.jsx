import { ChevronDownIcon, SearchIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text, Image } from "@chakra-ui/react";
import React from "react";

const DashboardNavbar = () => {
  return (
    <Box border="1px solid gray" borderLeft={"none"} w="100%" h="7%">
      <Flex justifyContent="space-between">
        <Box
          // border="1px solid blue"
          h="50"
          mt="2"
          w="25%"
          ml="5"
        >
          <Flex>
            <SearchIcon h="5" position="absolute" mt="3.5" ml="" />
            <Input
              h="8"
              borderRadius="4"
              border="lightblue"
              mt="2"
              placeholder="Search"
            ></Input>
          </Flex>
        </Box>
        <Box
          // border="1px solid red"
          h="50"
          mt="2"
          w="35%"
        >
          <Flex justifyContent="space-evenly">
            <Button mt="1.5" h="8" colorScheme="teal" size="md">
              Start Free Trial
            </Button>
            <TimeIcon
              cursor={"pointer"}
              mt="2"
              w={8}
              h={8}
              position="absolute"
            ></TimeIcon>
            <Text mt="2" ml="10" cursor={"pointer"}>
              Start Timer
            </Text>
            <Box w="12%">
              <Flex justifyContent="space-between">
                <Image
                  id="mh"
                  cursor={"pointer"}
                  h="30"
                  w="30"
                  mt="2"
                  src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688"
                ></Image>
                <ChevronDownIcon cursor={"pointer"} mt="4"></ChevronDownIcon>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardNavbar;
