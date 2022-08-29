import { Box, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import ReviewCard from './ReviewCard'
import {nanoid} from "nanoid"
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'



const review = [
{
  image1:"",
  discription:`"I've been a Bonsai user for years. It has allowed me to grow my career as a fulltime freelancer especially with the ease of making contracts and collecting payments. With a variety of clients that are all on different payment schedules, Bonsai provided options for each client without difficulty.This quarter I was able to save so much more time filing quarterly tax payments thanks to the tax assistance feature. "`,
  name:"Diane Serra"
}
,{
  image1:"",
  discription:`"Bonsai has been absolutely essential in taking my freelance work from an amateur side-gig to a full-time business. It pays for itself 2x over in the time I save having everything so seamlessly integrated. I love how I'm able to send professional-looking invoices, track billable and non-billable hours, create to-do lists, track finances/expenses, and even create contracts and proposals all in one place."`,
  name:"Danica Mitchell"
}
,{
  image1:"",
  discription:`"We started a new venture to provide digital services to small businesses. Bonsai helped fast track our operations right away. We built upon contract and proposal templates and were able to streamline our operations, as if we were already operating for years. Our clients have all been very impressed with our operations, and we owe a lot of that satisfaction to Bonsai. Thanks! A+ from the Promethean team."`,
  name:"Alexander Exarchou"
}
,{
  image1:"",
  discription:`"Bonsai is the best way to consolidate the “other” side of being in business as a freelancer or independent operator. That is what I love about it; proposals, contracts, invoices - all managed under the same umbrella. This alone has provided a great and streamlined experience for my clients. Bonsai is my armor to get what I’m worth. How I benefit most from Bonsai is having a reliable system to scale the pieces required in order to sustain my practice :)"`,
  name:"Taylor Good"
}
,{
  image1:"",
  discription:`"I love the Bonsai app! It has been a game charger for my web consulting business. From the moment I started using it I was hooked because everything is easy to use and just makes sense, and I love that invoices are easily automated with a click of a button. Highly recommend! 10 out of 10!"`,
  name:"Siska Hines"
}
,{
  image1:"",
  discription:`"Bonsai has been a complete game changer in the freelance world. I love how automated the product is, allowing me to spend more time designing and less time on mundane tasks."`,
  name:"Julie West"
}
,{
  image1:"",
  discription:`"The great thing about Bonsai is that there is not one feature that stands out but how everything is tied together in a super intuitive way. If you want to call that a feature, than that is it. Bonsai is a Swiss Army knife for every freelancer and makes me look good. Invoices, proposals, etc they all provide the same level of professionalism I already offer my client."`,
  name:"Roland van den Hout"
}
,{
  image1:"",
  discription:`"Bonsai is a huge help in my freelance writing business. It's robust with features while still being user friendly. I couldn't stay organized and on-track without it!"`,
  name:"Elizabeth Bienas"
}
,{
  image1:"",
  discription:`"Bonsai takes all the stress out of running a business. It helps me look professional, does all the hard work, and lets me focus on the aspects of my business that I love. Thanks, Bonsai!"`,
  name:"Hannah Walker"
}
,{
  image1:"",
  discription:`"Using Bonsai has been the single best decision I made in streamlining my freelance business. I’ve been able to better manage proposals and contracts, and with the ability to have clients cover payment processing fees, my profits have increased. Bonsai has been a big win!"`,
  name:"Ash Blankenship"
}
,{
  image1:"",
  discription:`"Bonsai is one of my favorite tools for managing my business. I can send my clients proposals, contracts, and invoices all in one tool. Plus I use it to track time for hourly projects. Takes the headache out of managing my business & clients!"`,
  name:"Lara Jordan"
}
,{
  image1:"",
  discription:`Bonsai is the freelancer's Swiss Army knife! Everything I need for managing my clients is right at my fingertips.`,
  name:"Nancy Little"
}
,{
  image1:"",
  discription:`"I found Bonsai the moment I needed a tool to submit a proposal to a client. The app has tracked entire projects from proposal to contract and invoicing, and I can't imagine running my business without it."`,
  name:"Tawny Barbarick"
}
,{
  image1:"",
  discription:`"Bonsai is the best service for freelancers. The legal finesse of contracts is pretty rad & has saved me in sticky client situations. Automatic invoicing and invoicing follow-up messages/reminders are just awesome. I don't have the patience for that but I also like to get paid."`,
  name:"Becca McCarty"
}
,{
  image1:"",
  discription:`"I use Bonsai in my copywriting business every day. It's an excellent, straightforward, and user-friendly hub for my proposals, contracts, and invoicing, and my clients really seem to enjoy the portal that keeps track of tasks and hours worked. The team is so easy to work with and are quick to answer questions and implement suggestions. I recommend Bonsai to everyone who asks!"`,
  name:"Maggie Tyson"
}
,{
  image1:"",
  discription:`"Bonsai has been a game changer for my small business. Being able to send proposals, contracts, and invoices all in the same system is a life saver!! There's no way I could have created and organized all of those documents without losing my sanity or letting something fall through the cracks. Thank you Bonsai!"`,
  name:"Alix Kalfin"
}
,{
  image1:"",
  discription:`"As a freelancer, I was recently burned by a client who refused to pay me for two months of very hard work done. After having to hire an attorney, I realized I needed a way to have stronger contracts with my clients. Bonsai helped me with that and so much more. Bonsai is my new favorite platform to help make my life easier: resourceful, easy to understand, aids in organization, and provides some protection for myself and my clients."`,
  name:"Caitlin Davis"
}
,{
  image1:"",
  discription:`"Being self-employed is incredibly difficult, but Bonsai took the guesswork out of managing proposals, contracts, and invoicing.  I have saved countless hours using Bonsai and I would recommend it to any freelancer looking to simplify their workflows and focus more time and energy where you need it most, on your customers."`,
  name:"Matthew Dunn"
}
,{
  image1:"",
  discription:`"Bonsai is smart, simple and secure! It's amazing how much less you have to worry about boring (but important) paperwork and you get to focus on the actual project, especially for young freelancers with less experience."`,
  name:"Uchechukwu Onyeka"
}
,{
  image1:"",
  discription:`"I'm not sure what I did before Bonsai. It already does so much and the Bonsai team is always adding new features to make it even more useful. Sending proposals, writing contracts, and creating invoices has never been easier. It's totally worth the monthly fee for the peace of mind it provides."`,
  name:"Elizabeth Jones"
}
,{
  image1:"",
  discription:`"I adore Bonsai for its aesthetics, customization and flow. It’s so design conscious, responsive, clean, intuitive and I love that I now have the ability to send beautiful invoices that really reflect my brand. Unlike some of the clunky accounting tools I’ve used in the past. Plus it’s so easy to use. Clients often comment: LOVE IT!! Thank you."`,
  name:"Louise O'Kane"
}
,{
  image1:"",
  discription:`"Bonsai is my favorite tool for my freelance business. It allows me to stay organized with projects and invoices, and Bonsai is always coming out with new features to make their tools even easier to use."`,
  name:"Karlie Jones"
}
,{
  image1:"",
  discription:`"I love using Bonsai, specifically for contracts. There's no printing, scanning and illegible handwriting. Just a smooth process that allows me to get started on a project sooner rather than later and makes me look professional to my clients. I can create my own or use the templates that have already been created, which has saved me so much time and hassle."`,
  name:"Claire Brooks"
}
,{
  image1:"",
  discription:`"I'm new to freelancing and Bonsai has made the transition so much easier. It made me and my biz more professional instantly."`,
  name:"Amanda Larson"
}
,{
  image1:"",
  discription:`"Speaking of @bonsaiinc , I need to take a minute and say how pleased I am with them! I briefly debated leaving them for another provider, but promptly returned. Bonsaii makes creating proposals, contracts, time tracking, and invoices a breeze!"`,
  name:"Cheril Clarke"
}
,{
  image1:"",
  discription:`"The folks at @bonsaiinc just made my day. They're definitely committed to #freelancers - even during these crazy, challenging times. Amazing is what I have to say about the company and their service! Check them out!"`,
  name:"Katie Schenk"
}
,{
  image1:"",
  discription:`"Really glad I made the switch @bonsaiinc about a year ago. They are ON these features and updates, you hear me?!?!"`,
  name:"Ariana Farquharson"
}
,{
  image1:"",
  discription:`"Just wanted to give a shoutout to Matt and the team at @bonsaiinc for the best customer service (more specifically, from a CEO) that I’ve had in a long time. I will be upgrading my plan for sure post-pandemic. Bravo"`,
  name:"Helena Lowe"
}

]


const Review = () => {
  return (
<Box>
  
  <Navbar></Navbar>

    <Box bg={"whitesmoke"} h={"fit-content"} m={"50px auto"} w={"95%"}>

      <Box textAlign={"center"} margin={"20px 0px 0px 0px"} bg={"white"} p={"4%"} fontFamily={"'Amerigo-bt roman opt',sans-serif;"} color={"#4C525A"}>
        <Heading fontWeight={"400"}>Bonsai Reviews</Heading>
        <Text fontWeight={"400"}>200,000+ Freelancers Love Bonsai. Here's why.</Text>
        <Text fontWeight={"400"} fontSize={"small"}>Last Updated April 21,2021</Text>
      </Box>
      <HStack m={" auto"} mb={"20px"} gap={"10px"}>
      <Box
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
           
          <Image minH={"180px"} w={"170px"} marginLeft={"30px"}
          borderTopRightRadius={"50px"} borderBottomLeftRadius={"50px"} backgroundPosition={"50% 50%"} backgroundSize={"cover"}
             src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9ef0355118204b690a5297_KevinT_0096rt1.jpg"
          />
          <Box  w={"30%"}><Image h={"50px"} w={"45px"}  marginTop={"158px"} marginLeft={"30px"}
            src={
              'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg'
            }
            layout={'fill'}
          /></Box>
        </Flex>
        <Stack>
          
          <Text color={'black'}>
          
          "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work."
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          
          <Stack direction={'column'} spacing={0} >
            <Text fontWeight={600} color={'black'}>Kevin Tudball</Text>
            <Text color={'black'}>Illustrator</Text>
          </Stack>
        </Stack>
      </Box>


      <Box
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
           
          <Image minH={"180px"} w={"170px"} marginLeft={"30px"}
          borderTopRightRadius={"50px"} borderBottomLeftRadius={"50px"} backgroundPosition={"50% 50%"} backgroundSize={"cover"}
             src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9ef23d8229a8676579c19f_JasonCuray.jpg"
          />
          <Box  w={"30%"}><Image h={"50px"} w={"45px"}  marginTop={"158px"} marginLeft={"30px"}
            src={
              'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg'
            }
            layout={'fill'}
          /></Box>
        </Flex>
        <Stack>
          
          <Text color={'black'}>
          "I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work."
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          
          <Stack direction={'column'} spacing={0} >
            <Text fontWeight={600} color={'black'}>Kevin Tudball</Text>
            <Text color={'black'}>Illustrator</Text>
          </Stack>
        </Stack>
      </Box>
      </HStack>
        <SimpleGrid columns={2} spacing={4}>
  
      {review.map((item)=> (
            
           <  ReviewCard {...item} key={nanoid()} />

      ))}
   
  
</SimpleGrid>
    </Box>
    <Footer></Footer>
      </Box>
  )
}

export default Review