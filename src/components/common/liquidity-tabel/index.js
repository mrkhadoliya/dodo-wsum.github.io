import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
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
    id: "0xc9f9...5161ad",
    pool: "Public Pool",
    rate: "0.01%",

    liquidity: {
      rate1: "13.83M USDT (30.05%)",
      rate2: "13.83M USDT (30.05%)",
    },
    myliquidity: {
      rate1: "0 USDT",
      rate2: "0 USDC",
    },
    volume: {
      rate: "$118.7M",
    },
  },
  {
    id: "0xc9f9...5161ad",
    pool: "Public Pool",
    rate: "0.01%",

    liquidity: {
      rate1: "13.83M USDT (30.05%)",
      rate2: "13.83M USDT (30.05%)",
    },
    myliquidity: {
      rate1: "0 USDT",
      rate2: "0 USDC",
    },
    volume: {
      rate: "$118.7M",
    },
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function StakeTable() {
  const classes = useStyles();

  return (
    <TableContainer className="max-h-96 overflow-y-auto bg-gray-200 rounded-lg shadow-full">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="rounded-l-lg py-4">
              Pool
            </StyledTableCell>
            <StyledTableCell>My Liquidity</StyledTableCell>
            <StyledTableCell className="rounded-r-lg">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <p className="p-5 py-4">No results found</p> */}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.rate}</StyledTableCell>
              <StyledTableCell>{row.rate}</StyledTableCell>
              <StyledTableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outlined"
                    classes={{
                      root: "rounded-lg tracking-normal tracking-wider py-1 text-xs px-4",
                    }}
                    color="secondary"
                  >
                    Manage
                  </Button>
                  <Button
                    variant="outlined"
                    classes={{
                      root: "rounded-lg tracking-normal tracking-wider py-1 text-xs px-4",
                    }}
                    color="secondary"
                  >
                    Detail
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default StakeTable;
