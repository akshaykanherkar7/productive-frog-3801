import {
  Button,
  ButtonGroup,
  chakra,
  Divider,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import clienttable from "./clienttable.module.css";
import { BiSearch } from "react-icons/bi";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Noinvoices from "./Noinvoices.module.css";
import { FaCrown } from "react-icons/fa";
import {TiCloudStorage} from "react-icons/ti"

const Clienttable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setshow] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleclick = () => {
    setshow(!show);
  };

  return (
    <div>
      <div className={clienttable.buttons_box}>
         <Popover marginLeft="50px">
                    <PopoverTrigger>
   <ButtonGroup size="md" isAttached variant="outline">
          <IconButton aria-label="Add to friends" icon={<BiSearch />} />
          <Button onClick={handleclick}>
            Filter
            {show ? (
              <Icon marginTop={"10%"} marginLeft={"20%"} as={ChevronDownIcon} />
            ) : (
              <Icon marginTop={"10%"} marginLeft={"20%"} as={ChevronUpIcon} />
            )}
          </Button>
        </ButtonGroup>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex className={clienttable.dots_menu}>
 <div className={clienttable.select_name}>
              <p>STATUS</p>
              <Select
                className={clienttable.filter_select}
                placeholder="Active"
              >
                <option value="Active">Active</option>
                <option value="Archieved">Archieved</option>
              </Select>
            </div> <div className={clienttable.select_name}>
              <p>TAGS</p>
              <Select
                className={clienttable.filter_select}
                placeholder="Select..."
              >
                <option value="CLIENT">CLIENT</option>
                <option value="LEAD">LEAD</option>
              </Select>
            </div>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className={Noinvoices.header} margin={"auto"}>
              Create a Client
            </ModalHeader>
            <ModalCloseButton />
            <hr className={Noinvoices.hrline} />
            <ModalBody pb={6}>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>Tags</FormLabel>
                <Select placeholder="Tags">
                  <option value="Client">Client</option>
                  <option value="Lead">Lead</option>
                </Select>
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT User Name
                </FormLabel>
                <Input ref={initialRef} placeholder="janesmith" />
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  Client Name
                </FormLabel>
                <Input placeholder="Jane Smith" />
              </FormControl>
              <FormControl mt={4} className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT EMAIL
                </FormLabel>
                <Input placeholder="new@gmail.com" />
              </FormControl>
            </ModalBody>
            <hr className={Noinvoices.hrline2} />
            <ModalFooter>
              <Button colorScheme="green" w={"90%"} margin="auto">
                Create Client
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className={clienttable.left_buttons}>
          <Button colorScheme="whatsapp" variant="ghost">
            <Icon   as={TiCloudStorage} />
            Import CSV
          </Button>
          <Button
            colorScheme="black"
            variant="outline"
            border={"0.2px solid gray"}
          >
            Client Portal
          </Button>

          <Button onClick={onOpen} colorScheme="green" variant="solid">
            Create a Client
          </Button>
        </div>
      </div>
      
      <div className={clienttable.table}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr className={clienttable.table_head}>
                <Th display={"flex"}>
                  CLIENT
                  <div className={clienttable.triangles}>
                    <Icon as={VscTriangleUp} />
                    <Icon
                      className={clienttable.trianglesdown}
                      as={VscTriangleDown}
                    />
                  </div>
                </Th>
                <Th isNumeric>
                  <Flex>
                    <div>CONTACT NAME</div>

                    <div className={clienttable.triangles}>
                      <Icon as={VscTriangleUp} />
                      <Icon
                        className={clienttable.trianglesdown}
                        as={VscTriangleDown}
                      />
                    </div>
                  </Flex>
                </Th>
                <Th className={clienttable.thead_email} isNumeric>
                  <Flex>CONTACT EMAIL</Flex>
                </Th>
                <Th isNumeric>
                  <Flex>TAGS</Flex>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>
                  <Flex className={clienttable.tabledata_col4}>inches</Flex>
                </Td>
                <Td>
                  <Popover marginLeft="50px">
                    <PopoverTrigger>
                      <Button>
                        <Icon
                          width={"30px"}
                          height={"25px"}
                          as={BiDotsHorizontalRounded}
                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody>
                        <Flex className={clienttable.dots_menu}>
                          <p className={clienttable.dots_menu_text}>
                            View Client
                          </p>
                          <p className={clienttable.dots_menu_text}>
                            Invite to Client Portal
                          </p>
                          <p className={clienttable.dots_menu_text}>
                            Archieve Client
                            <Icon
                              className={clienttable.crown_icon}
                              as={FaCrown}
                            />
                          </p>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Clienttable;
