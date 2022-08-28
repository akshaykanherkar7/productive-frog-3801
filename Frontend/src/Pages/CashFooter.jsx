import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"
import {ImMobile} from "react-icons/im"
import {MdLaptopMac} from "react-icons/md"
import {MdPhoneAndroid} from "react-icons/md"
import {AiOutlineChrome} from "react-icons/ai"
const CashFooter = () => {
  return (
    <Box margin={"200px"} marginTop="-250px" w={"85%"} >
        <Flex direction={"column"}  >
            <HStack h={"50px"} w={"80%"} bg={"white"}  margin={"auto"} justifyContent={"center"} fontFamily={"proxima nova,helvetica neue,helvetica,arial,sans-serif"} fontSize={"10px"} fontWeight={"600"} color={"#CCD0D2"} lineHeight={"1.428571429"}>
                <span >Feature Requests</span>
<span><GoPrimitiveDot/> </span> 
<span> Help Center</span>
<span> <GoPrimitiveDot/></span>
<span> Blog & Resources </span>
<span><GoPrimitiveDot/></span>
<span> Pricing </span>
<span><GoPrimitiveDot/></span>
<span> Privacy policy</span>
            </HStack>
            <HStack h={"50px"} w={"80%"} bg={"white"}  margin={"auto"}  justifyContent={"center"} fontFamily={"proxima nova,helvetica neue,helvetica,arial,sans-serif"} fontSize={"14px"} fontWeight={"500"} color={"#CCD0D2"} lineHeight={"1.428571429"} >
                <span>Bonsai Apps: </span>
                 <span><ImMobile/></span>
                 <span> iPhone</span>
                 <span><MdLaptopMac/></span>
                 <span>MacOS</span>
                 <span><MdPhoneAndroid/></span>
                 <span>Android</span>
                 <span><AiOutlineChrome/></span>
                 <span>Chrome</span>
            </HStack>
            <Box h={"50px"} w={"80%"} bg={"white"}  margin={"auto"}>
                <Box paddingTop={"10px"}  textAlign={"center"}  fontSize={"10px"} fontWeight={"300"} color={"#CCD0D2"} fontFamily={"proxima nova,helvetica neue,helvetica,arial,sans-serif"} >
                <p>©2022 Bonsai Technologies Inc — Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law firm, and does not provide legal services, advice, or representation.   Terms    Credits</p>
                </Box  >
            </Box>
        </Flex>
    </Box>
  )
}

export default CashFooter