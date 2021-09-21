import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "../src/utils/router";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
function App() {
//   const metamaskconnect = () => {
//       window.ethereum.enable();
//   }
//   let connectedAccount = false;
//   // Check for the Account of Connnected Wallet
// const ConnectWallet = async () => {
//     if (window.ethereum) {
//       window.ethereum.request({ method: "eth_requestAccounts" })
//         .then((accounts) => {
//           if (accounts[0]) {
//             connectedAccount = accounts[0];
//           }
//         });
//     } 
//   }
// ConnectWallet();
//  metamaskconnect();
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
