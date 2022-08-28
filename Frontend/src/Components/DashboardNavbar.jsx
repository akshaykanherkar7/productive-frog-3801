import { ChevronDownIcon, SearchIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../Redux/Auth/auth.action";

const DashboardNavbar = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  let username = userData.fullname.split(" ")[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAPI());
    navigate("/");
  };
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
          w="45%"
        >
          <Flex justifyContent="space-evenly">
            <Button mt="1.5" h="8" colorScheme="teal" size="md" ml="50">
              Start Free Trial
            </Button>
            <TimeIcon
              cursor={"pointer"}
              mt="2"
              w={8}
              h={8}
              position="absolute"
            ></TimeIcon>
            <Text mt="2" ml="7" cursor={"pointer"}>
              Start Timer
            </Text>
            <Box w="12%" mt="2" marginLeft="8">
              <Menu>
                <Flex
                  marginLeft="-50px"
                  display="flex"
                  gap="10px"
                  alignItems="center"
                >
                  <Box>
                    <i class="fa-solid fa-user"></i>
                  </Box>
                  <MenuButton>
                    {username}
                    <i class="fa-solid fa-angle-down"></i>
                  </MenuButton>
                </Flex>
                <MenuList marginLeft="35%" mt="2">
                  <MenuItem minH="48px" gap="30px">
                    <span>Get Bonsai Free</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span>Help Center</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span>What's New</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span>My Subscription</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span>Apps & Integrations</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span>Payments</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span>Setting</span>
                  </MenuItem>
                  <MenuItem minH="40px" gap="30px">
                    <span onClick={handleLogout}>Logout</span>
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* </Flex> */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardNavbar;
