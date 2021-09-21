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
    borderBottom: "1px solid #404040",
    fontSize: "14px",
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    color: "#fff",
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
    balance: {
      rate: "$118.7M",
    },
    operation: {
      rate: "$118.7M",
    },
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className="max-h-96 overflow-y-autos">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="rounded-l-lg py-6">
              Crowdpooling Address
            </StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell className="whitespace-nowrap">
              Total Supply
            </StyledTableCell>
            <StyledTableCell className="whitespace-nowrap">
              Expected Liquidity Pool Size
            </StyledTableCell>
            <StyledTableCell className="whitespace-nowrap">
              Liquidity Protection
            </StyledTableCell>
            <StyledTableCell>Progress</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell className="rounded-r-lg w-32">
              Side
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <p className="p-5 py-4">No results found</p> */}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>
                <p>{row?.rate}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.volume?.rate}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.liquidity?.rate1}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.myliquidity?.rate2}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.volume?.rate}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.balance?.rate}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.operation?.rate}</p>
              </StyledTableCell>
              <StyledTableCell>
                <p>{row?.operation?.rate}</p>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;
