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
import projecttable from "./projecttable.module.css";
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
import { TiCloudStorage } from "react-icons/ti";

const Projecttable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setshow] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleclick = () => {
    setshow(!show);
  };

  return (
    <div>
      <div className={projecttable.buttons_box}>
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
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT NAME
                </FormLabel>
                <Input ref={initialRef} placeholder="Jane Smith" />
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  NEW PROJECT NAME
                </FormLabel>
                <Input placeholder="Homepage Redesign" />
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  ISSUED ON
                </FormLabel>
                <Input type={"date"} placeholder="Homepage Redesign" />
              </FormControl>{" "}
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>DUE</FormLabel>
                <Input type="number" placeholder="Enter Amount" />
              </FormControl>
              <FormControl mt={4} className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>PAID</FormLabel>
                <Input type="number" placeholder="Enter Amount" />
              </FormControl>
            </ModalBody>
            <hr className={Noinvoices.hrline2} />
            <ModalFooter>
              <Button colorScheme="green" w={"90%"} margin="auto">
                Create Project
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button onClick={onOpen} colorScheme="green" variant="solid">
          Create a Project
        </Button>
      </div>
      {show ? (
        <div className={projecttable.filter_box_parent}>
          <div className={projecttable.filter_box}>
            <div className={projecttable.select_name}>
              <p>PROJECT</p>
              <Select
                className={projecttable.filter_select}
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
            <div className={projecttable.select_name}>
              <p>STATUS</p>
              <Select
                className={projecttable.filter_select}
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
            <div className={projecttable.select_name}>
              <p>CLIENT</p>
              <Select
                className={projecttable.filter_select}
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
        </div>
      ) : (
        ""
      )}
      <div className={projecttable.table}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr className={projecttable.table_head}>
                                <Th isNumeric>
                  <Flex>
                    <div>Title</div>

                    <div className={projecttable.triangles}>
                      <Icon as={VscTriangleUp} />
                      <Icon
                        className={projecttable.trianglesdown}
                        as={VscTriangleDown}
                      />
                    </div>
                  </Flex>
                </Th>
                <Th display={"flex"}>
                  CLIENT
                  <div className={projecttable.triangles}>
                    <Icon as={VscTriangleUp} />
                    <Icon
                      className={projecttable.trianglesdown}
                      as={VscTriangleDown}
                    />
                  </div>
                </Th>

                <Th className={projecttable.thead_email} isNumeric>
                  <Flex>START DATE </Flex>
                </Th>
                <Th isNumeric>
                  <Flex>DUE</Flex>
                </Th>
                                <Th isNumeric>
                  <Flex>PAID</Flex>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>12/12/2012</Td>
                <Td>
                  2000
                </Td>
                <Td>25.4</Td>
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
                        <Flex className={projecttable.dots_menu}>
                          <p className={projecttable.dots_menu_text}>
                            View Project
                          </p>
                          <p className={projecttable.dots_menu_text}>
                            Mark as Completed
                          </p>
                                                    <p className={projecttable.dots_menu_text}>
                            Archieve Project
                          </p>
                                                    <p className={projecttable.dots_menu_text}>
                            Delete Project
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

export default Projecttable;
