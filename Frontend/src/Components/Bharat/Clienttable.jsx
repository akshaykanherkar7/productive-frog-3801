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
import React, { useEffect, useState } from "react";
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
import { TiCloudStorage } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  createClientAPI,
  deleteClientAPI,
  getClientAPI,
} from "../../Redux/Client/client.action";

const Clienttable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setshow] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [clientusername, setClientusername] = useState("");
  const [clientfullname, setClientfullname] = useState("");
  const [clientemail, setClientemail] = useState("");
  const [clienttags, setClienttags] = useState("");

  const dispatch = useDispatch();
  const { Client } = useSelector((state) => state.client);
  const token = localStorage.getItem("token");

  const handleAddClient = () => {
    let NewClient = {
      clientusername: clientusername,
      clientfullname: clientfullname,
      clientemail: clientemail,
      tags: clienttags,
    };
    dispatch(createClientAPI(NewClient, token)).then((res) => {
      dispatch(getClientAPI(token));
    });
    onClose();
  };

  const handleDeleteClient = (id) => {
      dispatch(deleteClientAPI(id,token)).then((res) => {
        dispatch(getClientAPI(token))
      })
  }

  useEffect(() => {
    dispatch(getClientAPI(token));
  }, [dispatch]);

  const handleclick = () => {
    setshow(!show);
  };

  return (
    <div>
      <div className={clienttable.buttons_box}>
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
                <FormLabel className={Noinvoices.form_label}>Tags</FormLabel>
                <Select
                  placeholder="Tags"
                  onChange={(e) => setClienttags(e.target.value)}
                >
                  <option value="Client">Client</option>
                  <option value="Lead">Lead</option>
                </Select>
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT User Name
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="janesmith"
                  onChange={(e) => setClientusername(e.target.value)}
                />
              </FormControl>
              <FormControl className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  Client Name
                </FormLabel>
                <Input
                  placeholder="Jane Smith"
                  onChange={(e) => setClientfullname(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} className={Noinvoices.input_box}>
                <FormLabel className={Noinvoices.form_label}>
                  CLIENT EMAIL
                </FormLabel>
                <Input
                  placeholder="new@gmail.com"
                  onChange={(e) => setClientemail(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <hr className={Noinvoices.hrline2} />
            <ModalFooter>
              <Button
                colorScheme="green"
                w={"90%"}
                margin="auto"
                onClick={handleAddClient}
              >
                Create Client
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className={clienttable.left_buttons}>
          <Button colorScheme="whatsapp" variant="ghost">
            <Icon as={TiCloudStorage} />
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
      {show ? (
        <div className={clienttable.filter_box_parent}>
          <div className={clienttable.filter_box}>
            <div className={clienttable.select_name}>
              <p>PROJECT</p>
              <Select
                className={clienttable.filter_select}
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
            <div className={clienttable.select_name}>
              <p>STATUS</p>
              <Select
                className={clienttable.filter_select}
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
            <div className={clienttable.select_name}>
              <p>CLIENT</p>
              <Select
                className={clienttable.filter_select}
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
              {Client.map((el, inx) => (
                <Tr>
                  <Td>{el.clientusername}</Td>
                  <Td>{el.clientfullname}</Td>
                  <Td>{el.clientemail}</Td>
                  <Td>
                    <Flex className={clienttable.tabledata_col4}>
                      {el.tags}
                    </Flex>
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
                              Update Client
                            </p>
                            <p className={clienttable.dots_menu_text} onClick={() => handleDeleteClient(el._id)}>
                              Delete Client
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
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Clienttable;
