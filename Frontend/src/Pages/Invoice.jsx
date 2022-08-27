import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import {
  ChevronDownIcon,
  InfoIcon,
  MinusIcon,
  SearchIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import DashboardNavbar from "../Components/DashboardNavbar";
import Dashboardtable from "../Components/DashboardTable1";
import { DashSidebar } from "../Components/DashSidebar";
import Invoicestable from "../Components/Bharat/Invoicestable"

const Invoice = () => {
  return (
    <div>
       <Box
        // border="1px solid gray"
        h="1020px"
      >
        <Flex>
          <Box
            // border="1px solid gray"
            h="1020px"
            w="15%"
          >
            <DashSidebar></DashSidebar>
          </Box>
          <Box
            // border="1px solid red"
            h="1020px"
            w="85%"
          >
            <DashboardNavbar></DashboardNavbar>
            {/* Box  */}
            <Box
              // border="1px solid yellow"
              h="90px"
              w="95%"
              margin="auto"
              marginTop="5"
              borderRadius="10"
              bg="#f2faff"
              padding={5}
              borderColor="#f2faff"
            >
              <Flex gap="3">
                <InfoIcon mt="1.5"></InfoIcon>
                <Box>
                  <a style={{ color: "blue" }} href="">
                    Start 7 Day Free Trial
                  </a>
                  <br />
                  <a href="">
                    You currently don’t have an active subscription.
                    <label style={{ color: "blue" }}>
                      Start your Free Trial now!
                    </label>
                  </a>
                </Box>
              </Flex>
              </Box>
            <Invoicestable/>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Invoice
