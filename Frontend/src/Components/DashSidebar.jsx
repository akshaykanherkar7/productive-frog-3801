import React from "react";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbFileDollar } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiTask, BiGift } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";
import { TbReceiptTax } from "react-icons/tb";
import { ImFileText2 } from "react-icons/im";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
export const DashSidebar = () => {
  return (
    <Box w="15%" h="100%" position="fixed" borderRight="1px solid grey">
      <Box >
      <Flex  mt="5%" p="5% 10% 5% 10% " justifyContent="space-between">
          <Box m='auto'>
            <Image
              src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"
              alt=""
              width="110px"
            />
          </Box>
          <Box  border='1px' borderColor='#00b289' textallign='center' mb='1%' p='5%' >
          
            <AiOutlinePlus   color="#00b289" />
          </Box>
        </Flex>
        <Box >
          <Box>
         <Flex>   <Box className="icons">
              <FiHome />
            </Box>
            <Box className="psize">
              <p>Dashboard</p>
            </Box></Flex>

          <Flex>  <Box className="icons">
              <IoIosContacts />
            </Box>
            <Box className="psize">
              <p>
                <Link to="Freetrial">Clients</Link>
              </p>
            </Box></Flex>

          <Flex>  <Box className="icons">
              <VscFileSubmodule />
            </Box>
            <Box className="psize">
              <p>
                <Link to="Freetrial">Projects</Link>
              </p>
            </Box></Flex>
          </Box>
          <Box>
            <Box className="icons">
              <GrDocumentText />
            </Box>
            <Box className="psize">
              <p>
                <Link to="Freetrial">Proposls</Link>
              </p>
            </Box>

            <Box className="icons">
              <IoNewspaperOutline />
            </Box>
            <Box className="psize">
              <p>
                <Link to="Freetrial">Contracts</Link>
              </p>
            </Box>

            <Box className="icons">
              <TbFileDollar />
            </Box>
            <Box className="psize">
              <p>
                <Link to="Freetrial">Invoices</Link>
              </p>
            </Box>
          </Box>
          <Box>
            <Box className="icons">
              <MdOutlineWatchLater />
            </Box>
            <Box className="psize">
              <p>
                <Link to="Freetrial">Time Tracking</Link>
              </p>
            </Box>

            <a href="/Tasks">
              <Box className="icons">
                <BiTask />
              </Box>
              <Box className="psize">
                <p>
                  <Link to="tasks">Tasks</Link>
                </p>
              </Box>
            </a>
          </Box>
          <Box>
            <Box className="icons">
              <BsWallet />
            </Box>
            <Box className="psize">
              <Link to="Freetrial">cash</Link>
            </Box>

            <Box className="icons">
              <ImFileText2 />
            </Box>
            <Box className="psize">
              <Link to="Freetrial">Accounting</Link>
            </Box>

            <Box className="icons">
              <TbReceiptTax />
            </Box>
            <Box className="psize">
              <Link to="Freetrial">Taxes</Link>
            </Box>
          </Box>
          <button id="gift">
            <BiGift /> <span>Get One Month Free</span>
          </button>
          <Box className="last">
            <AiOutlineStar />
            <span className="star">Upgrade Your plan</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
