import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
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
import React from "react";
import invoicetable from "./invoicetable.module.css";
import { BiSearch } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";
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

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <div className={invoicetable.buttons_box}>
        <ButtonGroup size="md" isAttached variant="outline">
          <IconButton aria-label="Add to friends" icon={<BiSearch />} />
          <Button>
            Filter
            <Icon marginTop={"10%"} marginLeft={"20%"} as={ChevronDownIcon} />
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
                <FormLabel className={Noinvoices.form_label}>
                  INVOICE TYPE
                </FormLabel>
                <Select placeholder="Single Invoice">
                  <option value="Single Invoice">Single Invoice</option>
                  <option value="Recuring Invoice">Recuring Invoice</option>
                  <option value="Bundled Invoice">Bundled Invoice</option>
                </Select>
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT NAME
                </FormLabel>
                <Input ref={initialRef} placeholder="Jane Smith" />
              </FormControl>
              <FormControl mt={4} className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT EMAIL
                </FormLabel>
                <Input placeholder="new@gmail.com" />
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  NEW PROJECT NAME
                </FormLabel>
                <Input placeholder="Homepage Redesign" />
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
      <div className={invoicetable.table}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr className={invoicetable.table_head}>
                <Th display={"flex"}>
                  ISSUE ON
                  <div className={invoicetable.triangles}>
                    <Icon  as={VscTriangleUp} /> <Icon marginTop={"-5px"} as={VscTriangleDown} />
                  </div>
                </Th>
                <Th isNumeric>
                  <Flex>
                  
                      <div>DUE DATE</div>
                      
                      <div className={invoicetable.triangles}>
                        <Icon as={VscTriangleUp} />{" "}
                        <Icon as={VscTriangleDown} />
                      </div>
                   
                  </Flex>
                </Th>

                <Th isNumeric>PROJECT</Th>
                <Th display={"flex"} isNumeric>
                  #
                  <div className={invoicetable.triangles}>
                    <Icon as={VscTriangleUp} /> <Icon as={VscTriangleDown} />
                  </div>
                </Th>
                <Th isNumeric>CLIENT</Th>
                <Th isNumeric>TOTAL</Th>
                <Th isNumeric>PAID</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className={invoicetable.table_row}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Icon
                    width={"30px"}
                    height={"25px"}
                    as={BiDotsHorizontalRounded}
                  />
                </Td>
              </Tr>
              <Tr className={invoicetable.table_row}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Icon
                    width={"30px"}
                    height={"25px"}
                    as={BiDotsHorizontalRounded}
                  />
                </Td>
              </Tr>
              <Tr className={invoicetable.table_row}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Icon
                    width={"30px"}
                    height={"25px"}
                    as={BiDotsHorizontalRounded}
                  />
                </Td>
              </Tr>
              <Tr className={invoicetable.table_row}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Icon
                    width={"30px"}
                    height={"25px"}
                    as={BiDotsHorizontalRounded}
                  />
                </Td>
              </Tr>
              <Tr className={invoicetable.table_row}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Icon
                    width={"30px"}
                    height={"25px"}
                    as={BiDotsHorizontalRounded}
                  />
                </Td>
              </Tr>
              <Tr className={invoicetable.table_row}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Icon
                    width={"30px"}
                    height={"25px"}
                    as={BiDotsHorizontalRounded}
                  />
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
