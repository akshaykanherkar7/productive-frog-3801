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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectAPI } from "../Redux/Project/project.action";

const Dashboardtable = () => {
  const dispatch = useDispatch();
  const { Project } = useSelector((state) => state.project);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getProjectAPI(token));
  }, [dispatch]);
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
          {Project.length > 0 &&
            Project.map((el) => (
              <Tr>
                <Td>{el.title}</Td>
                <Td>{el.startdate}</Td>
                <Td isNumeric>{el.due}</Td>
              </Tr>
            ))}
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
