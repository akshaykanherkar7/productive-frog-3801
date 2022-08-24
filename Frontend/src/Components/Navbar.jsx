import React from "react";
import { Box, Button, Flex, Heading, Image, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";
export const Navbar = () => {
  useEffect(() => {
    const toggleProductUp = (element) => {
      element.style.display = "block";
      element.addEventListener("mouseover", () => {
        element.style.display = "block";
      });
      element.addEventListener("mouseout", () => {
        element.style.display = "none";
      });
    };
    const togglethirdUp = (element) => {
      element.style.display = "flex";
      element.addEventListener("mouseover", () => {
        element.style.display = "flex";
      });
      element.addEventListener("mouseout", () => {
        element.style.display = "none";
      });
    };
    const toggleProductUpOff = (element) => {
      element.style.display = "none";
    };
    var first = document.getElementById("1st");
    var second = document.getElementById("1st_dropdown");

    if (first) {
      first.addEventListener("mouseover", () => {
        toggleProductUp(second);
      });
      first.addEventListener("mouseout", () => {
        toggleProductUpOff(second);
      });
    }
    var third = document.getElementById("2nd");
    var fourth = document.getElementById("2nd_dropdown");

    if (third) {
      fourth.style.display = "none";
      third.addEventListener("mouseover", () => {
        togglethirdUp(fourth);
      });
      third.addEventListener("mouseout", () => {
        toggleProductUpOff(fourth);
      });
    }
  });

  return (
    <Box>
      <Box boxShadow="md" rounded="md" bg="white">
        <Box
          pl="10%"
          pt="1.5%"
          pr="10%"
          w="100%"
          justifyContent="space-between"
          display="flex"
          gap="5%"
          h="70px"
        >
          <Box>
            <Image
              p="5%"
              w="75%"
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
              alt="Logo"
            />
          </Box>

          <Box
            color="grey"
            justifyContent="center"
            w="60%"
            gap="10%"
            display="flex"
          >
            <Box display="flex" flexDirection="column">
              <Box
                id="1st"
                _hover={{
                  cursor: "pointer",
                }}
              >
                Product <i class="fa-solid fa-caret-down"></i>
              </Box>
            </Box>

            <Box display="flex" flexDirection="column">
              <Box
                id="2nd"
                _hover={{
                  cursor: "pointer",
                }}
              >
                Templates <i class="fa-solid fa-caret-down"></i>
              </Box>
            </Box>

            <Box
              _hover={{
                cursor: "pointer",
              }}
            >
              Pricing
            </Box>
            <Box
              _hover={{
                cursor: "pointer",
              }}
            >
              Reviews
            </Box>
          </Box>

          <Box position="relative" display="flex" w="20%">
            <Button
              colorScheme="white"
              color="#00b289"
              border="1px solid teal"
              _hover={{
                background: "#00b289",
                color: "white",
              }}
              mr="10%"
              w="45%"
            >
              Log In
            </Button>
            <Button
              background="#00b289"
              _hover={{
                background: "#00b289",
                color: "white",
              }}
              color="white"
              w="50%"
            >
              Start Free
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        id="1st_dropdown"
        color="grey"
        boxShadow="2xl"
        rounded="md"
        bg="white"
        w="20%"
        p="2%"
        className="ok"
        position="relative"
        ml="30%"
      >
        <Box pb="5%" borderBottom="1px solid grey">
          <Heading as="h5"pb="5%" size="md">
            Bonsai Workflow
          </Heading>
          <p>
            Look professional,  win more clients 
            and manage your 
            business from 
            one place
          </p>
        </Box>

        <Box pb="5%" pt="5%" borderBottom="1px solid grey">
          <Heading as="h5"pb="5%" size="md">
            Bonsai Tax
          </Heading>
          <p>
            Track expenses
            , maximize taxs
             writeoffs
            
            and estimate 
            taxes without
             headache.
          </p>
        </Box>

        <Box pb="5%" pt="5%">
          <Heading as="h5"pb="5%" size="md">
            Bonsai Cash
          </Heading>
          <p>
            Bonsai's is
             all-in-one
             financial hub:
            
            no fess
             lightning fast
             payouts
          </p>
        </Box>
      </Box>





      <Box display="flex" 
        boxShadow="2xl"
        border="1px solid blue"
        className="ok"
        rounded="md"
        bg="white"
        ml="35%"
        w="40%"
        color="grey"
        id="2nd_dropdown"
      >
        {" "}


        <Box w="50%">
          <Box p="10%" fontSize={15} >
            {" "}
            <Flex mt="10%">
              <img
                style={{ opacity: 0.7 }}
                src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg"
                alt=""
                width="20"
                height="20"
              />{" "}
              <Box> Proposal Template</Box>
            </Flex>
            <Flex mt="10%">
              <img
                style={{ opacity: 0.7 }}
                src="https://icon-library.com/images/document-icon-png/document-icon-png-0.jpg"
                alt=""
                width="20"
                height="20"
              />
              Invioce Template{" "}
            </Flex>
            <Flex mt="10%">
              <img
                style={{ opacity: 0.7 }}
                src="https://icon-library.com/images/icon-template-png/icon-template-png-8.jpg"
                alt=""
                width="20"
                height="20"
              />
              Agreement Template{" "}
            </Flex>
            <Flex mt="10%">
              <img
                style={{ opacity: 0.7 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ru6M8BABzQdwkHA5Ooo4Hr6Qfz6X0r4Rb9E1n5VUofbYz6wAClbyHSmJXHq8Ncm7t1Q&usqp=CAU"
                alt=""
                width="20"
                height="20"
              />
              Quotes Template{" "}
            </Flex>
            <Flex mt="10%">
              <img
                style={{ opacity: 0.7 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Globe_icon_%28the_Noun_Project_30701%29.svg/1200px-Globe_icon_%28the_Noun_Project_15701%29.svg.png"
                alt=""
                width="20"
                height="20"
              />
              Scope of work Template{" "}
            </Flex>
            <Flex mt="10%">
              <img
                style={{ opacity: 0.7 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcFytkcl-QRb1n5gxbA2jujmLhLJj9zyBonaCH76ht5rwhwaWMQpmeTXG-4_sGVPkJqg&usqp=CAU"
                alt=""
                width="20"
                height="20"
              />
              Brief Template{" "}
            </Flex>
          </Box>
        </Box>

        <Box >Hello madafakr</Box>
      </Box>
    </Box>
  );
};
