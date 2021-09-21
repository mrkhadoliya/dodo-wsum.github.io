import React from "react";
import { LandingTemplate } from "layout";
import { Link } from "react-router-dom";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import Info from "images/info.svg";
import ArrowRight from "images/arrow-right.svg";
import Search from "images/search.svg";
import Tabs from "components/common/tabs";
function Join() {
  return (
    <LandingTemplate>
      <div className="md:px-20 px-5 py-10 pt-20 bg-gray-200 min-h-screen">
         <iframe src="https://ramlogics.com/wsum_dodojson/crowd_pool.php" title="Buy GAJ" height='1000px' width="100%"/>
      </div>
    </LandingTemplate>
  );
}

export default Join;
