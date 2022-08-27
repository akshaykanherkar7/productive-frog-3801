import React from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Switch,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  
} from '@chakra-ui/react';
import styled from "styled-components";
import { FaCheckCircle } from 'react-icons/fa';

 import { MdKeyboardArrowRight } from 'react-icons/md';

import {Link as RouterLink} from "react-router-dom"


function PriceWrapper({ children }) {
  return (
    
    <Box
      mb={4}
      background="#fff"
      shadow="base"
      borderWidth="1px"
      height="100vh"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue( 'gray.400')}
      borderRadius={'1px'}>
      {children}
      
    </Box>
    
    
  );
}

export default function Pricing() {
  
  return (
  
    <Box >
      
       <Box  overflow={"visible"} bg={"#F2FAFF"} style={{positon:"relative",width:"100%",height:"600px",clipPath:"polygon(50% 0% , 100% 0%,100% 50% ,50% 100%,0% -15%,0% 0%)"}}>
       </Box>
       
<Box style={{position:"absolute",marginTop:"-560px",marginLeft:"150px"}}>
      <Box py={12}   w={"80%"} marginLeft={"10%"} fontFamily={"'Amerigo-bt roman opt',sans-serif"} color={"#4C525A"} >
      
      
      <HStack spacing={6} textAlign="center" justify={"center"}>
        <Heading as="h1" fontSize="4xl">
        Plans & Pricing
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        MONTHLY  
        </Text><Stack direction='row'>
  <Switch colorScheme='teal' size='lg' />
</Stack>
    <Text>YEARLY</Text>
      </HStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>


         <PriceWrapper >
          <Box py={2} px={12}  textAlign={"left"}>
            <Text fontWeight="500" fontSize="1.5rem" >
            Starter
            </Text>
            <Text w={"200px"} fontSize="12px">Ideal for freelancers and contractors just starting out.</Text>
            <HStack >
              <Text fontSize="3xl" fontWeight="600"  >
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900"   >
                24
              </Text>
              <Text fontSize="3xl" color="gray.500"   >
                /month
              </Text>
            </HStack>
            <Box w={"220px"} h={'2px'} bg={'green.600'}></Box>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'} >
            <List spacing={3} textAlign="start" px={12} w={"350px"}>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                All Templates
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited Clients & Projects
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Invoicing & Payments
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Proposals & Contracts
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Tasks & Time Tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Client CRM
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Expense Tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Up to 5 Project Collaborators
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited Project Collaborators
              </ListItem>
              
            </List>
            <Box w="80%" pt={7} paddingTop={"100px"} >
              <Button w="full" color={'#fff'} variant="outline" bg={"#00B289"} >
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
         {/* < LogoWrapper >
        <p> MOST POPULAR</p>
         </LogoWrapper> */}
          <Box py={2} px={12}  textAlign={"left"}>
            <Text fontWeight="500" fontSize="1.5rem" >
            Professional
            </Text>
            <Text w={"200px"} fontSize="12px">Everything a growing independent business needs to thrive.</Text>
            <HStack >
              <Text fontSize="3xl" fontWeight="600"  >
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900"   >
                39
              </Text>
              <Text fontSize="3xl" color="gray.500"   >
                /month
              </Text>
            </HStack>
            <Box w={"220px"} h={'2px'} bg={'green.600'}></Box>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'} >
            <List spacing={3} textAlign="start" px={12} w={"350px"}>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Everything in Starter plus...
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Custom Branding
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Forms & Questionnaires
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Workflow Automations
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Client Portal
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                QuickBooks Integration
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Calendly Integration
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Zapier Integration
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Up to 15 Project Collaborators
              </ListItem>
              
            </List>
            <Box w="80%" pt={7} paddingTop={"100px"} >
              <Button  w="full" color={'#fff'} variant="outline" bg={"#00B289"}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={2} px={12}  textAlign={"left"}>
            <Text fontWeight="500" fontSize="1.5rem" >
            Business
            </Text>
            <Text w={"200px"} fontSize="12px">The perfect package for small businesses and agencies.</Text>
            <HStack >
              <Text fontSize="3xl" fontWeight="600"  >
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900"   >
                79
              </Text>
              <Text fontSize="3xl" color="gray.500"   >
                /month
              </Text>
            </HStack>
            <Box w={"220px"} h={'2px'} bg={'green.600'}></Box>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'} >
            <List spacing={3} textAlign="start" px={12} w={"350px"}>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Everything in Starter and Professional plus...
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Hiring Agreement Templates (1099 contracts)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Subcontractor Onboarding
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Talent Pool
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                3 Team Seats (additional seats $9/month)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Accountant Access
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Connect Multiple Bank Accounts
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited Subcontractors
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited Project Collaborators
              </ListItem>
              
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" color={'#fff'} variant="outline" bg={"#00B289"}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
      </Box>       
     
    </Box>
    
    <Box w={"100%"}  h={"300vh"} color={"gray.500"} style={{marginTop:"400px"}} >

      <Heading textAlign={"center"} fontWeight={400} color={"gray.700"} >Super charge your work with add-ons</Heading>
      <Flex direction={"column"} gap={"50px"} mt={"70px"} justify={"space-around"}  p={4}>


    <Flex  w={"70%"} justifyContent={"space-around"} shadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} p={8} margin={"auto"} >
      <Stack  lineHeight={"1rem"} >
        <Heading fontSize={"22px"}>Collaborators</Heading>
        <Text fontSize={"16px"}> Invite other users to specific projects for limited access and functionality.</Text>
      </Stack>
      <Stack><Heading fontSize={"28px"}>Free</Heading></Stack>
    </Flex>

    <Flex w={"70%"} justifyContent={"space-around"} shadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} p={8} margin={"auto"} >
      <Stack  lineHeight={"1rem"} >
        <Heading fontSize={"22px"}>Collaborators</Heading>
        <Text fontSize={"16px"}> Invite other users to specific projects for limited access and functionality.</Text>
      </Stack>
      <Stack lineHeight={"0"}><Heading fontSize={"28px"}>$9</Heading>
      <Text fontSize={"12px"}>/MONTH</Text>
      </Stack>
    </Flex>
    

    <Flex w={"70%"} justifyContent={"space-around"} shadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}  p={8} margin={"auto"} >
      <Stack  lineHeight={"1rem"} >
        <Heading fontSize={"22px"}>Bonsai Tax</Heading>
        <Text fontSize={"16px"}> Track expenses, identify write-offs, and estimate quarterly taxes easily.</Text>
        
        <Flex  color={"#00B289"} fontSize={"10px"} fontWeight={"bold"} ><RouterLink to={"#"}><span>LEARN MORE</span></RouterLink> <span style={{fontSize:"15px"}}>< MdKeyboardArrowRight/></span> </Flex>
        
      </Stack>
      <Stack lineHeight={"0"}><Heading fontSize={"28px"}>$10</Heading>
      <Text fontSize={"12px"}>/MONTH</Text>
      </Stack>
    </Flex>
    </Flex>


    <Flex direction={"row"} w={"70%"} h={"200px"} margin={"80px auto"}  justifyContent={"center"} bg={"#F2FAFF"} borderRadius={"2%"}>
      <Stack width={"50%"}  ><Heading  margin={"auto"} fontFamily={"'Amerigo-bt roman opt',sans-serif"} color={"#4C525A"} >It’s <span style={{color:"#00B289"}}>your</span> business.<br/>
