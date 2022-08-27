import {
  Box,
  Image,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import "../Components/Navbar.css";
import { useState } from "react";
const Homepage1 = () => {
  const handleClick = () => {
    window.scrollTo(0, 1);
  };
  const [proposal, setProposal] = useState(true);
  const [contract, setContract] = useState(false);
  const [clients, setClients] = useState(false);
  const [time, setTime] = useState(false);
  const [invoices, setInvoices] = useState(false);
  const [task, setTask] = useState(false);
  const [accounting, setAccounting] = useState(false);
  const [forms, setForms] = useState(false);
  const handleProposal = () => {
    setProposal(true);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleContractsl = () => {
    setProposal(false);
    setContract(true);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleClients = () => {
    setProposal(false);
    setContract(false);
    setClients(true);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleTime = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(true);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleInvoices = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(true);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleTask = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(true);
    setAccounting(false);
    setForms(false);
  };
  const handleAccounting = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(true);
    setForms(false);
  };
  const handleForms = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(true);
  };
  return (
    <Box >
      <Navbar />
      <Box className="blue-box ">
      <Box className="blue-shape _11"></Box>
      </Box>
    
      <Wrap>
        <WrapItem></WrapItem>
        <WrapItem></WrapItem>
      </Wrap>
      <Flex>
        <Box w="50%">
          <Box mt="22%" ml="22%">
            <Box fontSize={45}>
              Everything you need to
              <br /> run your business.
            </Box>
            <Box fontSize={20}>
              Bonsai’s all-in-one product suite with smart
              <br /> automation lets you focus on your passion, not <br />
              your paperwork.
            </Box>

            <InputGroup w="80%" h="4rem" mt="5%" p="auto" borderRadius={"5px"}>
              <Input
                h="3.9rem"
                m="auto"
                focusBorderColor="#00b289"
                border="2px solid #00b289"
                borderRadius="  5px 0 0 5px"
                placeholder="Enter Email"
              />

              <Button
                h="4rem"
                m="auto"
                borderRadius=" 0 5px  5px 0"
                background="#00b289"
                _hover={{
                  background: "#00a289",
                  color: "white",
                }}
                color="white"
                w="12rem"
                onClick={handleClick}
              >
                START FREE
              </Button>
            </InputGroup>
          </Box>
        </Box>
        <Box w="50%">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"></Image>
        </Box>
      </Flex>

      <Box>
        <Image
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c68e1feb659_shape-2.svg"
          alt="Left blue shape"
          class="shape-two"
        />
        <Flex
          justifyContent={"center"}
          pt="5%"
          opacity=".8"
          fontSize={"2.34rem"}
          m="auto"
          fontWeight="600"
        >
          Make more, manage less
        </Flex>
        <Flex
          justifyContent={"center"}
          pt="5%"
          opacity=".8"
          fontSize={"1.44rem"}
          m="auto"
        >
          Bonsai integrates and automates every step of your business so it
        </Flex>
        <Flex
          justifyContent={"center"}
          opacity=".8"
          fontSize={"1.44rem"}
          m="auto"
        >
          {" "}
          runs seamlessly - from proposal to tax season.
        </Flex>
        <Wrap m="auto" spacing="5%" justify="center" pt="5%">
          <WrapItem m="auto">
            <Center>
              {" "}
              <Box>
                <Flex
                  fontSize={"1.34rem"}
                  justifyContent="center"
                  pt="5%"
                  pb="5%"
                  m="auto"
                  fontWeight={"600"}
                >
                  Without Bonsai
                </Flex>
                <Box>
                  <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg" />
                </Box>
              </Box>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center>
              {" "}
              <Box>
                <Flex
                  fontSize={"1.34rem"}
                  justifyContent="center"
                  pt="5%"
                  pb="5%"
                  m="auto"
                  fontWeight={"600"}
                >
                  With Bonsai
                </Flex>
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg" />
              </Box>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>

      <Box w="100%" h="1000px" align="center">
        <Flex w="80%" pt="15%" p="5%">
          <Box w="40%" className="leftDivDropdown" fontSize={"1.5rem"}
          
          >
          
           <Flex  p="5%"   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }} opacity=".7" onClick={handleProposal}>
              <Image  
                w="30px"  
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto"  style={{ paddingLeft: "15px" }}>
                Proposals
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleContractsl}>
              <Image 
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto" textAlign='left' style={{ paddingLeft: "15px" }}>
                Contracts
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleClients}>
              <Image  
                w="30px"  
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto" textAlign='left' style={{ paddingLeft: "15px" }}>
                Client CRM
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleTime}>
              <Image 
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto" textAlign='left' style={{ paddingLeft: "15px" }}>
                Time Tracking
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleInvoices}>
              <Image 
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto" textAlign='left' style={{ paddingLeft: "15px" }}>
                Invoices
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleTask}>
              <Image 
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto" textAlign='left' style={{ paddingLeft: "15px" }}>
                Task Tracking
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleAccounting}>
              <Image 
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cee21feb676_icon%207.svg"
                alt=""
               
                height="30px"
              />
              <Box w="auto" textAlign='left' style={{ paddingLeft: "15px" }}>
                Accounting and taxes
              </Box>
            </Flex>
            <hr />
            <Flex   _hover={{
                  cursor: "pointer",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }}  p="5%" spacing="-24px" opacity=".7" onClick={handleForms}>
              <Image 
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e72bbe6e8264bb7bbfe4820_dark-forms.svg"
                alt=""
             
                height="30px"
              />
              <Box  style={{ paddingLeft: "15px" }}>
                Forms
              </Box>
            </Flex>
            <hr />
         
          </Box>
          <Box w="70%"  className="rightDivDropdown">
            {proposal ? (
              <Proposals />
            ) : contract ? (
              <Contracts />
            ) : clients ? (
              <Clients />
            ) : time ? (
              <Time />
            ) : invoices ? (
              <Invoices />
            ) : task ? (
              <Task />
            ) : accounting ? (
              <Accounting />
            ) : (
              <Forms />
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Homepage1;

const Accounting = () => {
  return (
    <div>
      <div className="upperDivSub">
        <Heading opacity=".9" size='xl'>Automate Your Finances</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Don't worry about freelance finances
          <br /> when you have automatic expense
          <br /> tracking, income reporting and <br />
          estimated tax planning.
        </p>
        <Box className="e">
          EXPLORE ACCOUNTING AND TAXES <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image className="lowerDivSub"
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png"
          height="auto"
          width="auto"
        />
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <div>
      <div className="upperDivSub" >
        <Heading opacity=".9" size='xl'>Stay Organized</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Manage your clients and ongoing
          <br /> projects all in one place. Organize
          <br /> all the documents, files and
          <br /> payments together for you and your
          <br /> client.
        </p>
        <Box className="e">
          EXPLORE PROJECTS <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png"
          height="500px"
          width="600px" ml='20%'
        />
      </div>
    </div>
  );
};

const Contracts = () => {
  return (
    <div>
      <div className="upperDivSub">
        <Heading opacity=".9" size='xl'>Protect Your Business</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Simply answer a few questions to
          <br /> generate an already vetted contract
          <br /> template. Once you hit send, the
          <br /> contract can be e-signed in minutes.
        </p>
        <Box className="e">
          EXPLORE CONTRACTS <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png"
          height="500px"
          width="600px" ml='20%'
        />
      </div>
    </div>
  );
};

const Forms = () => {
  return (
    <div>
      <div className="upperDivSub">
        <Heading opacity=".9" size='xl'>Ask Your Clients</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Create your own customized forms
          <br /> and questionnaires for clients and
          <br /> kicking off new projects
        </p>
        <Box className="e">
          EXPLORE FORM <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png"
          height="500px"
          width="600px" ml='20%'
        />
      </div>
    </div>
  );
};

const Invoices = () => {
  return (
    <div>
      <div className="upperDivSub">
        <Heading opacity=".9" size='xl'>Get Paid Faster</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Create and customize invoices,
          <br /> receive updates about payment
          <br /> timelines, and have automatic
          <br /> payment reminders sent on your
          <br /> behalf.
        </p>
        <Box className="e">
          EXPLORE INVIOCES <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png"
          height="500px"
          width="600px" ml='20%'
        />
      </div>
    </div>
  );
};
const Proposals = () => {
  return (
    <>
      <div>
        <div className="upperDivSub">
          <Heading opacity=".9" size='xl'>Win More Work</Heading>
          <br />
          <p style={{ fontSize: "20px" }}>
            With just a few clicks, you can craft
            <br /> structured proposals with clear <br />
            estimates to close your deals faster.
          </p>
          <Box className="e">
            EXPLORE PROPOSALS <hr />
          </Box>
        </div>
        <div className="lowerDivSub">
          <Image
            w="30px"
            h="10px"
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png"
            height="500px"
            width="600px" ml='20%'
          />
        </div>
      </div>
    </>
  );
};
const Task = () => {
  return (
    <div>
      <div className="upperDivSub">
        <Heading opacity=".9" size='xl'>Be More Effective</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Give your day more structure with
          <br /> simple task management on your
          <br /> projects. Track time for each task
          <br /> and stay up-to-date.
        </p>
        <Box className="e">
          EXPLORE TASKS <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png"
          height="500px"
          width="600px" ml='20%'
        />
      </div>
    </div>
  );
};

const Time = () => {
  return (
    <div>
      <div className="upperDivSub">
        <Heading opacity=".9" size='xl'>Keep It Simple</Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Easily track the time you're working,
          <br /> automatically populate timesheets
          <br /> and seamlessly switch between your
          <br /> projects for the day.
        </p>
        <Box className="e">
          EXPLORE TIME TRACKING <hr />
        </Box>
      </div>
      <div className="lowerDivSub">
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png"
          height="500px"
          width="600px" ml='20%'
        />
      </div>
    </div>
  );
};
