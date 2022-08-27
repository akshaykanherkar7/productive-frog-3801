import {
  Button,
  ButtonGroup,
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
import invoicetable from "./invoicetable.module.css";
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


const Invoicestable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setshow] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleclick=()=>{
  setshow(!show)
   }

  return (
    <div>
      <div className={invoicetable.buttons_box}>
        <ButtonGroup size="md" isAttached variant="outline">
          <IconButton aria-label="Add to friends" icon={<BiSearch />} />
          <Button onClick={handleclick}>
            Filter
           {show?  <Icon marginTop={"10%"} marginLeft={"20%"} as={ChevronDownIcon} />:

            <Icon marginTop={"10%"} marginLeft={"20%"} as={ChevronUpIcon} />}
          </Button>
        </ButtonGroup>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className={Noinvoices.header} margin={"auto"}>
              Create an Invoice
            </ModalHeader>
            <ModalCloseButton />
            <hr className={Noinvoices.hrline} />
<ModalBody pb={6}>
             <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>CLIENT NAME</FormLabel>
              <Input ref={initialRef} placeholder='Jane Smith' />
            </FormControl>

            <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>NEW PROJECT NAME</FormLabel>
              <Input  placeholder='Homepage Redesign' />
            </FormControl>  
            <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>ISSUED ON</FormLabel>
              <Input type={"date"}  placeholder='Homepage Redesign' />
            </FormControl>              <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>DUE DATE</FormLabel>
              <Input type={"date"} placeholder=' Homepage Redesign' />
            </FormControl>              <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>TOTAL</FormLabel>
              <Input type="number" placeholder='Enter Amount' />
            </FormControl>  
                        <FormControl mt={4} className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>PAID</FormLabel>
              <Input type="number" placeholder='Enter Amount'/>
            </FormControl>                    
          </ModalBody>     
            <hr className={Noinvoices.hrline2} />
            <ModalFooter>
              <Button colorScheme="green" w={"90%"} margin="auto">
                Create Invoice
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button onClick={onOpen} colorScheme="green" variant="solid">
          Create an Invoice
        </Button>
      </div>
    {show? <div className={invoicetable.filter_box_parent}>
        <div className={invoicetable.filter_box}>
          <div className={invoicetable.select_name}>
            <p>PROJECT</p>
            <Select
              className={invoicetable.filter_select}
              placeholder="Select..."
            >
              <option  value="option1">Drafted</option>
              <option  value="option2">Scheduled</option>
              <option  value="option3">Outstanding</option>
              <option  value="option1">Overdue</option>
              <option  value="option1">Pending</option>
              <option  value="option1">Paid</option>
            </Select>
          </div>
          <div className={invoicetable.select_name}>
            <p>STATUS</p>
            <Select
              className={invoicetable.filter_select}
              placeholder="Select..."
            >
              <option value="option1">Drafted</option>
              <option value="option2">Scheduled</option>
              <option value="option3">Outstanding</option>
              <option value="option1">Overdue</option>
              <option value="option1">Pending</option>
              <option value="option1">Paid</option>
            </Select>
          </div>
          <div className={invoicetable.select_name}>
            <p>CLIENT</p>
            <Select
              className={invoicetable.filter_select}
              placeholder="Select..."
            >
              <option value="option1">Drafted</option>
              <option value="option2">Scheduled</option>
              <option value="option3">Outstanding</option>
              <option value="option1">Overdue</option>
              <option value="option1">Pending</option>
              <option value="option1">Paid</option>
            </Select>
          </div>
        </div>
      </div>:""
      }
      <div className={invoicetable.table}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr className={invoicetable.table_head}>
                <Th display={"flex"}>
                  ISSUE ON
                  <div className={invoicetable.triangles}>
                    <Icon as={VscTriangleUp} />
                    <Icon
                      className={invoicetable.trianglesdown}
                      as={VscTriangleDown}
                    />
                  </div>
                </Th>
                <Th isNumeric>
                  <Flex>
                    <div>DUE DATE</div>

                    <div className={invoicetable.triangles}>
                      <Icon as={VscTriangleUp} />
                      <Icon
                        className={invoicetable.trianglesdown}
                        as={VscTriangleDown}
                      />
                    </div>
                  </Flex>
                </Th>
                <Th display={"flex"} isNumeric>
                  #
                  <div className={invoicetable.triangles}>
                    <Icon as={VscTriangleUp} />
                    <Icon
                      className={invoicetable.trianglesdown}
                      as={VscTriangleDown}
                    />
                  </div>
                </Th>
                <Th isNumeric>PROJECT</Th>
                <Th  isNumeric><Flex marginLeft={"24px"}>CLIENT</Flex></Th>
                <Th isNumeric>TOTAL</Th>
                <Th isNumeric>PAID</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr >
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td  >25.4</Td>
                <Td ><Flex className={invoicetable.tabledata_col4}>inches</Flex></Td>
                <Td className={invoicetable.tabledata_col5}><Flex className={invoicetable.tabledata_col5}>millimetres (mm)</Flex></Td>
                <Td  isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
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
                        <Flex className={invoicetable.dots_menu}>
                          <p className={invoicetable.dots_menu_text}>
                            Previe Invoice
                          </p>
                          <p className={invoicetable.dots_menu_text}>
                            Edit Invoice
                          </p>
                          <p className={invoicetable.dots_menu_text}>
                            Mark as Paid
                          </p>
                          <p className={invoicetable.dots_menu_text}>
                            Duplicate
                          </p>
                          <p className={invoicetable.dots_menu_text}>
                            Delete Invoice
                          </p>
                          <Divider orientation="horizontal" />
                          <p className={invoicetable.dots_menu_text}>
                            View Project
                          </p>
                          <p className={invoicetable.dots_menu_text}>
                            Default Settings
                          </p>
                          <p className={invoicetable.dots_menu_text}>
                            Manage Reminders
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

export default Invoicestable;
