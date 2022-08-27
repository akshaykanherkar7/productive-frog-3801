import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
} from "@chakra-ui/react";
import React from "react";

const Dashboardtable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Project Timeline</TableCaption>
        <Thead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Date</Th>
            <Th isNumeric>Due</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Project Name</Th>
            <Th>Date</Th>
            <Th isNumeric>Due</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Dashboardtable;
