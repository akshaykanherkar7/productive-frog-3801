import React from "react";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import  './Navbar.css'
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
      third.addEventListener("mouseover", () => {
        toggleProductUp(fourth);
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
          <Box display="flex"  flexDirection="column">
         <Box id="1st"   _hover={{
            cursor:"pointer"
            }}>Product{" "} <i class="fa-solid fa-caret-down"></i></Box>
        
          
          </Box>

          <Box display="flex" flexDirection="column">
            <Box id="2nd">Templates {" "}<i class="fa-solid fa-caret-down"></i></Box>
         
          </Box>

          <Box>Pricing</Box>
          <Box>Reviews</Box>
        </Box>

        <Box position="relative"  display="flex" w="20%">
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
      <Box id="1st_dropdown" className="ok" position="relative"  ml='30%' >
      <Box>
        <Heading  as='h5' size='md'>Bonsai Workflow</Heading>
        <p>
          Look professional, <br /> win more clients <br />
          and manage your <br />
          business from <br />
          one place
        </p>
      </Box>

      <Box>
        <Heading  as='h5' size='md'>Bonsai Tax</Heading>
        <p>
          Track expenses
          <br />, maximize taxs
          <br /> writeoffs
          <br />
          and estimate <br />
          taxes without
          <br /> headache.
        </p>
      </Box>
      <Box>
        <Heading  as='h5' size='md'>Bonsai Cash</Heading>
        <p>
          Bonsai's is
          <br /> all-in-one
          <br /> financial hub:
          <br />
          no fess
          <br /> lightning fast
          <br /> payouts
        </p>
      </Box>
    </Box>
    <Box className="ok" w='20%' display="flex"boxShadow='2xl'rounded='md' bg='white' ml="40%" color="grey"id="2nd_dropdown">
            <Box p="15%"  fontSize={15} >  <Flex mt="10%" >
               
               <img
                 style={{ opacity: 0.7 }}
                 src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg"
                 alt=""
                 width="20"
                 height="20"
               />{" "}
            <Box>   Proposal Template</Box>
            
           </Flex >

           <Flex mt="10%" >
            
               <img
                 style={{ opacity: 0.7 }}
                 src="https://icon-library.com/images/document-icon-png/document-icon-png-0.jpg"
                 alt=""
                 width="20"
                 height="20"
               />
               Invioce Template{" "}
            
           </Flex>
           <Flex mt="10%" >
            
               <img
                 style={{ opacity: 0.7 }}
                 src="https://icon-library.com/images/icon-template-png/icon-template-png-8.jpg"
                 alt=""
                 width="20"
                 height="20"
               />
               Agreement Template{" "}
            
           </Flex>

           <Flex mt="10%" >
            
               <img
                 style={{ opacity: 0.7 }}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ru6M8BABzQdwkHA5Ooo4Hr6Qfz6X0r4Rb9E1n5VUofbYz6wAClbyHSmJXHq8Ncm7t1Q&usqp=CAU"
                 alt=""
                 width="20"
                 height="20"
               />
               Quotes Template{" "}
            
           </Flex>
           <Flex mt="10%" >
            
               <img
                 style={{ opacity: 0.7 }}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Globe_icon_%28the_Noun_Project_30701%29.svg/1200px-Globe_icon_%28the_Noun_Project_15701%29.svg.png"
                 alt=""
                 width="20"
                 height="20"
               />
               Scope of work Template{" "}
            
           </Flex>
           <Flex mt="10%" >
            
               <img
                 style={{ opacity: 0.7 }}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcFytkcl-QRb1n5gxbA2jujmLhLJj9zyBonaCH76ht5rwhwaWMQpmeTXG-4_sGVPkJqg&usqp=CAU"
                 alt=""
                 width="20"
                 height="20"
               />
               Brief Template{" "}
            
           </Flex></Box>
           <Box  >

           </Box>
            </Box>
</Box>
  );
};
