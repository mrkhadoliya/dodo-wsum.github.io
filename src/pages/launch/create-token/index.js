import React from "react";
import { LandingTemplate } from "layout";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import Search from "images/search.svg";
import img from "images/menu.svg";
import Table from "components/common/tabel-token";
import { Link } from "react-router-dom";
function CreateToken() {
  return (
    <LandingTemplate>
      <div className="md:pt-16 pt-22 pb-10 xl:px-14 md:px-9 px-4 md:space-y-8 space-y-4 bg-gray-200 min-h-screen"> 
        <iframe src="https://ramlogics.com/create-token/?version=vsjhacjh" title="Buy GAJ" height='1130px' width="100%"/>
      </div>
    </LandingTemplate>
  );
}

export default CreateToken;
