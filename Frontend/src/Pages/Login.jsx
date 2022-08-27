import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Container
  } from '@chakra-ui/react';
// import "./Login.css;"
  import {useState} from "react"
import { Navbar } from '../Components/Navbar';
  
  export default function SimpleCard() {

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")


    const handleClick = async () => {
        const data = {
            email,
            password
        }
       await fetch("http://localhost:8080/user/login", {
            method : "POST",
            body : JSON.stringify(data),
            headers : {"Content-Type" : "application/json"}
        }).then((res) => res.json()).then((res) => localStorage.setItem("token", res.token)).catch((err) => console.log(err))
    }

    
    return (

     

      <Flex
        minH={'100vh'}
        align={'center'}
        justifyContent={"space-evenly"}
        bg={useColorModeValue('gray.50', 'gray.800')}>

<Container className='containLog'
padding='4'
 marginTop="0"  maxW='sm'  bg={useColorModeValue('white', 'gray.700')}
 boxShadow={'lg'} centerContent>

<Heading size="md" >The Changelog</Heading>

<Box className='line' ></Box>


<Box fontSize="smaller" bg='white' color='gray.800' marginTop="2" padding='4'  maxW='md'>
  You can now create client forms and surveys, no matter which plan you are on. The forms also have an updated, cleaner look.

  </Box>


  <Box  fontSize="smaller" marginTop="2" padding='4'  bg='white' color='gray.800' maxW='sm'>
  In your invoice settings, you can now pick “Simplified payment page”.

Instead of seeing the entire invoice with a small payment section on the right, they’ll see all the payments option upfront with the ability to view the invoice on scroll.
  </Box>

 


  <Box fontSize="smaller" bg='white' color='gray.800' marginTop="2" padding='4' maxW='md'>
  Keep your accounting synced between Bonsai and QuickBooks with the new QuickBooks Online integration.

Available on the Workflow Plus, Professional, and Business plan, it automatically sends your paid invoices in Bonsai to QuickBooks Online. No more manually downloading and uploading your invoices!
  </Box>
</Container>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          
          <Box
          paddingStart='100'
            w={'120%'}
            marginLeft={'-30'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>

<Stack align={'center'}>
            <Heading marginBottom={'10'} style={{"color" : "#00B289"}} fontSize={'4xl'}>Sign </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'#00B289'}>features</Link> ✌️
            </Text> */}
          </Stack>

            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  value={password} onChange={(e) => {setPassword(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  
                </Stack>
                <Button onClick={handleClick}
                  bg='#00B289'
                  color={'white'}
                  _hover={{
                    bg: '#00B289',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
            <Box align={'center'}
                  justify={'center'} >
            <Link marginTop="100px" color={'#00B289'}>Reset password?</Link>
            <br/>
            <Link margin='10' justifyContent="center" color={'#00B289'} href='https://app.hellobonsai.com/users/confirmation/new'>Resend Verification Email</Link>
            </Box>
          </Box>
          
        </Stack>
      </Flex>
    );
  }