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

const Dashboard = () => {
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
            <Box
              // border="1px solid red"
              h="110px"
              w="95%"
              margin="auto"
              mt="7"
            >
              <Flex justifyContent={"space-between"}>
                <Box
                  // border="1px solid red"
                  h="100px"
                  w="50%"
                >
                  <Flex gap="3">
                    <Image src="https://app.hellobonsai.com/packs/static/good-morning-66f0f5841376d77563ac.svg"></Image>
                    <Box>
                      <p style={{ color: "gray" }}>Frieday,August 26th</p>
                      <Heading>Good Morning, Akshay!</Heading>
                    </Box>
                  </Flex>
                </Box>
                <Box
                  // border="1px solid red"
                  h="50px"
                  w="35%"
                  mt="4"
                >
                  <Flex gap="6">
                    <p
                      style={{ marginTop: 7, color: "gray", fontSize: " 16px" }}
                    >
                      Let's get you set up with Bonsai.
                    </p>
                    <Button colorScheme="teal" variant="outline">
                      {`Get Started ${">"}`}
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box
              // border="1px solid red"
              w="95%"
              margin={"auto"}
              h="650px"
              marginTop={"30px"}
            >
              <Flex justifyContent={"space-between"}>
                <Box h="400px" w="65%">
                  <Box border="1px solid gray" borderRadius={5} h="320px">
                    <Dashboardtable></Dashboardtable>
                  </Box>
                  <Box
                    border="1px solid gray"
                    borderRadius="10"
                    mt="10"
                    h="280px"
                  >
                    <Grid>
                      <Box
                        // border="1px solid gray"
                        borderRadius="5"
                        h="60px"
                        p="3"
                      >
                        <Flex justifyContent={"space-between"}>
                          <h1>Income & Expenses</h1>
                          <Box
                          // border="1px solid gray"
                          >
                            <Flex gap="5">
                              <select style={{ border: "1px solid gray" }}>
                                <option>INR</option>
                              </select>
                              <select style={{ border: "1px solid gray" }}>
                                <option>Last 6 Months</option>
                                <option>This Month</option>
                                <option>Last 3 Month</option>
                              </select>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <hr />
                      <Box mt="5">
                        <TableContainer>
                          <Table size="sm">
                            <Thead>
                              <Tr>
                                <Th>Jan</Th>
                                <Th>Feb</Th>
                                <Th>March</Th>
                                <Th>April</Th>
                                <Th>May</Th>
                                <Th>June</Th>
                                <Th>July</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                        <Box
                          // sborder="1px solid red"
                          mt="60px"
                          padding={2}
                        >
                          <Flex justifyContent="space-between">
                            <Box>
                              <p>Outstanding</p>
                              <Heading color="gray"> 0.00</Heading>
                            </Box>
                            <Box>
                              <p>Overdue</p>
                              <Heading color="gray">0.00</Heading>
                            </Box>
                            <Box>
                              <p>Paid & Pending</p>
                              <Heading color="gray">0.00</Heading>
                            </Box>
                            <Box>
                              <p>Other Income</p>
                              <Heading color="gray">0.00</Heading>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Grid>
                  </Box>
                  <Box
                    border="1px solid gray"
                    h="90px"
                    mt="30"
                    borderRadius="5"
                    padding="5"
                  >
                    <Box>
                      <Center fontSize="20" color="black" >
                        Connect a US, UK or Canadian bank account to
                        automatically import expenses.
                      </Center>
                      <Center fontSize="12" color="gray">ADD BANK ACCOUNT</Center>
                    </Box>
                    
                  </Box>
                  <Box
                    border="1px solid gray"
                    borderRadius="10"
                    mt="10"
                    h="280px"
                  >
                    <Grid>
                      <Box
                        // border="1px solid gray"
                        borderRadius="5"
                        h="60px"
                        p="3"
                      >
                        <Flex justifyContent={"space-between"}>
                          <h1>Time Tracked</h1>
                          <Box
                          // border="1px solid gray"
                          >
                            <Flex gap="5">
                              <select style={{ border: "1px solid gray" }}>
                                <option>INR</option>
                              </select>
                              <select style={{ border: "1px solid gray" }}>
                                <option>Last 14</option>
                                <option>Last 6 Months</option>
                                <option>This Month</option>
                                <option>Last 3 Month</option>
                              </select>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <hr />
                      <Box mt="5">
                        <TableContainer>
                          <Table size="sm">
                            <Thead>
                              <Tr>
                                <Th>Jan</Th>
                                <Th>Feb</Th>
                                <Th>March</Th>
                                <Th>April</Th>
                                <Th>May</Th>
                                <Th>June</Th>
                                <Th>July</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                              <Tr></Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                        <Box
                          // sborder="1px solid red"
                          mt="60px"
                          padding={2}
                        >
                          <Flex justifyContent="space-between">
                            <Box>
                              <p>Unbilled Hours</p>
                              <Heading color="gray"> 0.00</Heading>
                            </Box>
                            <Box>
                              <p>Unbilled Amount</p>
                              <Heading color="gray">0.00</Heading>
                            </Box>
                            <Box>
                              <p>Billed Hours</p>
                              <Heading color="gray">0.00</Heading>
                            </Box>
                            <Box>
                              <p>Billed Amount</p>
                              <Heading color="gray">0.00</Heading>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Grid>
                  </Box>
                </Box>
                {/* Right Side Box  */}
                <Box
                  // border="1px solid green"
                  h="600px"
                  w="30%"
                >
                  <Grid gap="10">
                    <Box
                      // border="1px solid gray"
                      h="200px"
                    >
                      <Grid gap={2}>
                        <Box
                          border="1px solid lightgray"
                          borderRadius={5}
                          h="60px"
                        >
                          <Flex gap={5} p="1">
                            <Image
                              src="https://thumbs.dreamstime.com/z/small-books-9022677.jpg"
                              h="35"
                              w="35"
                              borderRadius={5}
                              mt="2"
                              ml="3"
                              cursor={"pointer"}
                            ></Image>
                            <Text cursor={"pointer"} mt="2">
                              Draft a Proposal
                            </Text>
                          </Flex>
                        </Box>
                        <Box
                          border="1px solid lightgray"
                          borderRadius={5}
                          h="60px"
                        >
                          <Flex gap={5} p="1">
                            <Image
                              src="https://thumbs.dreamstime.com/z/small-books-9022677.jpg"
                              h="35"
                              w="35"
                              borderRadius={5}
                              mt="2"
                              ml="3"
                              cursor={"pointer"}
                            ></Image>
                            <Text cursor={"pointer"} mt="2">
                              Create a Contract
                            </Text>
                          </Flex>
                        </Box>
                        <Box
                          border="1px solid lightgray"
                          borderRadius={5}
                          h="60px"
                        >
                          <Flex gap={5} p="1">
                            <Image
                              src="https://thumbs.dreamstime.com/z/small-books-9022677.jpg"
                              h="35"
                              w="35"
                              borderRadius={5}
                              mt="2"
                              ml="3"
                              cursor={"pointer"}
                            ></Image>
                            <Text cursor={"pointer"} mt="2">
                              Create an Invoice
                            </Text>
                          </Flex>
                        </Box>
                      </Grid>
                    </Box>
                    <Box
                      border="1px solid gray"
                      padding={2}
                      borderRadius={5}
                      h="350px"
                    >
                      <h1 style={{ marginLeft: 20, marginTop: 10 }}>
                        Activity
                      </h1>
                      <hr style={{ marginTop: 15 }}></hr>
                      <Grid>
                        <Box h="70" mt="3">
                          <Flex>
                            <MinusIcon mt="3"></MinusIcon>
                            <Box>
                              <Text ml="5" mt="2">
                                Akshay Kanherkar Created Project Express
                              </Text>
                              <p style={{ marginLeft: 20 }}>25 Aug 2022</p>
                            </Box>
                          </Flex>
                        </Box>
                        <Box h="70">
                          <Flex>
                            <MinusIcon mt="3"></MinusIcon>
                            <Box>
                              <Text ml="5" mt="2">
                                Akshay Kanherkar Created Project Express
                              </Text>
                              <p style={{ marginLeft: 20 }}>25 Aug 2022</p>
                            </Box>
                          </Flex>
                        </Box>
                        <Box h="70">
                          <Flex>
                            <MinusIcon mt="3"></MinusIcon>
                            <Box>
                              <Text ml="5" mt="2">
                                Akshay Kanherkar Created Project Express
                              </Text>
                              <p style={{ marginLeft: 20 }}>25 Aug 2022</p>
                            </Box>
                          </Flex>
                        </Box>
                        <Box h="70">
                          <Flex>
                            <MinusIcon mt="3"></MinusIcon>
                            <Box>
                              <Text ml="5" mt="2">
                                Akshay Kanherkar Created Project Express
                              </Text>
                              <p style={{ marginLeft: 20 }}>25 Aug 2022</p>
                            </Box>
                          </Flex>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Dashboard;
