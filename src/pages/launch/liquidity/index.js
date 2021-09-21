import React, { useState } from "react";
import { LandingTemplate } from "layout";
import { Button, Link as RedirectLink } from "@material-ui/core";
import banner1 from "images/newWsum4.jpg";
import banner4 from "images/newWsum5.jpg";
import banner2 from "images/newWsum3.jpg";
import banner3 from "images/newWsum2.jpg";
import banner from "images/newWsum1.jpg";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { CurrencyRupeeIcon } from "@heroicons/react/solid";
import Searchs from "../../../components/common/serch";
import AddLiquidity from "../../../components/common/add-liquidity";
import coins from "images/coins.png";
import dollr from "images/$.png";
import LiquidityTable from "components/common/liquidity-tabel";
import { Link } from "react-router-dom";
function Liquidity() {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  return (
    <LandingTemplate>
      <div className="bg-gray-200">
        <div className="grid lg:grid-cols-8 grid-cols-1 items-start gap-10 lg:gap-x-24 xl:w-11/12 mx-auto xl:px-10 md:px-7 px-4 lg:py-20 py-10">
            <div className="text-center text-primary">
                <h2 className="text-primary text-2xl text-center font-extrabold tracking-normal">Welcome to WSUM  DEX,On-Chain Liquidity Provider for Everyone</h2> 
            </div>
          <div className="lg:col-span-5 pt-20 mt-3">
            <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4 text-white">
              <RedirectLink href="https://ramlogics.com/wsum-NFT1/index1.php" target="_blank" className="cursor-pointer">
                <img
                  src={banner1}
                  alt="slot"
                  className="rounded-xl shadow-full cursor-pointer"
                />
              </RedirectLink>
              {/* <Link to="/vdodo" className="cursor-pointer">
              <img
                src={banner2}
                alt="slot"
                className="rounded-xl shadow-full cursor-pointer"
              />
            </Link>
            <Link to="/vdodo" className="cursor-pointer">
              <img
                src={banner3}
                alt="slot"
                className="rounded-xl shadow-full cursor-pointer"
              />
            </Link> */}
              <RedirectLink href="https://ramlogics.com/wsum-NFT1/index1.php" target="_blank" className="cursor-pointer">
                <img
                  src={banner4}
                  alt="slot"
                  className="rounded-xl shadow-full cursor-pointer"
                />
              </RedirectLink>
            </div>
            
            <div className="py-6 w-full"> 
                <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4 text-white">
                  <RedirectLink href="https://ramlogics.com/CrowdPoolngList/crowd-pooling.html" target="_blank" className="cursor-pointer">
                    <img
                      src={banner2}
                      alt="slot"
                      className="rounded-xl shadow-full cursor-pointer"
                    />
                  </RedirectLink> 
                  <RedirectLink href="https://ramlogics.com/CrowdPoolngList/join-crowdsale.php?version=0x5c19EEb4d3bc3eD7aFeEC37AF14D12e267E69b57" target="_blank" className="cursor-pointer">
                    <img
                      src={banner3}
                      alt="slot"
                      className="rounded-xl shadow-full cursor-pointer"
                    />
                  </RedirectLink>
                </div>
                {/*<p className="text-gray-100 text-xl font-medium pb-5">
                My Liquidity
              </p>
            <LiquidityTable />*/}
            </div> 
          </div>
          
          <div className="lg:col-span-3 text-white">
            
            <iframe src="http://72.167.42.251:3000/liquidity" title="Ramlogics" height='700px' width="100%"/> 
          </div>
        </div>
      </div>
    </LandingTemplate>
  );
}

export default Liquidity;
