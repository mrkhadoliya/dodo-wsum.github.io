import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4c549c",
    border: "none !important",
    color: "#fff",
    fontSize: "14px",
  },
  body: {
    color: "#000",
    fontSize: "14px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    color: "#000",
  },
}))(TableRow);

var rows = [
  {
    rate: "0%",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function LiquidityTable() {
  const classes = useStyles();

  return (
    <TableContainer className="max-h-76 overflow-y-auto rounded-lg">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="rounded-l-lg">Token</StyledTableCell>
            <StyledTableCell className="text-center">APR</StyledTableCell>
            <StyledTableCell className="rounded-r-lg text-right">
              Claimable Rewards
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <p className="p-5 py-4">No results found</p> */}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.rate}</StyledTableCell>
              <StyledTableCell className="text-center">
                {row.rate}
              </StyledTableCell>
              <StyledTableCell className="text-right">
                {row.rate}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default LiquidityTable;
