import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Ma'lumotlar bazasidan ma'lumotlarni yuklash
    // Mock ma'lumotlarni o'rnating
    const mockData = [
      {
        id: 1,
        name: "Product 1",
        price: "$1000",
        category: "Iphone 13  pro max",
        date: "2024-06-01",
      },
      {
        id: 2,
        name: "Product 2",
        price: "$1200",
        category: "Iphone 14  pro max",
        date: "2024-06-02",
      },
      {
        id: 3,
        name: "Product 3",
        price: "$1300",
        category: "Iphone 15  pro max",
        date: "2024-06-03",
      },
      // Qolgan ma'lumotlar
    ];
    setRows(mockData);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Products List
      </Typography>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Name
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Price
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Category
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
