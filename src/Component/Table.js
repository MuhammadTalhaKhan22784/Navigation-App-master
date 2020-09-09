import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./user.css"

const useStyles = makeStyles({
//   table: {
//     maxWidth: 500,
//   },
});

function createData(LoginId, FirstName, LastName, Email) {
  return { LoginId, FirstName, LastName, Email};
}

const rows = [
  createData('10', 159, 6.0, 'xyz123@gmail.com'),
  createData('11', 237, 9.0, 'xyz123@gmail.com'),
  createData('12', 262, 16.4,'xyz123@gmail.com'),
  createData('13', 305, 3.7, 'xyz123@gmail.com'),
  createData('15', 356, 16.0, 'xyz123@gmail.com'),
];

export default function SimpleTable() {

  return (
    <TableContainer className="Maintable" component={Paper} >
      <Table className="tableData" aria-label="simple table">
        <TableHead>
          <TableRow ClassName="tb-row" >
            <TableCell  align="right">LoginId</TableCell>
            <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName&nbsp;(g)</TableCell>
            <TableCell align="right">Email&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.LoginId}>
              <TableCell align="right">
                {row.LoginId}
              </TableCell>
              <TableCell align="right">{row.FirstName}</TableCell>
              <TableCell align="right">{row.LastName}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
