import React from 'react';
// import Image from 'next/image';
import {
  Box,
  Text,
  Stack,
  Image,
  Flex
} from '@chakra-ui/react';

export default function ReviewCard(props) {
  const {discription,name}= props;
  return (
      <Box
    
      boxShadow={"none"}
        h={"450px"}
        w={'full'}
        bg={"white"}
        // boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>

        <Flex
        
          h={'50%'}
          bg={"white"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'} >
           
          {/* <Image minH={"180px"} w={"170px"} marginLeft={"30px"}
          borderTopRightRadius={"50px"} borderBottomLeftRadius={"50px"} backgroundPosition={"50% 50%"} backgroundSize={"cover"}
             src={image1}
          /> */}
          <Box  w={"30%"}><Image h={"50px"} w={"45px"}  marginTop={"158px"} marginLeft={"30px"}
            src={
              'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg'
            }
            layout={'fill'}
          /></Box>
        </Flex>
        <Stack>
          
          <Text color={'black'}>
          {discription}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          
          <Stack direction={'column'} spacing={0} >
            <Text fontWeight={600} color={'black'}>{name}</Text>
            {/* <Text color={'black'}>Illustrator</Text> */}
          </Stack>
        </Stack>
      </Box>
  
  );
}