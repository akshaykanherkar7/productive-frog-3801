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
  Switch
  
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import Pricing1 from './Pricing1';
// import { FaCheckCircle } from 'react-icons/fa';



function PriceWrapper({ children }) {
  return (
    
    <Box
      mb={4}
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

    
      <Box py={12}   w={"80%"} marginLeft={"10%"}>
      
      
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
        <PriceWrapper>
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
            <List spacing={3} textAlign="start" px={12} >
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
                Proposals & Contracts
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Tasks & Time Tracking
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Client CRM
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Expense Tracking
              </ListItem>
              <ListItem >
                <ListIcon as={FaCheckCircle} color="green.500" />
                Up to 5 Project Collaborators
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
            <Button w="full" color={'#fff'} variant="outline" bg={"#00B289"} marginTop={"140px"}>
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
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
                <ListItem>
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
                <ListItem>
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
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" marginTop={"90px"}>
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
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
    <Box w={"80%"}  marginLeft={"10%"}>
      <Pricing1/>
    </Box>
    </Box>
  );
}

