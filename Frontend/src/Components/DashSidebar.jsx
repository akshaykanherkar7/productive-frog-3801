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
      <Box>
        <Flex mt="5%" p="7% 12% 7% 12% " justifyContent="space-between">
          <Box m="auto"  _hover={{
                cursor: "pointer",
              }}>
            <Image
              src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"
              alt=""
              width="110px"
            />
          </Box>
          <Box
           _hover={{
            cursor: "pointer",
          }}
            border="1px"
            borderColor="#00b289"
            textallign="center"
            mb="1%"
            borderRadius={"3px"}
            p="5%"
          >
            <AiOutlinePlus color="#00b289" />
          </Box>
        </Flex>
        <Box opacity=".8" >
          <Box pb="15%" m="auto" opacity=".8">
            <Flex pb="5%"  _hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <FiHome />
                </Box>
                &nbsp; Dashboard
              </Flex>
            </Flex>

            <Flex pb="5%" _hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                {" "}
                <Box m="auto">
                  <IoIosContacts />
                </Box>
                <Box>
                  <p>
                    <Link to="Freetrial">&nbsp;Clients</Link>
                  </p>
                </Box>
              </Flex>
            </Flex>

            <Flex pb="5%" _hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <VscFileSubmodule />
                </Box>
                &nbsp;Projects
              </Flex>
            </Flex>
          </Box>
          <Box pb="15%" opacity=".8">
            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <GrDocumentText />
                </Box>
                &nbsp;Proposls
              </Flex>
            </Flex>

            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <IoNewspaperOutline />
                </Box>
                &nbsp;Contracts
              </Flex>
            </Flex>

            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <TbFileDollar />
                </Box>
                &nbsp;Invoices
              </Flex>
            </Flex>
          </Box>
          <Box pb="15%" opacity=".8">
            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <MdOutlineWatchLater />
                </Box>
                &nbsp;Time Tracking
              </Flex>
            </Flex>

            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <BiTask />
                </Box>
                &nbsp;Tasks
              </Flex>
            </Flex>
          </Box>
          <Box pb="15%" opacity=".8">
            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <BsWallet />
                </Box>
                &nbsp;cash
              </Flex>
            </Flex>

            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <ImFileText2 />
                </Box>
                &nbsp;Accounting
              </Flex>
            </Flex>

            <Flex pb="5%"_hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500"
              }}>
              <Flex m="auto" p="auto">
                <Box></Box>
                <Box m="auto">
                  <TbReceiptTax />
                </Box>
                &nbsp;Taxes
              </Flex>
            </Flex>
          </Box>

          <Flex pb="5%" m="auto" pt="5%" color="#00b289" bg="#f2fbf9">
            <Flex
              m="auto"
              border="1px"
              borderColor="#00b289"
              borderRadius="5px"
              p="2%"
              _hover={{
                cursor: "pointer",
               
                fontWeight:"500"
              }}
            >
              <Box></Box>
              <Box m="auto">
                <BiGift />
              </Box>
              &nbsp;Get One Month Free
            </Flex>
          </Flex>

          <Flex pb="5%" mt="100px" opacity=".8" _hover={{
                cursor: "pointer",
                color:"black",
                fontWeight:"500",
                backgroundColor:"lightgrey"
              }}>
            <Flex m="auto" p="auto">
              <Box></Box>
              <Box m="auto">
                <AiOutlineStar />
              </Box>
              &nbsp;Upgrade Your plan
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
