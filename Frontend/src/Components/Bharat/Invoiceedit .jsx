import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Icon,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import invoiceedit from "./invoiceedit.module.css";
import { TbPhoto } from "react-icons/tb";

const Invoiceedit = () => {
  const [invoiceNumnber, setinvoiceNumnber] = useState(1001);
  const [accountname, setaccountname] = useState("Bharat Rozodkar");
  const [nameofClient, setnameofClient] = useState("Sample client");
  return (
    <div className={invoiceedit.main}>
      <div className={invoiceedit.top_buttons}>
        <div>
          <Button
            rightIcon={<ChevronDownIcon />}
            colorScheme="gray"
            variant="outline"
          >
            More Options
          </Button>
        </div>
        <div className={invoiceedit.top_buttons_right}>
          <Button colorScheme="gray" variant="outline">
            Schedule Later
          </Button>
          <Button colorScheme="green">Send Now</Button>
        </div>
      </div>
      <div className={invoiceedit.editbox_main}>
        <div className={invoiceedit.editbox_top}>
          <div>
            {" "}
            <p>
              <Icon as={TbPhoto} /> Add Background
            </p>
          </div>
          <div className={invoiceedit.invoiceNum}>
            <p>INVOICE #</p>
            <Editable defaultValue={invoiceNumnber}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </div>
        </div>
        <div className={invoiceedit.profile}>
          <img
            className={invoiceedit.profile_image}
            src="https://cdn-icons-png.flaticon.com/512/20/20079.png"
            alt=""
          />
          <p className={invoiceedit.profile_text}>Sample Client Invoice</p>
        </div>
        <hr />
        <div className={invoiceedit.detail}>
          <div>
            <p className={invoiceedit.editable_text_gray}>FROM</p>
            <Editable defaultValue="Bharat Rozodkar">
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Editable
              className={invoiceedit.editable_text_gray}
              defaultValue="Your Company LLC"
            >
              <EditablePreview />
              <EditableInput placeholder="" />
            </Editable>
            <Editable
              className={invoiceedit.editable_text_gray}
              defaultValue="Add Address"
            >
              <EditablePreview />
              <EditableInput placeholder="" />
            </Editable>
            <p className={invoiceedit.editable_text_email}>bharat@gmail.com</p>
          </div>
          <div>
            <p className={invoiceedit.editable_text_gray}>TO</p>
            <Editable
              className={invoiceedit.editable_name}
              defaultValue="Sample Client"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Editable
              className={invoiceedit.editable_text_gray}
              defaultValue="Client Compapny LLC"
            >
              <EditablePreview />
              <EditableInput placeholder="Client Compapny LLC" />
            </Editable>
            <Editable
              className={invoiceedit.editable_text_gray}
              defaultValue="Client Address"
            >
              <EditablePreview />
              <EditableInput placeholder="Add Address" />
            </Editable>
            <p className={invoiceedit.editable_text_email}>Client@gmail.com</p>
          </div>
        </div>
        <div className={invoiceedit.date}>
          <div>
            <p className={invoiceedit.editable_text_gray}>ISSUED ON</p>
            <Editable
              className={invoiceedit.date_text}
              defaultValue="Aug 25, 2022"
            >
              <EditablePreview />
              <EditableInput type="date" placeholder="Date" />
            </Editable>
          </div>
          <div className={invoiceedit.date_left}>
            <p className={invoiceedit.editable_text_gray}>DUE DATE</p>
            <Editable
              className={invoiceedit.date_text}
              defaultValue="Sep 24, 2022"
            >
              <EditablePreview />
              <EditableInput placeholder="Date" />
            </Editable>
          </div>
        </div>
        <hr />
        <div>
          <p>My Awesome Sample Project</p>
          <div>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Item Name</Th>
                    <Th>Units</Th>
                    <Th isNumeric>multiply by</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td><Input placeholder='Example Item' /></Td>
                    <Td><Input placeholder='Basic usage' /></Td>
                    <Td ><Input placeholder='Basic usage' /></Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          <p>Add New Row</p>
        </div>
      </div>
    </div>
  );
};

export default Invoiceedit;