We’re here to help it grow.</Heading></Stack>
      <Stack width={"50%"} ><Button w="40%" h={"50px"} color={'#fff'} variant="outline" bg={"#00B289"} margin={"auto"}>GO TO DASHBOARD</Button></Stack>
    </Flex>



      
    <Stack w={"70%"} margin={"auto"}>
    <Heading margin={"auto"} paddingBottom={"20px"} fontSize={"30px"} color={"#00B289"}>Frequently Asked Questions</Heading>
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bold"} fontSize={"20px"} fontFamily={"'Amerigo-bt roman opt',sans-serif"} color={"#4C525A"} _hover={{
                    color:"#00B289",
                  }}>
        How does the free trial work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bold"} fontSize={"20px"} fontFamily={"'Amerigo-bt roman opt',sans-serif"} color={"#4C525A"} _hover={{
                    color:"#00B289",
                  }}>
        Can I change plans anytime?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bold"} fontSize={"20px"} fontFamily={"'Amerigo-bt roman opt',sans-serif"} color={"#4C525A"}  _hover={{
                    color:"#00B289",
                  }}>
        How do I pause my Bonsai subscription?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight={"bold"} fontSize={"20px"} fontFamily={"'Amerigo-bt roman opt',sans-serif"} color={"#4C525A"} _hover={{
                    color:"#00B289",
                  }}>
        What is your refund policy?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Stack>
    </Box>
    
    </Box>
  );
}




const LogoWrapper =styled.div`
position: absolute;
    
  
    
   
    width: 330px;
    padding: 2px ;
    background-color: #01b289;
    margin-top:57px;
    margin-left:193px;
    
    transform: rotate(45deg);
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    clip-path: 
    polygon(
      60% 0% , 100% 100%,100% 50% ,50% 100%,100% 100%,100% 100%
     
    );
   
`

// clipPath: polygon(50% 0% , 100% 0%,100% 50% ,50% 100%,0% -15%,0% 0%);