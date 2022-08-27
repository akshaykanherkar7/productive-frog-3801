import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Tr,
  useWhyDidYouUpdate,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";
import data from "./data.json";
import { ComponentModel } from "./ComponentModel";
export const Navbar = () => {
  const [dat, setDat] = useState([{}]);
  // setDat(data[0])
  // console.log(data)
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
    // const toggleDataUp = (element, index) => {
    //   element.addEventListener("mouseover", () => {
    //     setDat(data[index]);
    //   });
    // };

    var pehla = document.getElementById("pehla");
    if (pehla) {
      pehla.addEventListener("mouseover", () => {
        setDat(data[0]);
      });
    }
    var dusra = document.getElementById("dusra");
    if (dusra) {
      dusra.addEventListener("mouseover", () => {
        setDat(data[1]);
      });
    }
    var tisra = document.getElementById("rd");
    if (tisra) {
      tisra.addEventListener("mouseover", () => {
        setDat(data[2]);
      });
    }
    var chautha = document.getElementById("4th");
    if (chautha) {
      chautha.addEventListener("mouseover", () => {
        setDat(data[3]);
      });
    }
    var fifth = document.getElementById("5th");
    if (fifth) {
      fifth.addEventListener("mouseover", () => {
        setDat(data[4]);
      });
    }
    var sixth = document.getElementById("6th");
    if (sixth) {
      sixth.addEventListener("mouseover", () => {
        setDat(data[5]);
      });
    }
    var seventh = document.getElementById("7th");
    if (seventh) {
      seventh.addEventListener("mouseover", () => {
        setDat(data[6]);
      });
    }

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

    // console.log(typeof(dat))
  }, []);
// console.log(data[0])
useEffect(() =>{
  setDat(data[0])
},[])
  return (
    <Box className="nav"> 
      <Box boxShadow="md" rounded="md" bg="white">
        <Box
          pl="10%"
          pt="1%"
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
            mt="0.5%"
            display="flex"
          >
            <Box
              display="flex"
              _hover={{
                cursor: "pointer",
              }}
              flexDirection="column"
              id="1st"
            >
              <Box>
                Product <i class="fa-solid fa-caret-down"></i>
              </Box>
            </Box>

            <Box
              display="flex"
              _hover={{
                cursor: "pointer",
              }}
              id="2nd"
              flexDirection="column"
            >
              <Box>
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
        position="absolute"
        bg="white"
        w="20%"
        p="2%"
        className="ok"
        ml="30%"
      >
        <Box pb="5%" borderBottom="1px solid grey">
          <Heading as="h5" pb="5%" size="md">
            Bonsai Workflow
          </Heading>
          <p>
            Look professional, win more clients and manage your business from
            one place
          </p>
        </Box>

        <Box pb="5%" pt="5%" borderBottom="1px solid grey">
          <Heading as="h5" pb="5%" size="md">
            Bonsai Tax
          </Heading>
          <p>
            Track expenses , maximize taxs writeoffs and estimate taxes without
            headache.
          </p>
        </Box>

        <Box pb="5%" pt="5%">
          <Heading as="h5" pb="5%" size="md">
            Bonsai Cash
          </Heading>
          <p>
            Bonsai's is all-in-one financial hub: no fess lightning fast payouts
          </p>
        </Box>
      </Box>

      <Box
        display="flex"
        boxShadow="2xl"
        className="ok"
        rounded="md"
        bg="white"
        ml="35%"
        w="45%"
        color=" #4c525a"
        id="2nd_dropdown"
      >
        {" "}
        <Box w="45%">
          <Box pt="-10%"  opacity=".92" fontSize={15}>
            {" "}
            <Flex
              id="pehla"
              p="8%"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg"
                alt=""
                width="20px"
                height="20px"
              />{" "}
              &nbsp; &nbsp;
              <Box> Contract Template</Box>
            </Flex>
            <Flex
              id="dusra"
              p="8%"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg"
                alt=""
                width="20px"
                height="20px"
              />{" "}
              &nbsp; &nbsp;
              <Box> Proposal Template</Box>
            </Flex>
            <Flex
              p="8%"
              id="rd"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://icon-library.com/images/document-icon-png/document-icon-png-0.jpg"
                alt=""
                width="20px"
                height="20px"
              />
              &nbsp; &nbsp; Invioce Template{" "}
            </Flex>
            <Flex
              id="4th"
              p="8%"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://icon-library.com/images/icon-template-png/icon-template-png-8.jpg"
                alt=""
                width="20px"
                height="20px"
              />{" "}
              &nbsp; &nbsp;Agreement Template
            </Flex>
            <Flex
              id="5th"
              p="8%"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ru6M8BABzQdwkHA5Ooo4Hr6Qfz6X0r4Rb9E1n5VUofbYz6wAClbyHSmJXHq8Ncm7t1Q&usqp=CAU"
                alt=""
                width="20px"
                height="20px"
              />{" "}
              &nbsp; &nbsp; Quotes Template
            </Flex>
            <Flex
              p="8%"
              id="6th"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Globe_icon_%28the_Noun_Project_30701%29.svg/1200px-Globe_icon_%28the_Noun_Project_15701%29.svg.png"
                alt=""
                width="20px"
                height="20px"
              />
              &nbsp; &nbsp; Scope of work Template{" "}
            </Flex>
            <Flex
              p="8%"
              id="7th"
              _hover={{
                cursor: "pointer",
                bg: "rgb(234, 235, 233)",
              }}
            >
              <Image
                style={{ opacity: 0.7 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcFytkcl-QRb1n5gxbA2jujmLhLJj9zyBonaCH76ht5rwhwaWMQpmeTXG-4_sGVPkJqg&usqp=CAU"
                alt=""
                width="20px"
                height="20px"
              />
              &nbsp; &nbsp; Brief Template{" "}
            </Flex>
          </Box>
        </Box>
        <Box>
         
          <Box >
            {
              data.length>1?<ComponentModel opacity=".72"  item={dat} />:<ComponentModel item={data[0]} />
            }

            <Flex
            m="auto" p="auto"
             position="absolute"
              color="#00b289"
              bottom='0'
              textAlign="center" justifyContent="center" ml="17%" mb="5%"
              fontWeight={600}
            >
              See All Templates
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
