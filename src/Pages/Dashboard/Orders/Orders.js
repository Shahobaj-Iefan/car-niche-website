import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Orders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAllOrders(data));
  }, []);
  return (
    <div>
      <Typography variant='h5' component='div'>
        All Orders={allOrders.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Product Name</TableCell>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map(row => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.customerName}
                </TableCell>
                <TableCell align='right'>{row.productName}</TableCell>
                <TableCell align='right'>{row.phone}</TableCell>
                <TableCell align='right'>{row.email}</TableCell>
                <TableCell align='right'>{row.delete}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
