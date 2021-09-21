import React from "react";
import { LandingTemplate } from "layout";
import { Link } from "react-router-dom";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import ArrowRight from "images/arrow-right.svg";
import Search from "images/search.svg";
import TabsMining from "components/common/tabs-mining";
function Liquidity() {
  return (
    <LandingTemplate>
      <div className="pt-36 pb-24 xl:px-22 md:px-9 px-4 min-h-auto bg-gray-200">
         <iframe src="http://199.250.203.175:3000/farms" title="Ramlogics" height='700px' width="100%"/>
      </div> 
    </LandingTemplate>
  );
}

export default Liquidity;
