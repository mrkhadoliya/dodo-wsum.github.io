import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ChartPieIcon, CurrencyRupeeIcon } from "@heroicons/react/solid";
import { ShareIcon, DuplicateIcon } from "@heroicons/react/outline";
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
              Token
            </StyledTableCell>
            <StyledTableCell className="whitespace-nowrap">
              Token Name
            </StyledTableCell>
            <StyledTableCell>Total Issuance</StyledTableCell>
            <StyledTableCell>Holders</StyledTableCell>
            <StyledTableCell className="whitespace-nowrap">
              Price / Market Cap / Liquidity
            </StyledTableCell>
            <StyledTableCell>Balance</StyledTableCell>
            <StyledTableCell className="rounded-r-lg w-32">
              Management Operation
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <p className="p-5 py-4">No results found</p> */}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="flex">
                    {row.id}{" "}
                    <ShareIcon
                      height="30px"
                      width="15px"
                      className="ml-2 -mt-1"
                    />
                    <DuplicateIcon
                      height="30px"
                      width="15px"
                      className="ml-2 -mt-1"
                    />
                  </div>
                  <div>
                    <span
                      style={{ background: "#1E514C", color: "#06D6BC" }}
                      className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none   rounded-full text-xs	"
                    >
                      {row.pool}
                    </span>
                  </div>
                </div>

                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.rate}</StyledTableCell>
              <StyledTableCell>
                <div className="flex whitespace-nowrap">
                  <div>
                    <ChartPieIcon
                      height="55px"
                      width="85px"
                      className="-mt-2 -ml-5"
                      style={{ color: "#F3E554" }}
                    />
                  </div>
                  <div>
                    <ul>
                      <li>{row?.liquidity?.rate1}</li>
                      <li>{row?.liquidity?.rate1}</li>
                    </ul>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <p className="flex whitespace-nowrap">
                  <CurrencyRupeeIcon
                    className="mr-2"
                    style={{ color: "#27A17C" }}
                    width="25px"
                  />

                  {row?.myliquidity?.rate1}
                </p>
                <p className="flex whitespace-nowrap">
                  <CurrencyRupeeIcon
                    className="mr-2"
                    style={{ color: "#2F7ACC" }}
                    width="25px"
                  />
                  {row?.myliquidity?.rate2}
                </p>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;
